import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Formation from './pages/Formation';
import Blog from './pages/Blog';
import Consultation from './pages/Consultation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream font-inter">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formacao" element={<Formation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/consulta" element={<Consultation />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton
          phoneNumber="5511999999999"
          message="Olá Dra. Amanda, gostaria de agendar uma consulta."
          position="bottom-right"
          pulseAnimation={true}
          showOnMobile={true}
          showAfterScroll={true}
          scrollThreshold={300}
        />
      </div>
    </Router>
  );
}

export default App;