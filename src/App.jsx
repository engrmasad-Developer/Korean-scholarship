// App.jsx - Main Application
// Assembles all sections in Figma order

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Eligibility from './components/Eligibility';
import Benefits from './components/Benefits';
import Accommodation from './components/Accommodation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero - dark background with photo card and stats */}
        <Hero />

        {/* 2. About - white section with BKES branding */}
        <About />

        {/* 3. Core Objectives - white, step circles */}
        <Objectives />

        {/* 4. Eligibility Criteria - light purple, tabs */}
        <Eligibility />

        {/* 5. Student Benefits - white, slider */}
        <Benefits />

        {/* 6. Accommodation - dark navy, feature tabs */}
        <Accommodation />

        {/* 7. Contact - white, form */}
        <Contact />
      </main>

      {/* 8. Footer - purple gradient CTA */}
      <Footer />
    </>
  );
}

export default App;
