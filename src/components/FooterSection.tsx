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
    <footer id="contact" className="py-12 md:py-16 px-6 md:px-8 bg-navy">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start">
          {/* Logo & Contact */}
          <div>
            <Link to="/">
              <img src={logoAP} alt="Dr. Akshay Parmar" className="h-20 md:h-24 mb-5" style={{ filter: "invert(1)" }} />
            </Link>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/30 mb-3">
              Board-Certified Prosthodontist
            </p>
            <a
              href="mailto:akshaytheparmar@gmail.com"
              className="block font-body text-sm text-primary-foreground/50 font-light hover:text-primary-foreground/70 transition-colors"
            >
              akshaytheparmar@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/30 mb-4">
              Practice
            </p>
            <Link to="/dental-implants-new-jersey" className="block font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
              Dental Implants
            </Link>
            <Link to="/full-arch-implants-new-jersey" className="block font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
              Full-Arch Rehabilitation
            </Link>
            <Link to="/aesthetic-dentistry" className="block font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
              Aesthetic Dentistry
            </Link>
            <Link to="/maxillofacial-rehabilitation" className="block font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
              Maxillofacial Rehabilitation
            </Link>
            <Link to="/education" className="block font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
              Education & Courses
            </Link>
            <Link to="/about" className="block font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
              About
            </Link>
            <Link to="/contact" className="block font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
              Contact
            </Link>
          </div>

          {/* Professional Links */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/30 mb-4">
              Professional Platforms
            </p>
            <div className="space-y-4">
              {professionalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="font-body text-xs text-primary-foreground/50 group-hover:text-primary-foreground/70 tracking-wide transition-colors">
                    {link.name}
                  </p>
                  <p className="font-body text-[10px] text-primary-foreground/25 mt-0.5">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p className="font-body text-xs text-primary-foreground/25 tracking-wide">
              © {new Date().getFullYear()} Dr. Akshay Parmar
            </p>
            <p className="font-body text-xs text-primary-foreground/15">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
