
import DocsContent from "../components/(docs)/docscontent";
import DocsHero from "../components/(docs)/herosection";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function DocsPage() {
  return (
    <>
      <Navbar />
      <DocsHero/>
      <DocsContent/>
      <Footer />
    </>
  );
}

export default DocsPage;