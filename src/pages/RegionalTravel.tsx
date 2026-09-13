import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import LocationCards from "@/components/LocationCards";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function RegionalTravel() {
  usePageSEO({
    title: "Prosthodontic Care for NJ, NYC, PA & MD Patients | Dr. Parmar",
    description: "Considering travel for prosthodontic, implant or maxillofacial care? Plan visits with Dr. Akshay Parmar in Hamilton or Jersey City from NJ, NYC, Philadelphia or Maryland.",
  });
  return (
    <main className="bg-background">
      <SiteNavigation />
      <section className="px-6 pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="luxury-container max-w-5xl">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-charcoal-light mb-5">New Jersey · New York City · Pennsylvania · Maryland</p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-navy leading-tight">Prosthodontic care in New Jersey.<br /><span className="italic">Plan your visit from across the region.</span></h1>
          <p className="font-body text-sm text-charcoal-light leading-relaxed max-w-3xl mt-7 mb-10">If you are considering travel for complex dental or maxillofacial care, the first step is a clear conversation about your needs. Dr. Akshay Parmar sees patients as an associate prosthodontist at established practices in Hamilton and Jersey City, New Jersey.</p>
          <LocationCards />
          <div className="grid gap-8 md:grid-cols-2 mt-12 font-body text-sm text-charcoal-light leading-relaxed">
            <section><h2 className="font-display text-3xl text-navy mb-4">Across New Jersey</h2><p>For patients planning from Hudson, Bergen or Essex County, compare the Jersey City location with your route. For Mercer County and central or southern New Jersey, compare Hamilton. Choose based on your starting point, Dr. Parmar’s availability and the appointments your care may require. Confirm the treating location before arranging travel; both offices maintain their own schedules and billing.</p></section>
            <section><h2 className="font-display text-3xl text-navy mb-4">From New York City</h2><p>From Manhattan, including the Upper East Side, or from Brooklyn, Queens, the Bronx or Staten Island, compare your journey to the Jersey City office. Visits with Dr. Parmar are on Tuesdays and Wednesdays, by appointment only. Check the route from your particular borough and the final journey to the office. Confirm arrival arrangements and whether you will need an escort with the treating team before booking transportation.</p></section>
            <section><h2 className="font-display text-3xl text-navy mb-4">From Philadelphia</h2><p>From Philadelphia, Bucks County or Montgomery County, compare your journey to the Hamilton office. Visits with Dr. Parmar are on Mondays and Fridays, by appointment only. Allow for traffic and the last part of the journey to Kuser Road. Ask the practice about the expected appointment length and follow-up visits before committing to a travel schedule.</p></section>
            <section><h2 className="font-display text-3xl text-navy mb-4">From Maryland</h2><p>If you are planning from Baltimore, Annapolis, Rockville or another Maryland community, discuss the expected number of visits before choosing a New Jersey office. Ask how treatment stages, overnight stays if needed, maintenance and care after returning home would be coordinated. The office can help confirm whether an initial consultation makes sense before you arrange travel.</p></section>
          </div>
          <section className="mt-14" aria-label="Explore treatment options">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-7">Explore the care you are looking for</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Dental implants", "Single or multiple missing teeth and planning the final restoration.", "/dental-implants-new-jersey"],
                ["All-on-4 and full-arch implants", "Compare full-arch options, treatment stages and maintenance.", "/full-arch-implants-new-jersey"],
                ["Immediate implant rehabilitation", "Learn what immediate treatment means and why suitability matters.", "/immediate-implant-rehabilitation"],
                ["Veneers and aesthetic reconstruction", "Explore options for tooth appearance within a complete restorative plan.", "/veneers-aesthetic-reconstruction"],
                ["Full-mouth reconstruction", "Planning for worn, broken, missing or failing teeth.", "/full-mouth-reconstruction-new-jersey"],
                ["Maxillofacial prosthetics", "Explore facial and oral prosthetic rehabilitation and coordination with your care team.", "/maxillofacial-rehabilitation"],
              ].map(([title, text, to]) => (
                <Link key={to} to={to} className="border border-divider p-6 hover:bg-warm-gray transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy">
                  <h3 className="font-display text-2xl text-navy mb-3">{title}</h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">{text}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 mt-6 font-body text-sm text-navy underline underline-offset-4">
              <Link to="/all-on-4-cost-new-jersey">What affects full-arch treatment cost?</Link>
              <Link to="/clinical-cases">Explore clinical work</Link>
              <Link to="/about">Meet Dr. Parmar and check his credentials</Link>
            </div>
          </section>
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
            <p>Consultations take place at the listed New Jersey practices. The only treatment locations listed here are Hamilton and Jersey City, New Jersey.</p>
          </section>
          <section className="mt-14 bg-warm-gray p-7 md:p-10">
            <h2 className="font-display text-3xl text-navy mb-4">Ask about seeing Dr. Parmar</h2>
            <p className="font-body text-sm text-charcoal-light leading-relaxed max-w-3xl mb-6">Call either office above and ask to book specifically with Dr. Akshay Parmar. If you are unsure which location to choose, email Dr. Parmar with your preferred office and a general reason for the consultation. The treating office confirms availability and fees.</p>
            <a href="mailto:drparmardds@gmail.com?subject=Appointment%20with%20Dr.%20Parmar" className="inline-block bg-navy text-white px-6 py-4 font-body text-sm">Email Dr. Parmar</a>
          </section>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
