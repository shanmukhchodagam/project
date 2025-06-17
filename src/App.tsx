import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import About3D from './components/About3D';
import Skills3D from './components/Skills3D';
import Projects3D from './components/Projects3D';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import Loading from './components/Loading';
import BubbleTransition from './components/BubbleTransition';
import PersonalPortfolio from './pages/personal_port';

const ProfessionalPortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowTransition(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <>
        <Loading />
        {showTransition && <BubbleTransition onComplete={handleTransitionComplete} />}
      </>
    );
  }

  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Header />
      <main>
        <Hero3D />
        <About3D />
        <Skills3D />
        <Projects3D />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfessionalPortfolio />} />
        <Route path="/personal" element={<PersonalPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;