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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sage/10' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-sage/15' : 'bg-sage/10'
            } group-hover:bg-sage/25 group-hover:scale-110`}>
              <Stethoscope className="h-6 w-6 text-sage transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <h1 className="font-playfair font-semibold text-xl gradient-text">
                Dra. Amanda
              </h1>
              <p className="text-xs text-brown-light -mt-1 high-contrast">Nutrologia Especializada</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-button transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? 'text-sage'
                    : 'text-brown-light hover:text-sage'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-sage transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/consulta"
            className="hidden md:block btn-elegant gradient-sage text-white px-6 py-3 rounded-full text-sm font-medium tracking-button uppercase hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Marcar Consulta</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-sage hover:bg-sage/10 transition-all duration-300 transform hover:scale-110"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-sage/20">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium tracking-button transition-all duration-300 transform hover:translate-x-2 ${
                    location.pathname === item.path
                      ? 'text-sage'
                      : 'text-brown-light hover:text-sage'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/consulta"
                onClick={() => setIsOpen(false)}
                className="btn-elegant gradient-sage text-white px-6 py-3 rounded-full text-sm font-medium tracking-button uppercase text-center mt-4 transform hover:scale-105 transition-all duration-300"
              >
                Marcar Consulta
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;