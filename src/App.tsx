import { motion } from 'motion/react';
import { 
  Star, 
  Shield, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight,
  Droplets,
  Sparkles,
  Car
} from 'lucide-react';
import { useState, useEffect } from 'react';

const LOGO_URL = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/final%20logo.png";
const HERO_BG = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/DSC02367.JPG";
const ABOUT_IMG = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/ols/DSC05326.jpg";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen font-body text-brand-text bg-brand-bg">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#161616]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={LOGO_URL} alt="MTL Exclusive Logo" className="h-12 w-auto object-contain" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#services" className="text-white hover:text-brand-primary transition-colors font-semibold tracking-widest uppercase text-sm">Services</a>
              <a href="#about" className="text-white hover:text-brand-primary transition-colors font-semibold tracking-widest uppercase text-sm">About</a>
              <a href="#testimonials" className="text-white hover:text-brand-primary transition-colors font-semibold tracking-widest uppercase text-sm">Reviews</a>
              <a href="#contact" className="bg-brand-primary text-[#161616] px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#161616] transition-all">
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-brand-primary"
              >
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161616] absolute top-full left-0 w-full shadow-xl border-t border-gray-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-white hover:text-brand-primary font-semibold tracking-widest uppercase text-sm border-b border-gray-800">Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-white hover:text-brand-primary font-semibold tracking-widest uppercase text-sm border-b border-gray-800">About</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-white hover:text-brand-primary font-semibold tracking-widest uppercase text-sm border-b border-gray-800">Reviews</a>
              <div className="pt-6 pb-2">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-brand-primary text-[#161616] px-6 py-4 font-bold uppercase tracking-widest text-sm">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Luxury Car Detailing" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/95 via-[#161616]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-5 py-2 mb-8 border border-white/10">
              <MapPin size={18} className="text-brand-primary" />
              <span className="text-white text-sm font-semibold tracking-widest uppercase">Mobile Detailing in Montreal</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.1] mb-8">
              Premium Detailing <br />
              <span className="text-brand-primary italic font-light">on the Go.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
              Meticulous care and luxury for car enthusiasts. Our skilled technicians bring premium products and tailored solutions directly to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="bg-brand-primary text-[#161616] px-10 py-5 font-bold uppercase tracking-widest text-sm text-center hover:bg-white transition-colors flex items-center justify-center group">
                Book Your Detail
                <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
              </a>
              <a href="#services" className="bg-transparent border border-white text-white px-10 py-5 font-bold uppercase tracking-widest text-sm text-center hover:bg-white/10 transition-colors">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#161616] py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="flex flex-col items-center">
              <span className="font-heading text-5xl md:text-6xl font-bold text-brand-primary mb-3">5,000+</span>
              <span className="text-gray-400 font-semibold uppercase tracking-widest text-xs">Jobs Completed</span>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col items-center">
              <span className="font-heading text-5xl md:text-6xl font-bold text-white mb-3">35</span>
              <span className="text-gray-400 font-semibold uppercase tracking-widest text-xs">Years Experience</span>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex flex-col items-center">
              <span className="font-heading text-5xl md:text-6xl font-bold text-brand-primary mb-3">100%</span>
              <span className="text-gray-400 font-semibold uppercase tracking-widest text-xs">Satisfaction</span>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="flex flex-col items-center">
              <span className="font-heading text-5xl md:text-6xl font-bold text-white mb-3 flex items-center justify-center">
                5<Star className="inline text-brand-accent ml-2" fill="currentColor" size={36}/>
              </span>
              <span className="text-gray-400 font-semibold uppercase tracking-widest text-xs">Average Rating</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="absolute -inset-4 bg-brand-primary/20 transform -rotate-2"></div>
              <img 
                src={ABOUT_IMG} 
                alt="Detailing Professional at Work" 
                className="relative shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#161616] p-8 shadow-2xl border border-gray-800 hidden md:block">
                <div className="flex items-center space-x-5">
                  <div className="bg-brand-primary p-4">
                    <Shield className="text-[#161616]" size={32} />
                  </div>
                  <div>
                    <p className="font-heading text-white font-bold text-xl tracking-wide">Guaranteed</p>
                    <p className="text-brand-primary text-sm tracking-widest uppercase mt-1">Exceptional Quality</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">About MTL Exclusive</h2>
              <h3 className="font-heading text-4xl md:text-[48px] font-bold text-[#161616] mb-8 leading-[1.2]">
                Trust, Expertise, and Unmatched Quality.
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
                With over 35 years of experience in the automotive care industry, MTL Exclusive has built a reputation for delivering exceptional detailing experiences. We understand that your vehicle is an investment and a passion.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <CheckCircle className="text-brand-primary mt-1 mr-5 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-heading font-bold text-2xl text-[#161616]">Premium Products</h4>
                    <p className="text-lg text-gray-600 mt-2 font-light">We exclusively use industry-leading products to ensure the best protection and shine for your vehicle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-brand-primary mt-1 mr-5 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-heading font-bold text-2xl text-[#161616]">Mobile Convenience</h4>
                    <p className="text-lg text-gray-600 mt-2 font-light">Our fully equipped mobile units bring the luxury detailing experience directly to your home or office.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-brand-primary mt-1 mr-5 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-heading font-bold text-2xl text-[#161616]">Meticulous Care</h4>
                    <p className="text-lg text-gray-600 mt-2 font-light">Every vehicle is treated with the utmost respect and attention to detail by our skilled technicians.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#161616] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
            <h3 className="font-heading text-4xl md:text-[48px] font-bold mb-8 leading-[1.2]">Tailored Solutions for Your Vehicle</h3>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">From deep interior cleaning to advanced ceramic coatings, we offer comprehensive packages to restore and protect your car.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <motion.div {...fadeIn} className="bg-[#1A1A1A] p-10 border border-gray-800 hover:border-brand-primary transition-colors group">
              <div className="bg-[#111] w-20 h-20 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                <Sparkles className="text-brand-primary group-hover:text-[#161616]" size={36} />
              </div>
              <h4 className="font-heading text-3xl font-bold mb-4">Exterior Detailing</h4>
              <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">Comprehensive hand wash, clay bar treatment, wheel deep cleaning, and premium wax application for a brilliant shine.</p>
              <a href="#contact" className="text-brand-primary font-bold uppercase tracking-widest text-sm flex items-center hover:text-white transition-colors group-hover:text-white">
                Learn more <ChevronRight size={18} className="ml-2" />
              </a>
            </motion.div>

            {/* Service 2 */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-[#1A1A1A] p-10 border border-gray-800 hover:border-brand-primary transition-colors group">
              <div className="bg-[#111] w-20 h-20 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                <Car className="text-brand-primary group-hover:text-[#161616]" size={36} />
              </div>
              <h4 className="font-heading text-3xl font-bold mb-4">Interior Deep Clean</h4>
              <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">Steam cleaning, leather conditioning, stain removal, and thorough vacuuming to make your interior feel brand new.</p>
              <a href="#contact" className="text-brand-primary font-bold uppercase tracking-widest text-sm flex items-center hover:text-white transition-colors group-hover:text-white">
                Learn more <ChevronRight size={18} className="ml-2" />
              </a>
            </motion.div>

            {/* Service 3 */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-[#1A1A1A] p-10 border border-gray-800 hover:border-brand-primary transition-colors group">
              <div className="bg-[#111] w-20 h-20 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                <Droplets className="text-brand-primary group-hover:text-[#161616]" size={36} />
              </div>
              <h4 className="font-heading text-3xl font-bold mb-4">Ceramic Coating</h4>
              <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">Long-lasting nano-ceramic protection that repels water, dirt, and UV rays while providing an unmatched glossy finish.</p>
              <a href="#contact" className="text-brand-primary font-bold uppercase tracking-widest text-sm flex items-center hover:text-white transition-colors group-hover:text-white">
                Learn more <ChevronRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="font-heading text-4xl md:text-[48px] font-bold text-[#161616]">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Marc Tremblay", text: "Incredible service! They came to my office and made my 5-year-old Porsche look like it just rolled off the showroom floor. Highly recommended." },
              { name: "Sarah Jenkins", text: "The attention to detail is unmatched. They managed to get out stains in my interior that I thought were permanent. Very professional team." },
              { name: "David L.", text: "I've used many detailers in Montreal, but MTL Exclusive is by far the best. Their ceramic coating application is flawless." }
            ].map((review, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-white p-10 shadow-xl border border-gray-100 relative">
                <div className="flex text-brand-primary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                </div>
                <p className="text-xl text-gray-600 mb-8 italic font-light leading-relaxed">"{review.text}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-[#161616] flex items-center justify-center text-white font-heading font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-heading font-bold text-lg text-[#161616]">{review.name}</p>
                    <p className="text-xs tracking-widest uppercase text-gray-500 mt-1">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-[56px] font-bold text-[#161616] mb-8 leading-[1.1]">Ready to Transform Your Vehicle?</h2>
          <p className="text-2xl text-[#161616]/80 mb-12 font-light">Book your premium mobile detailing service today and experience the MTL Exclusive difference.</p>
          <a href="#contact" className="inline-block bg-[#161616] text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#161616] transition-colors shadow-2xl">
            Schedule an Appointment
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#161616] text-white pt-24 pb-12 border-t-[6px] border-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <img src={LOGO_URL} alt="MTL Exclusive" className="h-14 w-auto mb-8 brightness-0 invert" />
              <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">
                Montreal's premier mobile auto detailing service. Delivering meticulous care and luxury for car enthusiasts since 1989.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-2xl font-bold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-lg text-gray-400 hover:text-brand-primary transition-colors font-light">Our Services</a></li>
                <li><a href="#about" className="text-lg text-gray-400 hover:text-brand-primary transition-colors font-light">About Us</a></li>
                <li><a href="#testimonials" className="text-lg text-gray-400 hover:text-brand-primary transition-colors font-light">Reviews</a></li>
                <li><a href="#" className="text-lg text-gray-400 hover:text-brand-primary transition-colors font-light">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-2xl font-bold mb-8 text-white">Services</h4>
              <ul className="space-y-4">
                <li className="text-lg text-gray-400 font-light">Exterior Detailing</li>
                <li className="text-lg text-gray-400 font-light">Interior Deep Clean</li>
                <li className="text-lg text-gray-400 font-light">Paint Correction</li>
                <li className="text-lg text-gray-400 font-light">Ceramic Coating</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-2xl font-bold mb-8 text-white">Contact Us</h4>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="text-brand-primary mr-4 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-400 font-light">(514) 555-0198</span>
                </li>
                <li className="flex items-start">
                  <Mail className="text-brand-primary mr-4 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-400 font-light">info@mtlexclusive.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-brand-primary mr-4 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-400 font-light">Mobile Service<br/>Greater Montreal Area</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-base mb-4 md:mb-0 font-light">
              &copy; {new Date().getFullYear()} MTL Exclusive. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors text-base font-light">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors text-base font-light">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

