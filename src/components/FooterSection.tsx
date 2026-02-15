import { Link } from "react-router-dom";
import logoAP from "@/assets/logo-ap.png";

const professionalLinks = [
  {
    name: "The Dental Project",
    description: "Clinical Education & Surgical Training",
    url: "https://www.instagram.com/thedental_project/",
  },
  {
    name: "Dr. Akshay Parmar",
    description: "Clinical Work & Insights",
    url: "https://www.instagram.com/dr.akshayparmar/",
  },
  {
    name: "Decoded Weekly",
    description: "Professional Newsletter",
    url: "https://substack.com/@decodedweekly",
  },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 md:px-8 bg-navy">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-start">
          {/* Logo & Contact */}
          <div>
            <Link to="/">
              <img src={logoAP} alt="Dr. Akshay Parmar" className="h-40 md:h-48 mb-6 brightness-0 invert" />
            </Link>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-8">
              Board-Certified Prosthodontist
            </p>
            <div className="space-y-2">
              <a
                href="mailto:akshaytheparmar@gmail.com"
                className="block font-body text-sm text-primary-foreground/50 font-light hover:text-primary-foreground/70 transition-colors"
              >
                akshaytheparmar@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
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
              Professional & Educational Platforms
            </p>
            <div className="space-y-5">
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
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
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
