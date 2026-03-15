import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import FactsPillars from './sections/FactsPillars';
import Services from './sections/Services';
import Books from './sections/Books';
import VideoSection from './sections/VideoSection';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import BlogArticle from './pages/BlogArticle';
import './App.css';

function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FactsPillars />
        <Services />
        <Books />
        <VideoSection />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
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
      </Routes>
    </Router>
  );
}

export default App;
