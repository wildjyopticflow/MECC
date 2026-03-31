import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Check,
  ShieldCheck,
  Sun,
  Layers,
  Zap,
  Anchor,
  HeartHandshake,
  ChevronRight,
  ClipboardList,
  Microscope,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_BG = "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop";

const PACKAGES = [
  {
    name: "Silver",
    subtitle: "Impeccable cleaning with precision.",
    price: "From $150",
    features: [
      "Wash Car Exterior",
      "Wipe Down Door Interiors",
      "Rims & Tires",
      "Dress Tires",
      "Clean Windows",
      "Tornador and Vacuum Interior",
      "Decontamination Paint (Optimum Clay)",
      "Wax Application (3–6 Months)"
    ]
  },
  {
    name: "Gold",
    subtitle: "Elevate your car's appearance with advanced protection.",
    price: "From $250",
    features: [
      "All Silver Package Services",
      "Paint Sealant Application (6–9 Months)"
    ],
    highlight: true
  },
  {
    name: "Platinum",
    subtitle: "Complete interior and exterior rejuvenation.",
    price: "From $400",
    features: [
      "All Gold Package Services",
      "Apply Plastic & Vinyl Treatment",
      "Aquapel Treatment on Windows",
      "Steam and Shampoo Interior",
      "Ferrex Treatment"
    ]
  }
];

const CERAMIC_IMAGES = [
  "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1627454819213-df818cc6272c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579549301138-144a1daeeab9?q=80&w=1200&auto=format&fit=crop"
];

const OTHER_SERVICES = [
  { title: "Window Tints", desc: "Protect your windows and your car from damage, sun and unwanted eyes thanks to our wide range of colors.", Icon: Sun },
  { title: "Paint Protection Film (PPF)", desc: "Protect your car from damage, chips, and scratches while preserving the original paintwork.", Icon: Layers },
  { title: "Opti-Coat", desc: "The best protection for your vehicle, inside and out.", Icon: ShieldCheck },
  { title: "Unplugged", desc: "The ultimate Tesla Performance upgrade services.", Icon: Zap },
  { title: "Boat Services", desc: "We help you maintain the natural beauty of your boat as well as its optimal functioning.", Icon: Anchor },
  { title: "Covid Safe", desc: "Our full interior Covid-19 cleaning and disinfection process is proven to eliminate traces of the virus.", Icon: HeartHandshake }
];

const PROCESS = [
  { Icon: ClipboardList, step: "01", title: "Book Online", desc: "Schedule your appointment in minutes. We'll confirm your slot and prepare for your arrival." },
  { Icon: Microscope,    step: "02", title: "Inspection", desc: "A thorough pre-service inspection ensures we recommend exactly what your vehicle needs." },
  { Icon: Sparkles,      step: "03", title: "Expert Detail", desc: "Our technicians meticulously work through every surface — inside and out — with premium products." },
  { Icon: Trophy,        step: "04", title: "Drive Away Impressed", desc: "Your vehicle leaves looking showroom-fresh. We won't call it done until it's perfect." },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function CleaningServices() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-primary">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src={HERO_BG} alt="Car Detailing" className="w-full h-full object-cover object-center scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-accent" />
              <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">Expert Care</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6">
              Car Detailing <span className="italic font-normal text-brand-accent">Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/80 mb-4 leading-relaxed font-light max-w-2xl">
              We treat your car with the utmost care — delivering the best detailing service in Montreal.
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-accent font-semibold text-sm tracking-wide uppercase mb-10">
              * Please add $15 for SUVs and $20 for trucks to all packages.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Book Your Detail
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="py-28 bg-[#111110] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, #CA8A04 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-accent" />
              <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">How It Works</span>
              <span className="h-px w-10 bg-brand-accent" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-white">
              Simple. Seamless. Spotless.
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                style={{ transformOrigin: 'left' }}
                className="w-full h-full bg-gradient-to-r from-brand-accent/60 via-brand-accent/30 to-brand-accent/60"
              />
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {PROCESS.map(({ Icon, step, title, desc }) => (
                <motion.div key={step} variants={fadeUp} className="flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-brand-primary border border-white/10 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-[#292524] transition-all duration-500 relative z-10">
                      <Icon className="text-brand-accent" size={36} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-accent flex items-center justify-center text-white text-[10px] font-bold z-20">
                      {step}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">{title}</h4>
                  <p className="text-white/55 font-light leading-relaxed text-sm">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pricing Packages ── */}
      <section className="py-28 bg-brand-primary relative z-20" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-accent" />
              <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">Choose Your Package</span>
              <span className="h-px w-10 bg-brand-accent" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-white">
              Tailored To Your Vehicle
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={!pkg.highlight ? { y: -8, transition: { duration: 0.3 } } : { scale: 1.02, transition: { duration: 0.3 } }}
                className={`relative flex flex-col p-10 rounded-[2rem] border transition-all duration-500
                  ${pkg.highlight
                    ? 'bg-brand-accent text-white border-brand-accent shadow-[0_20px_60px_rgba(202,138,4,0.4)]'
                    : 'bg-[#292524] border-white/10 text-white shadow-xl hover:border-brand-accent/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]'}`}
              >
                {pkg.highlight && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.85 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-brand-primary text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full shadow-lg whitespace-nowrap"
                  >
                    Most Popular
                  </motion.div>
                )}
                <h3 className="text-3xl font-semibold mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-8 min-h-[40px] ${pkg.highlight ? 'text-white/90' : 'text-white/60'}`}>{pkg.subtitle}</p>
                <div className="text-4xl font-light mb-10 tracking-tight">{pkg.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start text-sm leading-relaxed">
                      <Check className={`mt-0.5 mr-3 flex-shrink-0 ${pkg.highlight ? 'text-white' : 'text-brand-accent'}`} size={18} />
                      <span className={pkg.highlight ? 'text-white' : 'text-white/80'}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-auto text-center w-full py-4 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 cursor-pointer
                    ${pkg.highlight
                      ? 'bg-white text-brand-primary hover:bg-brand-primary hover:text-white'
                      : 'bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white'}`}
                >
                  Select Package
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Ceramic Coating Gallery ── */}
      <section className="py-32 bg-[#292524] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-brand-accent" />
                <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">Premium Preservation</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold leading-[1.2]">Ceramic Coating Finishes</h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-md text-white/70 leading-relaxed font-light"
            >
              Experience the liquid mirror finish. Warranty options spanning 1, 2, 5, and 7 years.
              <span className="block mt-3 text-brand-accent/80 text-sm font-semibold uppercase tracking-wider">
                Drag to explore →
              </span>
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pl-4 sm:pl-6 lg:pl-8 max-w-7xl mx-auto w-full"
        >
          <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              className="flex gap-8"
            >
              {CERAMIC_IMAGES.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-[300px] md:min-w-[450px] lg:min-w-[600px] h-[400px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl relative group flex-shrink-0"
                  whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                >
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors duration-600 z-10" />
                  <img src={img} alt={`Ceramic Finish ${idx + 1}`} className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <span className="text-white font-semibold text-sm uppercase tracking-wider">Ceramic Finish #{idx + 1}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Other Services ── */}
      <section className="py-32 bg-brand-primary relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-accent" />
              <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">Specialized Care</span>
              <span className="h-px w-10 bg-brand-accent" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-white">Beyond Detailing</motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {OTHER_SERVICES.map((srv, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="luxury-card-dark group"
              >
                <div className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center mb-8 border border-white/5 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500 shadow-lg">
                  <srv.Icon className="text-brand-accent group-hover:text-white transition-colors duration-500" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 tracking-wide group-hover:text-brand-accent transition-colors duration-300">{srv.title}</h4>
                <p className="text-white/60 font-light leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-28 relative overflow-hidden bg-[#111110]">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #CA8A04 0%, transparent 55%)' }} />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-[1.1]">
            Your Car Deserves<br />
            <span className="italic font-normal text-brand-accent">the Best.</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 font-light max-w-2xl mx-auto">
            Book today and experience the meticulous care that's earned us 5 stars across 59 reviews.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group px-10 py-5">
            Book Your Appointment
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
