import { Link } from "react-router-dom";
import { practiceLocations } from "@/data/practiceLocations";
export default function LocationCards() {
  return <div className="grid gap-5 md:grid-cols-2">
    {practiceLocations.map(location => <article key={location.slug} className="flex flex-col border border-divider bg-card p-6 sm:p-8 text-left">
      <p className="font-body text-[10px] uppercase tracking-[0.2em] text-charcoal-light mb-3">See Dr. Parmar in</p>
      <h2 className="font-display text-3xl sm:text-4xl font-light text-navy">{location.city}</h2>
      <p className="font-body text-sm text-charcoal mt-3">{location.practice}</p>
      <p className="font-body text-sm text-charcoal-light leading-relaxed mt-3 mb-6">{location.address}<br />{location.locality}</p>
      <p className="font-body text-sm text-navy mb-6">{location.days}<br /><span className="text-charcoal-light">By appointment only</span></p>
      <a href={location.telephone} className="mt-auto inline-flex justify-center bg-navy text-primary-foreground px-5 py-4 font-body text-sm hover:bg-navy/90">Call {location.city} · {location.phone}</a>
      <Link to={`/locations/${location.slug}`} className="mt-4 text-center font-body text-sm text-navy underline underline-offset-4">{location.city} location &amp; appointments</Link>
    </article>)}
  </div>;
}
