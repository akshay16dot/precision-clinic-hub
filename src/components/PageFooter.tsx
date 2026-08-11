import { Link } from "react-router-dom";
import logoAP from "@/assets/logo-ap.png";

const professionalLinks = [
  {
    name: "Dr. Akshay Parmar",
    description: "Clinical Work & Insights",
    url: "https://www.instagram.com/dr.akshayparmar/",
  },
  {
    name: "Parmar Smiles (Instagram)",
    description: "Patient Stories & Smile Transformations",
    url: "https://www.instagram.com/parmarsmiles/",
  },
  {
    name: "Parmar Smiles (YouTube)",
    description: "Patient Education",
    url: "https://www.youtube.com/@ParmarSmiles",
  },
  {
    name: "Decoded Weekly",
    description: "Professional Newsletter",
    url: "https://substack.com/@decodedweekly",
  },
];

const PageFooter = () => {
  return (
    <footer className="py-12 md:py-16 px-6 md:px-8 bg-navy">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start">
          {/* Logo & Contact */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src={logoAP}
                alt="Dr. Akshay Parmar"
                className="h-24 md:h-28 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-3">
              Board-Certified Prosthodontist
            </p>
            <a
              href="mailto:drparmardds@gmail.com"
              className="block font-body text-sm text-primary-foreground/60 font-light hover:text-primary-foreground/80 transition-colors mb-3"
            >
              drparmardds@gmail.com
            </a>
            <a
              href="https://maps.google.com/?q=1544+Kuser+Road+Suite+C3+Hamilton+NJ+08619"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-xs text-primary-foreground/45 font-light hover:text-primary-foreground/70 transition-colors leading-relaxed"
            >
              1544 Kuser Road, Suite C3, Hamilton, NJ 08619
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-4">
              Practice
            </p>
            <Link to="/dental-implants-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Dental Implants</Link>
            <Link to="/full-arch-implants-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Full-Arch Rehabilitation</Link>
            <Link to="/full-mouth-reconstruction-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Aesthetic Dentistry</Link>
            <Link to="/maxillofacial-rehabilitation" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Maxillofacial Rehabilitation</Link>
            <Link to="/patients-traveling-to-hamilton" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Traveling to Hamilton</Link>
            <Link to="/education" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Education & Courses</Link>
            <Link to="/about" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">About</Link>
            <Link to="/contact" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Contact</Link>
          </div>

          {/* Professional Links */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-4">
              Professional Platforms
            </p>
            <div className="space-y-4">
              {professionalLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <p className="font-body text-xs text-primary-foreground/60 group-hover:text-primary-foreground/80 tracking-wide transition-colors">{link.name}</p>
                  <p className="font-body text-[10px] text-primary-foreground/40 mt-0.5">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p className="font-body text-xs text-primary-foreground/40 tracking-wide">© {new Date().getFullYear()} Dr. Akshay Parmar</p>
            <p className="font-body text-xs text-primary-foreground/30">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
