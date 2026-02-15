import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageFooter from "@/components/PageFooter";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background">
      <PageNavigation />

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
              {submitted ? (
                <div className="text-center py-20">
                  <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-4">
                    Thank You
                  </h3>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    Your inquiry has been received. We will be in touch shortly to arrange your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
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
                      className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                      Area of Interest
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="dental-implants">Dental Implants</option>
                      <option value="full-arch">Full-Arch Rehabilitation</option>
                      <option value="aesthetic">Aesthetic Dentistry</option>
                      <option value="maxillofacial">Maxillofacial Rehabilitation</option>
                      <option value="general">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block px-12 py-4 border border-navy text-navy font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground mt-4"
                  >
                    Submit Inquiry
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
                  <p className="font-body text-sm text-charcoal-light font-light mb-2">
                    info@drparmar.com
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light">
                    +1 (555) 000-0000
                  </p>
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
