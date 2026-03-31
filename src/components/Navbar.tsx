import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/final%20logo.png/:/rs=w:1209";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-400 ${isScrolled ? 'glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={LOGO_URL} alt="MTL Exclusive Logo" className="h-16 w-auto object-contain transition-all duration-300" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className={`text-sm tracking-[0.15em] uppercase font-semibold transition-colors duration-300 hover:text-brand-accent ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>Home</Link>
            <Link to="/cleaning-services" className={`text-sm tracking-[0.15em] uppercase font-semibold transition-colors duration-300 hover:text-brand-accent ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>Cleaning Services</Link>
            <Link to="/photography" className={`text-sm tracking-[0.15em] uppercase font-semibold transition-colors duration-300 hover:text-brand-accent ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>Photography</Link>
            <Link to="/#testimonials" className={`text-sm tracking-[0.15em] uppercase font-semibold transition-colors duration-300 hover:text-brand-accent ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>Reviews</Link>
            <Link to="/contact" className={isScrolled ? 'btn-primary' : 'btn-primary bg-white text-brand-primary hover:bg-white/90'}>Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors duration-300 cursor-pointer ${isScrolled ? 'text-brand-primary' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full shadow-lg border-t border-black/5">
          <div className="px-6 pt-4 pb-8 space-y-2">
            <Link to="/" className="block py-4 text-brand-primary hover:text-brand-accent tracking-[0.15em] uppercase text-sm border-b border-black/5">Home</Link>
            <Link to="/cleaning-services" className="block py-4 text-brand-primary hover:text-brand-accent tracking-[0.15em] uppercase text-sm border-b border-black/5">Cleaning Services</Link>
            <Link to="/photography" className="block py-4 text-brand-primary hover:text-brand-accent tracking-[0.15em] uppercase text-sm border-b border-black/5">Photography</Link>
            <Link to="/#testimonials" className="block py-4 text-brand-primary hover:text-brand-accent tracking-[0.15em] uppercase text-sm border-b border-black/5">Reviews</Link>
            <Link to="/contact" className="block py-4 text-brand-primary hover:text-brand-accent tracking-[0.15em] uppercase text-sm border-b border-black/5">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
