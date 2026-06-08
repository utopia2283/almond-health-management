import Navigation from "@/components/site/navigation";
import Hero from "@/components/site/hero";
import Services from "@/components/site/services";
import Approach from "@/components/site/approach";
import Values from "@/components/site/values";
import Clinics from "@/components/site/clinics";
import Stories from "@/components/site/stories";
import Faq from "@/components/site/faq";
import Cta from "@/components/site/cta";
import Footer from "@/components/site/footer";
export default function Page() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Services />
      <Approach />
      <Values />
      <Clinics />
      <Stories />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
