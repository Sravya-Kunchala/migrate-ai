

import BlogContent from "../components/(blog)/blogcontent";
import BlogHero from "../components/(blog)/bloherosection";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogHero/>
      <BlogContent/>
      <Footer />
    </>
  );
}

export default BlogPage;