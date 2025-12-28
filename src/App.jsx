import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Navbar from "./components/NavBar";
import Footer from "./sections/Footer";
import Hero from "./pages/home/Hero";
import Contact from "./pages/contact/Contact";
import FullStackShowCase from "./pages/project/FullStackShowCase";
import TechStack from "./pages/skills/TechStack";
import FeatureCards from "./pages/skills/FeatureCards";
import Experience from "./pages/experience/Experience";
import TechLogo from "./pages/skills/TechLogo";

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<FullStackShowCase />} />
          <Route 
            path="/skills" 
            element={
              <>
                <TechStack />
                <TechLogo />
                <FeatureCards />
              </>
            } 
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
