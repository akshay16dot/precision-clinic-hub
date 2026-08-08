import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface InquiryFormProps {
  formType: string;
  pageSource: string;
  heading?: string;
  subheading?: string;
  fields?: ("name" | "email" | "phone" | "message")[];
  messagePlaceholder?: string;
  messageLabel?: string;
  submitLabel?: string;
}

const InquiryForm = ({
  formType,
  pageSource,
  heading = "Get in Touch",
  subheading,
  fields = ["name", "email", "phone", "message"],
  messagePlaceholder,
  messageLabel = "Message",
  submitLabel = "Submit",
}: InquiryFormProps) => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          message: message.trim(),
          formType,
          pageSource,
          pageUrl: window.location.href,
          honeypot,
        },
      });

      if (error) throw error;
      if (!data?.success) throw new Error(data?.error || "Failed to send");

      setFormState("success");
    } catch (err) {
      console.error("Form submission error:", err);
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="text-center py-16">
        <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-4">
          Thank You
        </h3>
        <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
          Your message was sent. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
      {heading && (
        <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-2">{heading}</h3>
      )}
      {subheading && (
        <p className="font-body text-xs text-charcoal-light font-light tracking-wide mb-8">
          {subheading}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        {fields.includes("name") && (
          <div>
            <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
              Full Name
            </label>
            <input
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors"
            />
          </div>
        )}

        {fields.includes("email") && (
          <div>
            <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
              Email Address
            </label>
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors"
            />
          </div>
        )}

        {fields.includes("phone") && (
          <div>
            <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
              Phone Number
            </label>
            <input
              type="tel"
              maxLength={20}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors"
            />
          </div>
        )}

        {fields.includes("message") && (
          <div>
            <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
              {messageLabel}
            </label>
            <textarea
              rows={4}
              required
              maxLength={2000}
              placeholder={messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors resize-none"
            />
          </div>
        )}

        {formState === "error" && (
          <p className="font-body text-sm text-red-600 font-light">
            Something went wrong. Please email{" "}
            <a href="mailto:drparmardds@gmail.com" className="underline">drparmardds@gmail.com</a>
          </p>
        )}

        <button
          type="submit"
          disabled={formState === "submitting"}
          className="inline-block px-12 py-4 border border-navy text-navy font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState === "submitting" ? "Sending..." : submitLabel}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
