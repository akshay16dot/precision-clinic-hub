import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import InquiryForm from "@/components/InquiryForm";
import { usePageSEO } from "@/hooks/usePageSEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const Contact = () => {
  usePageSEO({
    title: "Contact | Prosthodontist Consultation New Jersey",
    description: "Schedule a specialist consultation with a Board-Certified Prosthodontist in New Jersey. Implant rehabilitation, full-arch reconstruction, failed implant correction, and complex dental care evaluation.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-48 pb-20 md:pt-56 md:pb-28 px-6 md:px-8 bg-background">
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
              <InquiryForm
                formType="Consultation Request"
                pageSource="Contact Page"
                heading=""
                submitLabel="Submit Inquiry"
              />
            </motion.div>

            {/* Info */}
            <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-12 lg:pt-4">
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-4">
                    Location
                  </p>
                  <p className="font-display text-xl md:text-2xl font-light text-charcoal leading-relaxed">
                    Hamilton Township, New Jersey
                  </p>
                  <a
                    href="https://maps.google.com/?q=1544+Kuser+Rd+Suite+C3+Hamilton+Township+NJ+08619"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-charcoal-light font-light hover:text-navy transition-colors mt-2 inline-block"
                  >
                    1544 Kuser Rd, Suite C3, Hamilton Township, NJ 08619
                  </a>
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

                <div className="w-12 h-px bg-navy" />

                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-4">
                    Virtual Consultation
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-4">
                    For treatment discussions, cosmetic evaluations, and second opinions. A structured specialist evaluation is available remotely.
                  </p>
                  <Link
                    to="/virtual-consultation"
                    className="inline-block px-8 py-3 border border-navy text-navy font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
                  >
                    Request Virtual Consultation
                  </Link>
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
