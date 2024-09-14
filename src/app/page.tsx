import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mb-24">
     <Hero/>
     <About/>
     <Pricing/>
     <Faq/>
    </div>
  );
}
