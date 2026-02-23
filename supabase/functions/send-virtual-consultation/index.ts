import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface VirtualConsultationPayload {
  name: string;
  email: string;
  primaryConcern: string;
  clinicalSituation: string;
  caseDescription: string;
  pageUrl?: string;
  honeypot?: string;
  fileNames?: string[];
  fileContents?: string[]; // base64 encoded
  fileMimeTypes?: string[];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload: VirtualConsultationPayload = await req.json();

    // Bot protection
    if (payload.honeypot) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!payload.name?.trim() || !payload.email?.trim() || !payload.primaryConcern?.trim() || !payload.caseDescription?.trim() || !payload.clinicalSituation?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "All required fields must be completed." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/New_York",
    });

    // Build attachments array for Resend
    const attachments: { filename: string; content: string }[] = [];
    if (payload.fileNames && payload.fileContents) {
      for (let i = 0; i < payload.fileNames.length; i++) {
        attachments.push({
          filename: payload.fileNames[i],
          content: payload.fileContents[i],
        });
      }
    }

    const filesNote = attachments.length > 0
      ? `<tr><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Attachments:</td><td style="padding:8px 16px;color:#444;">${attachments.length} file(s) attached</td></tr>`
      : "";

    const htmlBody = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a2942; padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 20px; font-weight: 300; letter-spacing: 0.1em; margin: 0;">
            VIRTUAL CONSULTATION REQUEST
          </h1>
          <p style="color: rgba(255,255,255,0.6); font-size: 11px; letter-spacing: 0.15em; margin: 12px 0 0;">
            FEE: $195 · APPLIED TOWARD TREATMENT
          </p>
        </div>
        <div style="padding: 32px; background: #f9f8f6;">
          <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 20px;">
            Submitted · ${escapeHtml(timestamp)}
          </p>
          <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 4px; overflow: hidden;">
            <tr><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Name:</td><td style="padding:8px 16px;color:#444;">${escapeHtml(payload.name.trim())}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Email:</td><td style="padding:8px 16px;color:#444;"><a href="mailto:${escapeHtml(payload.email.trim())}" style="color:#1a2942;">${escapeHtml(payload.email.trim())}</a></td></tr>
            <tr><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Primary Concern:</td><td style="padding:8px 16px;color:#444;">${escapeHtml(payload.primaryConcern)}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Clinical Situation:</td><td style="padding:8px 16px;color:#444;">${escapeHtml(payload.clinicalSituation)}</td></tr>
            <tr><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Case Description:</td><td style="padding:8px 16px;color:#444;white-space:pre-wrap;">${escapeHtml(payload.caseDescription.trim())}</td></tr>
            ${filesNote}
          </table>
        </div>
        <div style="padding: 16px 32px; text-align: center; background: #eee;">
          <p style="color: #999; font-size: 11px; margin: 0;">Virtual Consultation Request · drparmar.com</p>
        </div>
      </div>
    `;

    const emailPayload: Record<string, unknown> = {
      from: "Dr. Parmar Website <onboarding@resend.dev>",
      to: ["drparmardds@gmail.com"],
      subject: `Virtual Consultation: ${payload.name.trim()} - ${payload.primaryConcern}`,
      html: htmlBody,
      reply_to: payload.email.trim(),
    };

    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend API error:", JSON.stringify(resendData));
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send consultation request." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send acknowledgement email to patient
    const ackHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff;">
        <div style="padding: 48px 32px 32px; text-align: center; border-bottom: 1px solid #e8e6e3;">
          <p style="color: #999; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 24px;">
            Board-Certified Prosthodontist
          </p>
          <h1 style="color: #1a2942; font-size: 22px; font-weight: 300; letter-spacing: 0.05em; margin: 0;">
            Consultation Request Received
          </h1>
        </div>
        <div style="padding: 36px 32px;">
          <p style="color: #555; font-size: 14px; line-height: 1.8; margin: 0 0 18px;">
            Thank you for submitting your Virtual Consultation request.
          </p>
          <p style="color: #555; font-size: 14px; line-height: 1.8; margin: 0 0 18px;">
            Your submission has been received and will be reviewed by our office.
          </p>
          <p style="color: #555; font-size: 14px; line-height: 1.8; margin: 0 0 18px;">
            Virtual consultations are structured to ensure appropriate clinical preparation and case evaluation.
          </p>
          <p style="color: #555; font-size: 14px; line-height: 1.8; margin: 0;">
            Our team will contact you shortly regarding availability and next steps.
          </p>
        </div>
        <div style="padding: 24px 32px 36px; text-align: center;">
          <div style="width: 40px; height: 1px; background: #ccc; margin: 0 auto 20px;"></div>
          <p style="color: #aaa; font-size: 11px; line-height: 1.6; margin: 0;">
            Virtual consultations are offered in limited weekly capacity.
          </p>
        </div>
      </div>
    `;

    // Fire-and-forget: don't fail the main request if ack email fails
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Dr. Parmar <onboarding@resend.dev>",
          to: [payload.email.trim()],
          subject: "Consultation Request Received",
          html: ackHtml,
        }),
      });
    } catch (ackErr) {
      console.error("Acknowledgement email error:", ackErr);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Edge function error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
