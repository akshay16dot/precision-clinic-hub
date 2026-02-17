import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import { supabase } from "@/integrations/supabase/client";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const fullMessage = interest
        ? `Area of Interest: ${interest}\n\n${message}`
        : message;

      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          message: fullMessage.trim(),
          formType: "Consultation Request",
          pageSource: "Contact Page",
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

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 bg-background">
        <div className="luxury-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-light mb-8"
          >
            Board-Certified Prosthodontist · New Jersey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy leading-[0.95] mb-10"
          >
            Schedule a
            <br />
            <span className="italic font-light">Consultation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto"
          >
            We welcome the opportunity to discuss your needs. Please complete the form below, and our team will be in touch to arrange a convenient time.
          </motion.p>
        </div>
      </section>

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Contact Form + Info */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
              {formState === "success" ? (
                <div className="text-center py-20">
                  <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-4">
                    Thank You
                  </h3>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    Your message has been received. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot - hidden from humans */}
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
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                      Area of Interest
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Full-Arch Rehabilitation">Full-Arch Rehabilitation</option>
                      <option value="Aesthetic Dentistry">Aesthetic Dentistry</option>
                      <option value="Maxillofacial Rehabilitation">Maxillofacial Rehabilitation</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      maxLength={2000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="font-body text-sm text-red-600 font-light">
                      Submission failed. Please try again or contact the office directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-block px-12 py-4 border border-navy text-navy font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-12 lg:pt-4">
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-4">
                    Location
                  </p>
                  <p className="font-display text-xl md:text-2xl font-light text-charcoal leading-relaxed">
                    New Jersey
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light mt-2">
                    Serving patients across Northern and Central New Jersey.
                  </p>
                </div>

                <div className="w-12 h-px bg-navy" />

                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-4">
                    Contact
                  </p>
                  <a
                    href="mailto:drparmardds@gmail.com"
                    className="font-body text-sm text-charcoal-light font-light hover:text-navy transition-colors"
                  >
                    drparmardds@gmail.com
                  </a>
                </div>

                <div className="w-12 h-px bg-navy" />

                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-4">
                    Consultation Process
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    New patient consultations begin with a comprehensive clinical evaluation, diagnostic imaging review, and personalized treatment discussion. Please allow approximately 60–90 minutes for your initial visit.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default Contact;
