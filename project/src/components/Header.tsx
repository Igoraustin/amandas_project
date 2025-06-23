import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'INÍCIO' },
    { path: '/formacao', label: 'FORMAÇÃO' },
    { path: '/blog', label: 'BLOG' },
    { path: '/consulta', label: 'CONSULTA' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-full bg-sage/10 group-hover:bg-sage/20 transition-colors">
              <Stethoscope className="h-6 w-6 text-sage" />
            </div>
            <div>
              <h1 className="font-playfair font-semibold text-xl text-sage">
                Dra. Amanda
              </h1>
              <p className="text-xs text-brown-light -mt-1">Medicina Especializada</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-button transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-sage border-b-2 border-sage pb-1'
                    : 'text-brown-light hover:text-sage'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/consulta"
            className="hidden md:block bg-sage text-white px-6 py-3 rounded-full text-sm font-medium tracking-button uppercase hover:bg-sage-dark transition-colors duration-200"
          >
            Marcar Consulta
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-sage hover:bg-sage/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sage/20">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium tracking-button transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-sage'
                      : 'text-brown-light hover:text-sage'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/consulta"
                onClick={() => setIsOpen(false)}
                className="bg-sage text-white px-6 py-3 rounded-full text-sm font-medium tracking-button uppercase text-center mt-4"
              >
                Marcar Consulta
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;