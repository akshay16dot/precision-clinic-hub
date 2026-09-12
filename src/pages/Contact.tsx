import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import LocationCards from "@/components/LocationCards";
import { usePageSEO } from "@/hooks/usePageSEO";
export default function Contact() {
 usePageSEO({ title: "Book with Dr. Akshay Parmar | Hamilton & Jersey City", description: "Choose Hamilton or Jersey City to request an appointment with Dr. Akshay Parmar. Contact the practice directly for availability, consultation fees and directions." });
 return <main className="bg-background"><SiteNavigation />
  <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-24"><div className="luxury-container max-w-5xl">
   <div className="text-center max-w-2xl mx-auto mb-8">
    <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-4">Hamilton &amp; Jersey City, New Jersey</p>
    <h1 className="font-display text-4xl md:text-5xl font-light text-navy">Meet <span className="italic">Dr. Parmar.</span></h1>
    <p className="font-body text-sm text-charcoal-light leading-relaxed mt-5">Choose the office that works for you. When contacting the practice, ask specifically for an appointment with Dr. Akshay Parmar.</p>
   </div><LocationCards />
   <div className="mt-10 max-w-3xl mx-auto text-center font-body text-sm text-charcoal-light leading-relaxed">
    <p>Dr. Parmar is an associate prosthodontist at both practices. Each office manages its own scheduling and billing, and will confirm his availability, the consultation fee and what to bring.</p>
    <p className="mt-5">For professional and educational inquiries: <a href="mailto:drparmardds@gmail.com" className="text-navy underline underline-offset-4">drparmardds@gmail.com</a>.</p>
   </div>
  </div></section><PageFooter />
 </main>;
}
