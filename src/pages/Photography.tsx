import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, Car, Star, ChevronRight, Aperture, Clock, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import InstagramWidget from '../components/InstagramWidget';

const HERO_BG = "https://img1.wsimg.com/isteam/ip/a2fce974-c5cb-42bb-bed6-c00ef46616e1/ols/DSC05330.jpg/:/rs=w:1600,h:900,cg:true,m";
const DEALERSHIP_IMG = "https://img1.wsimg.com/isteam/stock/12445/:/rs=w:1200,h:900,cg:true,m/cr=w:1200,h:900";
const PRIVATE_IMG = "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1000&q=80";

const DELIVERABLES = [
  { Icon: ImageIcon, title: "High-Resolution", desc: "Every shot delivered in full resolution — print-ready and web-optimized." },
  { Icon: Aperture,  title: "Cinematic Quality", desc: "Studio-level lighting and composition that makes every vehicle look extraordinary." },
  { Icon: Clock,     title: "Fast Turnaround", desc: "Edited and delivered quickly so your listings go live without delay." },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Photography() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOp  = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="pb-0 bg-brand-primary relative overflow-hidden">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src={HERO_BG}
            alt="MTL Exclusive Car Photography"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOp }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-accent" />
              <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                <Camera size={14} /> Visual Excellence
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6">
              We Don't Just<br />
              <span className="italic font-normal text-brand-accent">Shoot Cars.</span><br />
              We Tell Their Story.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-white/75 font-light leading-relaxed max-w-2xl mb-10">
              Professional automotive photography for dealerships and private owners. Every angle. Every detail. Every story — captured perfectly.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Book Your Session
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a href="#showcase" className="btn-secondary-light inline-flex items-center gap-2">
                See Our Work
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Deliverables Strip ── */}
      <section className="bg-[#111110] border-y border-white/5 py-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5"
        >
          {DELIVERABLES.map(({ Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className="flex items-start gap-5 p-10 group">
              <div className="w-12 h-12 rounded-full bg-brand-primary border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-400">
                <Icon className="text-brand-accent group-hover:text-white transition-colors duration-400" size={22} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 tracking-wide">{title}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Showcase ── */}
      <section id="showcase" className="relative py-32 bg-[#111110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Dealership */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="order-2 md:order-1 relative group"
            >
              <div className="absolute -inset-3 bg-brand-accent/15 blur-[40px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={DEALERSHIP_IMG}
                  alt="Dealership Inventory Photography"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-3 text-brand-accent mb-6">
                <Car size={20} />
                <span className="tracking-[0.15em] uppercase font-semibold text-sm">Dealership Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-snug">
                Showcase Your Inventory<br />
                <span className="font-semibold">Like Never Before</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg mb-8">
                Tailored for dealerships looking to dominate online listings. We create high-impact, eye-catching images that highlight every detail — from sleek sedans to powerful SUVs — making your inventory impossible to scroll past.
              </p>
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 text-white/80"
              >
                {["High-Resolution Exterior & Interior Shots", "Detail-Oriented Feature Highlights", "Fast Turnaround for Online Listings"].map(item => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3">
                    <Star className="text-brand-accent flex-shrink-0" size={16} fill="#CA8A04" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: 'left' }}
            className="w-full h-px bg-gradient-to-r from-brand-accent/60 via-white/10 to-transparent mb-32"
          />

          {/* Private Client */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-center gap-3 text-brand-accent mb-6">
                <Camera size={20} />
                <span className="tracking-[0.15em] uppercase font-semibold text-sm">Private Client</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-snug">
                Capture the Essence<br />
                <span className="font-semibold">of Your Ride</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg mb-8">
                Every car has a personality. Whether it's a classic, a luxury vehicle, or a custom build — we bring out what makes yours unique. Our goal: images you'll be proud to frame.
              </p>
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 text-white/80"
              >
                {["Cinematic Location Shoots", "Custom Styling & Lighting", "Print-Ready High-Quality Edits"].map(item => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3">
                    <Star className="text-brand-accent flex-shrink-0" size={16} fill="#CA8A04" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="relative group"
            >
              <div className="absolute -inset-3 bg-brand-primary/30 blur-[40px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={PRIVATE_IMG}
                  alt="Private Client High-End Photography"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #CA8A04 0%, transparent 60%)' }} />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-accent" />
            <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">Ready to Shoot?</span>
            <span className="h-px w-10 bg-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-[1.1]">
            Let's Make Your Vehicle<br />
            <span className="italic font-normal text-brand-accent">Unforgettable.</span>
          </h2>
          <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
            Book your session with MTL Exclusive and let us bring out the very best in your vehicle.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group px-10 py-5">
            Reserve Your Session
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>

      {/* ── Instagram ── */}
      <InstagramWidget />
    </div>
  );
}
