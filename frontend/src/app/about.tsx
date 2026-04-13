


import WeAreHiring from "../components/(about)/cta";
import EvolutionTimeline from "../components/(about)/evolution";
import GenesisSection from "../components/(about)/herosection";
import MeetThePioneers from "../components/(about)/meet";
import OperationalScale from "../components/(about)/operation";
import OurStory from "../components/(about)/story";
import ValuesThatDriveUs from "../components/(about)/values";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <>
      <Navbar />
     <GenesisSection/>
     <EvolutionTimeline/>
     <OurStory/>
     <OperationalScale/>
     <ValuesThatDriveUs/>
     <MeetThePioneers/>
     <WeAreHiring/>
      <Footer />
    </>
  );
}

export default AboutPage;