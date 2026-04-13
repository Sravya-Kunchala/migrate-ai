import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/HomePage";
import FeaturesPage from "./app/features";
import PricingPage from "./app/pricing";
import SignUpPage from "./app/signup";
import SignInPage from "./app/signin";
import DocsPage from "./app/docs";
import BlogPage from "./app/blog";
import AboutPage from "./app/about";
import ContactPage from "./app/contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
                    <Route path="/docs" element={<DocsPage />} />
              <Route path="/blog" element={<BlogPage />} />
           <Route path="/about" element={<AboutPage />} />
               <Route path="/contact" element={<ContactPage />} />
                                  
      </Routes>
    </BrowserRouter>
  );
}

export default App;