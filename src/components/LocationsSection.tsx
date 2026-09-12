import LocationCards from "@/components/LocationCards";
export default function LocationsSection() {
 return <section className="px-6 py-16 md:px-8 md:py-24 bg-background" id="locations"><div className="luxury-container max-w-5xl">
  <div className="text-center max-w-2xl mx-auto mb-10">
   <p className="font-body text-xs uppercase tracking-[0.25em] text-charcoal-light mb-4">Hamilton &amp; Jersey City</p>
   <h2 className="font-display text-4xl md:text-5xl font-light text-navy">One specialist. <span className="italic">Two places to meet.</span></h2>
   <p className="font-body text-sm text-charcoal-light leading-relaxed mt-5">Dr. Parmar sees patients as an associate prosthodontist at two established New Jersey practices. Choose your preferred office and ask to schedule with Dr. Akshay Parmar.</p>
  </div><LocationCards />
  <p className="font-body text-xs text-charcoal-light text-center mt-6 leading-relaxed">Each practice manages its own appointments and billing. Please confirm Dr. Parmar’s availability and consultation fee with your chosen office.</p>
 </div></section>;
}
