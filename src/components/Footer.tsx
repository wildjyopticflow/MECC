import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/final%20logo.png/:/rs=w:1209";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-primary text-white pt-24 pb-12 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <img src={LOGO_URL} alt="MTL Exclusive" className="h-16 w-auto mb-8" />
            <p className="text-base text-white/60 mb-8 font-light leading-relaxed">
              Montreal's premier mobile auto detailing service. Delivering meticulous care and luxury for car enthusiasts.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-base text-white/60 hover:text-brand-accent transition-colors duration-300 font-light cursor-pointer">Our Services</Link></li>
              <li><Link to="/#about" className="text-base text-white/60 hover:text-brand-accent transition-colors duration-300 font-light cursor-pointer">About Us</Link></li>
              <li><Link to="/#testimonials" className="text-base text-white/60 hover:text-brand-accent transition-colors duration-300 font-light cursor-pointer">Reviews</Link></li>
              <li><Link to="/photography" className="text-base text-white/60 hover:text-brand-accent transition-colors duration-300 font-light cursor-pointer">Photography</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-8 text-white tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li className="text-base text-white/60 font-light cursor-pointer">Exterior Detailing</li>
              <li className="text-base text-white/60 font-light cursor-pointer">Interior Deep Clean</li>
              <li className="text-base text-white/60 font-light cursor-pointer">Ceramic Coating</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-8 text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Phone className="text-brand-accent mr-4 flex-shrink-0" size={20} />
                <span className="text-base text-white/60 font-light">(514) 555-0198</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-brand-accent mr-4 flex-shrink-0" size={20} />
                <span className="text-base text-white/60 font-light">info@mtlexclusive.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-brand-accent mr-4 flex-shrink-0" size={20} />
                <span className="text-base text-white/60 font-light">Mobile Service<br/>Greater Montreal Area</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0 font-light">
            &copy; {new Date().getFullYear()} MECC Detailing. Powered by Custom Code. All Rights Reserved.
          </p>
          <div className="flex space-x-6 items-center">
            <a href="https://www.instagram.com/mecc_detailing" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors duration-300 cursor-pointer"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-brand-accent transition-colors duration-300 text-sm font-light cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-brand-accent transition-colors duration-300 text-sm font-light cursor-pointer">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
