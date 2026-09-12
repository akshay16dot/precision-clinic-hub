import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import LocationCards from "@/components/LocationCards";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function RegionalTravel() {
  usePageSEO({
    title: "Specialist Care for NJ, NYC & Philadelphia Patients | Dr. Parmar",
    description: "Considering travel for prosthodontic, implant or maxillofacial care? Plan a visit with Dr. Akshay Parmar in Hamilton or Jersey City from NJ, NYC or Philadelphia.",
  });
  return (
    <main className="bg-background">
      <SiteNavigation />
      <section className="px-6 pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="luxury-container max-w-5xl">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-charcoal-light mb-5">New Jersey · New York City · Philadelphia</p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-navy leading-tight">Specialist care.<br /><span className="italic">Worth planning around.</span></h1>
          <p className="font-body text-sm text-charcoal-light leading-relaxed max-w-3xl mt-7 mb-10">If you are considering travel for complex dental or maxillofacial care, the first step is a clear conversation about your needs. Dr. Akshay Parmar sees patients as an associate prosthodontist at established practices in Hamilton and Jersey City, New Jersey.</p>
          <LocationCards />
          <div className="grid gap-8 md:grid-cols-3 mt-12 font-body text-sm text-charcoal-light leading-relaxed">
            <section><h2 className="font-display text-3xl text-navy mb-4">Across New Jersey</h2><p>Choose the office based on your starting point, Dr. Parmar’s availability and the appointments your care may require. Confirm the treating location before arranging travel; both offices maintain their own schedules and billing.</p></section>
            <section><h2 className="font-display text-3xl text-navy mb-4">From New York City</h2><p>Consider the Jersey City office when planning from NYC. Check the route from your particular borough and the final journey to the office. Confirm arrival arrangements and whether you will need an escort with the treating team before booking transportation.</p></section>
            <section><h2 className="font-display text-3xl text-navy mb-4">From Philadelphia</h2><p>Consider the Hamilton office when planning from Philadelphia or surrounding Pennsylvania communities. Allow for traffic and the last part of the journey to Kuser Road. Ask the practice about the expected appointment length and follow-up visits before committing to a travel schedule.</p></section>
          </div>
          <section className="max-w-3xl mt-14 font-body text-sm text-charcoal-light leading-relaxed space-y-5">
            <h2 className="font-display text-3xl md:text-4xl text-navy">Before you make the trip</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>Call the chosen practice and request an appointment with Dr. Akshay Parmar. Explain the reason for the visit and ask which records would be useful.</li>
              <li>Ask how to transfer records securely and whether a preliminary discussion is appropriate. An examination and necessary imaging are required for a definitive treatment plan.</li>
              <li>Confirm the consultation fee, treatment setting and anticipated visit sequence. Travel does not mean treatment can be completed in one visit; healing, laboratory stages and follow-up need to be planned.</li>
              <li>Discuss maintenance, support after procedures and coordination with your local dentist or surgical team. Confirm who to contact if a concern arises after returning home.</li>
            </ol>
            <p>Dr. Parmar’s clinical work includes full-mouth reconstruction, implant rehabilitation, complex restorative second opinions and maxillofacial prosthetics. Whether travel is appropriate depends on your needs, the proposed care and the ability to attend follow-up appointments.</p>
            <div className="flex flex-wrap gap-5 text-navy underline underline-offset-4"><Link to="/full-mouth-reconstruction-new-jersey">Full-mouth reconstruction</Link><Link to="/failed-dental-implant-revision">Implant second opinions</Link><Link to="/maxillofacial-rehabilitation">Maxillofacial care</Link></div>
            <p>Consultations take place at the listed New Jersey practices. Dr. Parmar does not have an office in New York City or Philadelphia.</p>
          </section>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
