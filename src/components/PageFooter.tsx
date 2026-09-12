import { Link } from "react-router-dom";
import BrandLockup from "@/components/BrandLockup";

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
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex mb-6">
              <BrandLockup inverted size="footer" />
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
            <div className="font-body text-xs text-primary-foreground/75 space-y-3 leading-relaxed">
              <p>Hamilton · Dr. Randazzo’s practice<br /><a href="tel:+16095851616" className="underline">(609) 585-1616</a> · <Link to="/locations/hamilton" className="underline">Location details</Link></p>
              <p>Dental Associates of Jersey City<br /><a href="tel:+12014330773" className="underline">(201) 433-0773</a> · <Link to="/locations/jersey-city" className="underline">Location details</Link></p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-4">
              Explore
            </p>
            <Link to="/dental-implants-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Dental Implants</Link>
            <Link to="/full-arch-implants-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Full-Arch Rehabilitation</Link>
            <Link to="/full-mouth-reconstruction-new-jersey" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Aesthetic Dentistry</Link>
            <Link to="/maxillofacial-rehabilitation" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Maxillofacial Rehabilitation</Link>
            <Link to="/patients-traveling-to-hamilton" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Traveling to Hamilton</Link>
            <Link to="/education" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Education & Courses</Link>
            <Link to="/about" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">About</Link>
            <Link to="/meet-the-team" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Clinical Collaboration</Link>
            <Link to="/contact" className="block font-body text-xs text-primary-foreground/55 hover:text-primary-foreground/80 tracking-wide transition-colors">Locations &amp; Appointments</Link>
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
