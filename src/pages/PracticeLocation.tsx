import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import { practiceLocations, type LocationSlug } from "@/data/practiceLocations";
import { usePageSEO } from "@/hooks/usePageSEO";
export default function PracticeLocation({ slug }: { slug: LocationSlug }) {
 const location = practiceLocations.find(item => item.slug === slug)!;
 usePageSEO({ title: `Dr. Akshay Parmar | Prosthodontist in ${location.city}, NJ`, description: `See Dr. Akshay Parmar, board-certified prosthodontist, at ${location.practice} in ${location.city}, NJ. ${location.days}, by appointment only. Call ${location.phone}.` });
 return <main className="bg-background"><SiteNavigation />
  <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24"><div className="luxury-container max-w-5xl">
   <Link to="/contact" className="font-body text-xs text-navy underline underline-offset-4">View both locations</Link>
   <p className="font-body text-xs uppercase tracking-[0.24em] text-charcoal-light mt-8 mb-5">Board-certified prosthodontist · {location.city}, NJ</p>
   <h1 className="font-display text-4xl md:text-6xl font-light text-navy leading-tight">Dr. Akshay Parmar<br /><span className="italic">in {location.city}.</span></h1>
   <div className="grid gap-10 md:grid-cols-2 mt-10">
    <div className="font-body text-sm leading-relaxed text-charcoal-light space-y-6">
     <p>{location.description}</p>
     <p>His clinical work includes dental implants, full-arch rehabilitation, veneers, full-mouth reconstruction and maxillofacial prosthetics. An evaluation establishes the appropriate treatment, setting and sequence for your individual needs.</p>
     <h2 className="font-display text-3xl text-navy">Planning your visit</h2>
     <p>Dr. Parmar sees patients here on {location.days}, by appointment only.</p>
     <p>When calling, ask specifically for an appointment with Dr. Akshay Parmar. The practice will confirm his next available appointment, the consultation fee and any records to bring.</p>
     <p>Appointments, treatment fees and billing are managed by this practice. Please confirm arrangements with the office before your visit.</p>
     <div className="flex flex-wrap gap-5 text-navy underline underline-offset-4"><Link to="/about">About Dr. Parmar</Link><Link to="/clinical-cases">Explore clinical work</Link><Link to="/patient-questions">Patient questions</Link></div>
    </div>
    <aside className="border border-divider bg-card p-7 sm:p-9 self-start order-first md:order-last">
     <h2 className="font-display text-3xl font-light text-navy">{location.practice}</h2>
     <p className="font-body text-sm text-charcoal-light leading-relaxed my-5">{location.address}<br />{location.locality}</p>
     <a href={location.telephone} className="block bg-navy text-primary-foreground text-center py-4 px-4 font-body text-sm hover:bg-navy/90">Call {location.phone}</a>
     <p className="font-body text-xs text-charcoal-light my-4">Ask to book with Dr. Akshay Parmar.</p>
     <div className="flex flex-wrap gap-5 font-body text-sm text-navy underline underline-offset-4"><a href={location.website} target="_blank" rel="noopener noreferrer">Contact the practice</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.locality}`)}`} target="_blank" rel="noopener noreferrer">Directions</a></div>
    </aside>
   </div>
  </div></section><PageFooter />
 </main>;
}
