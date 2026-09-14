import { Link } from "react-router-dom";
import { hamiltonReviewLinks } from "@/data/reviewLinks";

const zocdoc = "https://www.zocdoc.com/dentist/akshay-parmar-dds-bds-facp-630125";
const brooklyn = "https://www.google.com/maps/place/Dr.+Richard+A.+Romano/data=!4m2!3m1!1s0x89c245434022a6bf:0x5bca3d4e2a4d24fe";

// Individual five-star reviews checked at their public sources. Never combine
// host-practice ratings or imply the former Brooklyn office is a current location.
const excerpts = [
  { name: "Krystyna Zakoscielny", quote: "Dr Parmar is a perfectionist in his work.", source: "Google", location: "Hamilton", context: "Care with Dr. Parmar", url: hamiltonReviewLinks.read },
  { name: "carol rooney", quote: "On my first visit with Dr Parmar, he immediately made me feel comfortable", source: "Google", location: "Hamilton", context: "Dental implant care", url: hamiltonReviewLinks.read },
  { name: "CA", quote: "Everything went and looks terrific.", source: "Zocdoc", location: "Jersey City", context: "Implant and crown treatment with Dr. Parmar", url: zocdoc },
  { name: "NM", quote: "He made me laugh and feel comfortable.", source: "Zocdoc", location: "Jersey City", context: "A reassuring visit with Dr. Parmar", url: zocdoc },
  { name: "Kara Ostwind", quote: "He has great bed side manner, listens, and displays patience and compassion.", source: "Google", location: "Former Brooklyn practice", context: "Dental work completed by Dr. Parmar", url: brooklyn },
  { name: "Big B", quote: "A beautiful masterful job.", source: "Google", location: "Former Brooklyn practice", context: "Full-mouth implants with removable teeth, treated by Dr. Parmar", url: brooklyn },
  { name: "Sally Guberman", quote: "for your caring and professionalism!", source: "Google", location: "Former Brooklyn practice", context: "Thanks to Dr. Parmar and hygienist Sherene", url: brooklyn },
];

const GoogleReviewSection = () => (
  <section id="google-reviews" className="section-padding bg-secondary/30" aria-labelledby="public-reviews-heading">
    <div className="luxury-container">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">From Google &amp; Zocdoc</p>
        <h2 id="public-reviews-heading" className="font-display text-3xl md:text-4xl font-light text-navy">Patient reviews of Dr. Akshay Parmar</h2>
        <p className="font-body text-sm text-charcoal-light leading-relaxed mt-4">Selected public review excerpts about implant treatment, restorative care and the experience of seeing Dr. Parmar.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {excerpts.map((review) => (
          <figure key={`${review.source}-${review.name}`} className="border border-divider bg-background p-7 md:p-10 flex flex-col">
            <p className="text-navy tracking-widest mb-5" aria-label="Individual review: 5 out of 5 stars">★★★★★</p>
            <p className="font-body text-xs text-charcoal-light mb-3">{review.context}</p>
            <blockquote className="font-display text-xl md:text-2xl text-navy leading-relaxed flex-1"><p>“{review.quote}”</p></blockquote>
            <figcaption className="font-body text-xs text-charcoal-light mt-6 leading-relaxed">
              <span className="block font-medium text-navy">{review.name}</span>
              <span className="block">{review.source} · {review.location}</span>
              <a href={review.url} target="_blank" rel="noopener noreferrer" className="inline-block py-3 text-navy underline underline-offset-4" aria-label={`Read ${review.name}'s full review on ${review.source}`}>Read full review on {review.source}</a>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-center mt-8">
        <p className="font-body text-xs text-charcoal-light leading-relaxed">These are selected individual reviews, not an overall practice rating. Brooklyn reviews describe care at Dr. Romano’s practice when Dr. Parmar worked there. Dr. Parmar now sees patients only in Hamilton and Jersey City, New Jersey.</p>
        <p className="font-body text-[11px] text-charcoal-light mt-4">Sources checked September 14, 2026. Excerpts are shortened; individual experiences and treatment results vary.</p>
        <Link to="/contact" className="inline-block mt-5 py-3 font-body text-xs uppercase tracking-widest text-navy underline underline-offset-4">See Dr. Parmar in Hamilton or Jersey City</Link>
      </div>
    </div>
  </section>
);

export default GoogleReviewSection;
