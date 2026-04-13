
import AIFeatures from "../components/aifeatures";
import MigrateCTASection from "../components/cta";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/testinomials";
import ThreeSteps from "../components/threesteps";
import TrustedSection from "../components/trustsection";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AIFeatures/>
      <ThreeSteps/>
      <Testimonials/>
      <TrustedSection/>
      <MigrateCTASection/>
      <Footer/>
      {/* other sections */}
    </>
  );
}

export default HomePage;