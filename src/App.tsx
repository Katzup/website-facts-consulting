import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import FactsPillars from './sections/FactsPillars';
import Services from './sections/Services';
import Clients from './sections/Clients';
import Books from './sections/Books';
import VideoSection from './sections/VideoSection';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Research from './sections/Research';
import BlogArticle from './pages/BlogArticle';
import ResearchStudy from './pages/ResearchStudy';
import SentientEdge from './pages/SentientEdge';
import CxoAdvisor from './pages/CxoAdvisor';
import Team from './pages/Team';
import './App.css';

function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FactsPillars />
        <Services />
        <Clients />
        <Books />
        <VideoSection />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <Research />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/research/:slug" element={<ResearchStudy />} />
        <Route path="/sentientedge" element={<SentientEdge />} />
        <Route path="/cxo-advisor" element={<CxoAdvisor />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
