import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  formType: string;
  pageSource: string;
  honeypot?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload: ContactPayload = await req.json();

    // Bot protection: honeypot field should be empty
    if (payload.honeypot) {
      // Silently accept but don't send (bot detected)
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const phoneLine = payload.phone?.trim()
      ? `<tr><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Phone:</td><td style="padding:8px 16px;color:#444;">${escapeHtml(payload.phone.trim())}</td></tr>`
      : "";

    const htmlBody = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a2942; padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 20px; font-weight: 300; letter-spacing: 0.1em; margin: 0;">
            NEW INQUIRY
          </h1>
        </div>
        <div style="padding: 32px; background: #f9f8f6;">
          <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 20px;">
            ${escapeHtml(payload.formType)} · ${escapeHtml(payload.pageSource)}
          </p>
          <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 4px; overflow: hidden;">
            <tr><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Name:</td><td style="padding:8px 16px;color:#444;">${escapeHtml(payload.name.trim())}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Email:</td><td style="padding:8px 16px;color:#444;"><a href="mailto:${escapeHtml(payload.email.trim())}" style="color:#1a2942;">${escapeHtml(payload.email.trim())}</a></td></tr>
            ${phoneLine}
            <tr style="background:#fafafa;"><td style="padding:8px 16px;font-weight:600;color:#1a2942;vertical-align:top;">Message:</td><td style="padding:8px 16px;color:#444;white-space:pre-wrap;">${escapeHtml(payload.message.trim())}</td></tr>
          </table>
        </div>
        <div style="padding: 16px 32px; text-align: center; background: #eee;">
          <p style="color: #999; font-size: 11px; margin: 0;">Sent from drparmar.com · ${new Date().toLocaleDateString("en-US", { dateStyle: "long" })}</p>
        </div>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Dr. Parmar Website <onboarding@resend.dev>",
        to: ["drparmardds@gmail.com"],
        subject: `New ${payload.formType} from ${payload.name.trim()}`,
        html: htmlBody,
        reply_to: payload.email.trim(),
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend API error:", JSON.stringify(resendData));
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
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
