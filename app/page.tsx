import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PageTransition from "@/components/PageTransition";
import FlowNetwork from "@/components/FlowNetwork";
import ProductFlow from "@/components/ProductFlow";
import CompanyTimeline from "@/components/CompanyTimeline";
import PartnersMarquee from "@/components/PartnersMarquee";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <PageTransition>
      <main className="relative min-h-screen overflow-hidden space-y-24 sm:space-y-32 lg:space-y-40">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
         <section id="partners">
          <PartnersMarquee />
        </section>

        {/* Services Section */}
        {/* Keep commented for now */}
      

        {/* Product Flow Section */}
        <section id="products">
          <ProductFlow />
        </section>

        {/* Company Timeline Section */}
        <section id="about">
          <CompanyTimeline />
        </section>

        {/* Network Section */}
        <section id="network">
          <FlowNetwork />
        </section>
          <Services />
<FAQ/>
        {/* Partners Section */}
       
      </main>
    </PageTransition>
  );
}