import logoAP from "@/assets/logo-ap.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 md:px-8 bg-navy">
      <div className="luxury-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <img src={logoAP} alt="Dr. Akshay Parmar" className="h-14 mb-4 brightness-0 invert" />
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

          <div className="text-left md:text-right">
            <p className="font-body text-xs text-primary-foreground/30 tracking-wide">
              © {new Date().getFullYear()} Dr. Akshay Parmar
            </p>
            <p className="font-body text-xs text-primary-foreground/20 mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
