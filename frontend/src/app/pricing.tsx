
import PricingFAQ from "../components/(princing)/faq";
import FeatureComparison from "../components/(princing)/featurecomparision";
import PricingSection from "../components/(princing)/herosection";
import MigrateCTASection from "../components/(princing)/cta2";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function PricingPage() {
  return (
    <>
      <Navbar />
     <PricingSection/>
     <FeatureComparison/>
     <PricingFAQ/>
           <MigrateCTASection />
     
      <Footer />
    </>
  );
}

export default PricingPage;