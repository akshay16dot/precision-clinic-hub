import { Link } from "react-router-dom";
import logoAP from "@/assets/logo-ap.png";

const professionalLinks = [
  {
    name: "Dr. Akshay Parmar",
    description: "Clinical Work & Insights",
    url: "https://www.instagram.com/dr.akshayparmar/",
  },
  {
    name: "The Dental Project",
    description: "Clinical Education & Surgical Training",
    url: "https://www.instagram.com/thedental_project/",
  },
  {
    name: "Decoded Weekly",
    description: "Professional Newsletter & Thought Leadership",
    url: "https://substack.com/@decodedweekly",
  },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-navy">
      {/* Mobile-first action bar */}
      <div className="px-5 sm:px-8 md:px-12 pt-14 md:pt-20 pb-10 md:pb-14 border-b border-primary-foreground/10">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center md:text-left md:flex md:items-end md:justify-between gap-10">
            <div className="mb-8 md:mb-0">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary-foreground/50 mb-3">
                Get in Touch
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-primary-foreground leading-tight">
                Speak with the <span className="italic">specialist team</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 shrink-0">
              <a
                href="tel:+16092230600"
                className="cta-tactile px-6 py-3.5 bg-primary-foreground text-navy font-body text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 hover:bg-primary-foreground/90 text-center"
              >
                Call (609) 223-0600
              </a>
              <Link
                to="/contact"
                className="cta-tactile px-6 py-3.5 border border-primary-foreground/40 text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-navy text-center"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="py-14 md:py-20 px-5 sm:px-8 md:px-12">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start">
            {/* Practice & Contact */}
            <div>
              <Link to="/" className="inline-block">
                <img src={logoAP} alt="Dr. Akshay Parmar" className="h-32 md:h-44 mb-5" style={{ filter: "invert(1)" }} />
              </Link>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-4">
                Board-Certified Prosthodontist
              </p>
              <div className="space-y-2.5">
                <a
                  href="tel:+16092230600"
                  className="block font-body text-sm text-primary-foreground/75 font-light hover:text-primary-foreground transition-colors"
                >
                  (609) 223-0600
                </a>
                <a
                  href="mailto:drparmardds@gmail.com"
                  className="block font-body text-sm text-primary-foreground/60 font-light hover:text-primary-foreground/85 transition-colors break-all"
                >
                  drparmardds@gmail.com
                </a>
                <a
                  href="https://maps.google.com/?q=1544+Kuser+Rd+Hamilton+Township+NJ+08619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-xs text-primary-foreground/50 font-light hover:text-primary-foreground/75 transition-colors leading-relaxed"
                >
                  1544 Kuser Rd
                  <br />
                  Hamilton Township, NJ 08619
                </a>
              </div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary-foreground/40 mt-5">
                Mon–Fri &nbsp;·&nbsp; By Appointment
              </p>
            </div>

            {/* Practice navigation */}
            <div className="space-y-2.5">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-4">
                Practice
              </p>
              <Link to="/dental-implants-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                Dental Implants
              </Link>
              <Link to="/full-arch-implants-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                Full-Arch Rehabilitation
              </Link>
              <Link to="/aesthetic-dentistry" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                Aesthetic Dentistry
              </Link>
              <Link to="/maxillofacial-rehabilitation" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                Maxillofacial Rehabilitation
              </Link>
              <Link to="/clinical-cases" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                Clinical Cases
              </Link>
              <Link to="/about" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                About Dr. Parmar
              </Link>
            </div>

            {/* Patient pathways + professional */}
            <div className="space-y-8">
              <div className="space-y-2.5">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-4">
                  Patient Pathways
                </p>
                <Link to="/contact" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                  Schedule Consultation
                </Link>
                <Link to="/clinical-assessment" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                  Online Assessment
                </Link>
                <Link to="/virtual-consultation" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                  Virtual Consultation
                </Link>
                <Link to="/testimonials" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/85 tracking-wide transition-colors">
                  Patient Testimonials
                </Link>
              </div>

              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-4">
                  Professional Platforms
                </p>
                <div className="space-y-3">
                  {professionalLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <p className="font-body text-xs text-primary-foreground/60 group-hover:text-primary-foreground/85 tracking-wide transition-colors">
                        {link.name}
                      </p>
                      <p className="font-body text-[10px] text-primary-foreground/40 mt-0.5">
                        {link.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-primary-foreground/15">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <p className="font-body text-xs text-primary-foreground/40 tracking-wide">
                © {new Date().getFullYear()} Dr. Akshay Parmar
              </p>
              <p className="font-body text-xs text-primary-foreground/30">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
