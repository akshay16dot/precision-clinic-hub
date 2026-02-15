import { Link } from "react-router-dom";
import logoAP from "@/assets/logo-ap.png";

const PageFooter = () => {
  return (
    <footer className="py-20 px-6 md:px-8 bg-navy">
      <div className="luxury-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <Link to="/">
              <img src={logoAP} alt="Dr. Akshay Parmar" className="h-14 mb-4 brightness-0 invert" />
            </Link>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-8">
              Board-Certified Prosthodontist
            </p>
            <div className="space-y-2">
              <p className="font-body text-sm text-primary-foreground/50 font-light">
                info@drparmar.com
              </p>
              <p className="font-body text-sm text-primary-foreground/50 font-light">
                +1 (555) 000-0000
              </p>
            </div>
          </div>

          <div className="text-left md:text-right space-y-4">
            <div className="flex flex-col gap-2">
              <Link to="/dental-implants-new-jersey" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
                Dental Implants
              </Link>
              <Link to="/full-arch-implants-new-jersey" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
                Full-Arch Rehabilitation
              </Link>
              <Link to="/aesthetic-dentistry" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
                Aesthetic Dentistry
              </Link>
              <Link to="/maxillofacial-rehabilitation" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
                Maxillofacial Rehabilitation
              </Link>
              <Link to="/about" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
                About
              </Link>
              <Link to="/contact" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 tracking-wide transition-colors">
                Contact
              </Link>
            </div>
            <div className="pt-4">
              <p className="font-body text-xs text-primary-foreground/30 tracking-wide">
                © {new Date().getFullYear()} Dr. Akshay Parmar
              </p>
              <p className="font-body text-xs text-primary-foreground/20 mt-1">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
