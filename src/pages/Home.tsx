import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import {
  Star,
  Shield,
  CheckCircle,
  MapPin,
  ChevronRight,
  Droplets,
  Sparkles,
  Car
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const HERO_BG = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/DSC02367.JPG";
const ABOUT_IMG = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/ols/DSC05326.jpg";

// Animated counter hook
function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return { count, ref };
}

// Stagger container variants
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};
const staggerItemLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

function SectionLabel({ children }: { children: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-center gap-3 mb-4"
    >
      <span className="h-px w-10 bg-brand-accent block" />
      <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">{children}</span>
    </motion.div>
  );
}

function AnimatedHeading({ children, className = '' }: { children: any; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const STATS = [
  { target: 5, display: '5.0', suffix: '★', label: 'Google Rating', static: true },
  { target: 59, suffix: '+', label: 'Reviews' },
  { target: 5000, suffix: '+', label: 'Jobs Completed', format: true },
  { target: 35, suffix: '', label: 'Years Experience' },
];

function StatItem({ stat }: { stat: typeof STATS[number] }) {
  const { count, ref } = useCountUp('target' in stat ? stat.target : 0);
  const display = stat.static
    ? stat.display
    : stat.format
    ? count.toLocaleString()
    : count;

  return (
    <div className="flex flex-col items-center text-center px-6 py-10">
      <span ref={ref} className="font-heading text-5xl md:text-6xl font-semibold text-white leading-none mb-3">
        {display}<span className="italic font-normal text-brand-accent">{stat.suffix}</span>
      </span>
      <span className="text-white/45 text-[11px] uppercase tracking-[0.2em] font-semibold">{stat.label}</span>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);

  // Parallax on hero background
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src={HERO_BG}
            alt="Luxury Car Detailing"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center md:justify-start"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="glass-dark p-10 md:p-16 rounded-xl max-w-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center space-x-3 mb-6">
              <MapPin size={16} className="text-brand-accent" />
              <span className="text-white text-sm font-semibold tracking-[0.2em] uppercase">Montreal, QC</span>
            </motion.div>

            <motion.h1 variants={staggerItem} className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
              Experience the Extraordinary,<br />
              <span className="italic font-normal text-brand-accent">Drive the Exclusive.</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-normal">
              Revitalize. Restore. Reveal. We redefine automotive luxury through meticulous car detailing services.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="btn-primary flex items-center group">
                Call Today To Book
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
              <a href="#services" className="btn-secondary-light">
                Explore Packages
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-brand-primary border-y border-white/10 relative z-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 100%, #CA8A04 0%, transparent 60%)' }} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 relative z-10"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <StatItem stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-32 bg-brand-primary relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionLabel>Our Packages</SectionLabel>
            <AnimatedHeading>
              <h3 className="text-4xl md:text-5xl font-semibold mb-6 text-white">Services Customized For You</h3>
            </AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-xl text-white/80 font-light leading-relaxed"
            >
              We offer a wide range of services to meet our customers' needs. The ultimate detailing experience.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { title: "Exterior Detailing", Icon: Sparkles, desc: "Comprehensive hand wash, clay bar treatment, wheel deep cleaning, and premium wax application for a brilliant shine.", image: "https://img1.wsimg.com/isteam/stock/byzQG4E/:/cr=t:12.54%25" },
              { title: "Interior Deep Clean", Icon: Car, desc: "Steam cleaning, leather conditioning, stain removal, and thorough vacuuming to make your interior feel brand new.", image: "https://img1.wsimg.com/isteam/stock/103661/:/rs=w:360,h:270,cg:true,m/cr=w:360,h:270" },
              { title: "Ceramic Coating", Icon: Droplets, desc: "Long-lasting nano-ceramic protection that repels water, dirt, and UV rays while providing an unmatched glossy finish.", image: "https://img1.wsimg.com/isteam/stock/103633/:/rs=w:360,h:270,cg:true,m/cr=w:360,h:270" }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="luxury-image-card group cursor-pointer"
                onClick={() => navigate('/cleaning-services')}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={srv.image} alt={srv.title} className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700" />
                </div>
                <div className="relative p-8 pt-10 flex flex-col flex-grow bg-[#292524]">
                  <div className="absolute -top-10 right-8 w-16 h-16 rounded-2xl bg-[#1C1917] border border-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors duration-400 shadow-xl z-20">
                    <srv.Icon className="text-brand-accent group-hover:text-white transition-colors duration-400" size={32} />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-white z-20 relative">{srv.title}</h4>
                  <p className="text-white/70 mb-8 font-light leading-relaxed flex-grow">{srv.desc}</p>
                  <span className="text-brand-accent font-semibold tracking-[0.1em] uppercase text-sm flex items-center group/link mt-auto inline-block w-fit">
                    Learn more <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 bg-brand-accent/10 rounded-3xl"
              />
              <img
                src={ABOUT_IMG}
                alt="Detailing Professional at Work"
                className="relative rounded-3xl shadow-[0_20px_40px_rgba(28,25,23,0.5)] object-cover h-[700px] w-full"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl shadow-xl border border-white/60 hidden md:block"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center">
                    <Shield className="text-white" size={32} />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-primary text-xl">5,000+ Jobs</p>
                    <p className="text-brand-secondary text-sm tracking-[0.1em] uppercase mt-1">35 Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="order-1 lg:order-2"
            >
              <motion.div variants={staggerItem}>
                <SectionLabel>Who We Are</SectionLabel>
              </motion.div>
              <motion.h3 variants={staggerItem} className="text-4xl md:text-5xl font-semibold text-brand-primary mb-8 leading-[1.2]">
                Why Choose MTL Exclusive?
              </motion.h3>
              <motion.p variants={staggerItem} className="text-xl text-brand-secondary mb-12 leading-relaxed font-light">
                At MTL Exclusive, we redefine automotive luxury through meticulous car detailing services. Our commitment to excellence and passion for perfection make us the premier choice for car enthusiasts who demand nothing but the best.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-8">
                {[
                  { title: "Expertise", desc: "Our skilled technicians possess a wealth of experience and a keen eye for detail. Your vehicle is in the hands of professionals dedicated to perfection." },
                  { title: "Quality Products", desc: "We use premium, industry-leading products to ensure lasting results and protection for your vehicle." },
                  { title: "Tailored Solutions", desc: "Every car is unique, and so are its detailing needs. We customize our services to meet the specific requirements of your vehicle." },
                  { title: "Satisfaction Guaranteed", desc: "We stand behind every job we do. If you're not completely satisfied, we'll make it right — every time." }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={staggerItemLeft} className="flex items-start">
                    <CheckCircle className="text-brand-accent mt-1 mr-5 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-xl text-brand-primary tracking-wide">{item.title}</h4>
                      <p className="text-brand-secondary mt-2 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-32 bg-brand-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-transparent w-full rounded-[24px] border border-transparent hover:border-brand-accent/50 transition-colors duration-500 p-2 md:p-6 group"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-semibold text-white text-center mb-10 group-hover:text-brand-accent transition-colors duration-500"
            >
              What Our Customers Say
            </motion.h3>

            {/* Header Block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col md:flex-row items-center justify-between bg-white/5 rounded-2xl p-6 mb-10 border border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
                <div className="flex items-center">
                  <span className="font-bold text-2xl tracking-tighter mr-1">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <span className="text-white text-xl font-semibold ml-1">Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white text-2xl font-bold">5.0</span>
                  <div className="flex text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="#FBBC05" color="#FBBC05" size={20} />)}
                  </div>
                  <span className="text-white/60 text-sm ml-1">(59)</span>
                </div>
              </div>
              <a href="https://share.google/eDnElkxr2Mz92bOMW" target="_blank" rel="noreferrer" className="bg-[#197BFF] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-sm w-full md:w-auto text-center">
                Review us on Google
              </a>
            </motion.div>

            {/* Reviews Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  name: "Vivienne Tam",
                  time: "9 months ago",
                  text: "We had a great experience at MECC - took the car in and Cody looked at it to give us some recommendations on what sort of cleaning we needed. Super easy to make an appointment and we were very pleased with the results!",
                  avatar: "V",
                  color: "bg-purple-600"
                },
                {
                  name: "Diana de Silva",
                  time: "a year ago",
                  text: "I Googled and came across MECC and was very happy that I chose their service. My car looks brand new. Efficient, fast, courteous and friendly people. I highly recommend. Thank you!",
                  avatar: "D",
                  color: "bg-teal-600"
                },
                {
                  name: "kaven norris",
                  time: "4 years ago",
                  text: "Best car detailing. The owner, Sam, is making sure every car is of his standard. You could not imagine how he can restore a car ! Buffing, ceramic coating, leather treatment. They can do anything.",
                  avatar: "K",
                  color: "bg-orange-600"
                }
              ].map((review, idx) => (
                <motion.div key={idx} variants={staggerItem} className="luxury-card-dark flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-semibold text-lg`}>
                        {review.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center p-[3px]">
                        <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-semibold text-white/90 text-[15px] leading-tight">{review.name}</h4>
                        <CheckCircle size={14} fill="#197BFF" stroke="white" strokeWidth={2} />
                      </div>
                      <p className="text-[13px] text-white/50">{review.time}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="#FBBC05" color="#FBBC05" size={16} />)}
                  </div>
                  <p className="text-[14px] text-white/80 leading-relaxed max-w-full flex-grow">
                    "{review.text}"
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #CA8A04 0%, transparent 60%)' }} />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-[56px] font-semibold text-white mb-8 leading-[1.1]">
            Ready to Transform <br />
            <span className="italic font-normal text-brand-accent">Your Vehicle?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto">
            Book your appointment and experience the MTL Exclusive difference.
          </p>
          <Link
            to="/contact"
            className="btn-primary bg-white text-brand-primary hover:bg-brand-accent hover:text-white border-none px-12 py-5 text-sm shadow-[0_10px_30px_rgba(202,138,4,0.2)]"
          >
            Schedule an Appointment
          </Link>
        </motion.div>
      </section>
    </>
  );
}
