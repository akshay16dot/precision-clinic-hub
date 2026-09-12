import { hamiltonReviewLinks } from "@/data/reviewLinks";

// Short excerpts checked on the public Hamilton listing on September 12, 2026.
// These refer explicitly to Dr. Parmar; the listing also contains older practice reviews.
const excerpts = [
  "Dr Parmar is a perfectionist in his work.",
  "On my first visit with Dr Parmar, he immediately made me feel comfortable",
];

const GoogleReviewSection = () => (
  <section id="google-reviews" className="section-padding bg-secondary/30">
    <div className="luxury-container">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">From Google Reviews</p>
        <h2 className="font-display text-3xl md:text-4xl font-light text-navy">Experiences with Dr. Parmar</h2>
        <p className="font-body text-sm text-charcoal-light leading-relaxed mt-4">Selected excerpts about Dr. Parmar from the Hamilton listing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {excerpts.map((quote) => (
          <blockquote key={quote} className="border border-divider bg-background p-7 md:p-10">
            <p className="text-navy tracking-widest mb-5" aria-label="5 out of 5 stars">★★★★★</p>
            <p className="font-display text-xl md:text-2xl text-navy leading-relaxed">“{quote}”</p>
            <footer className="font-body text-xs text-charcoal-light mt-6">Google review excerpt · Hamilton</footer>
          </blockquote>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href={hamiltonReviewLinks.read} target="_blank" rel="noopener noreferrer" className="font-body text-xs uppercase tracking-widest text-navy underline underline-offset-4">Read the full reviews on Google</a>
        <p className="font-body text-[11px] text-charcoal-light mt-4">Selected excerpts checked September 12, 2026. Individual experiences vary.</p>
      </div>
    </div>
  </section>
);

export default GoogleReviewSection;
