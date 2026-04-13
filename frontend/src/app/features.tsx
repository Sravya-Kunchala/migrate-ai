import MigrateCTASection from "../components/cta";
import DevFeatures from "../components/devfeature";
import CoreBackupFeatures from "../components/feature3";
import CloudDestinations from "../components/feature4";
import AIFeatures from "../components/features2";
import MigrateAIHero from "../components/feturehero";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function FeaturesPage() {
  return (
    <>
      <Navbar />
      <MigrateAIHero/>
      <AIFeatures/>
      <CoreBackupFeatures/>
      <CloudDestinations/>
      <DevFeatures/>
      <MigrateCTASection />
      <Footer />
    </>
  );
}

export default FeaturesPage;