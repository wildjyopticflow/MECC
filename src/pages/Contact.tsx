import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle, CalendarCheck, MessageSquare, Zap } from 'lucide-react';

const HOURS = [
  { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM', open: true },
  { day: 'Saturday',        time: 'Closed',             open: false },
  { day: 'Sunday',          time: 'Closed',             open: false },
];

const CONTACT_INFO = [
  { Icon: Phone,  label: 'Phone',   value: '450-923-2118',                       href: 'tel:4509232118' },
  { Icon: Mail,   label: 'Email',   value: 'sam@mtlexclusive.com',               href: 'mailto:sam@mtlexclusive.com' },
  { Icon: MapPin, label: 'Address', value: '8500 Taschereau Blvd #5\nBrossard, Quebec J4X 2T4', href: 'https://maps.google.com/?q=8500+Taschereau+Blvd+5+Brossard+Quebec+J4X+2T4' },
];

const NEXT_STEPS = [
  { Icon: MessageSquare, title: 'We Receive Your Request',  desc: 'Your message lands directly with our team.' },
  { Icon: CalendarCheck, title: 'We Confirm Your Slot',     desc: 'Expect a reply within one business day.' },
  { Icon: Zap,           title: 'We Get To Work',           desc: "Show up and we'll handle the rest." },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  show:   { opacity: 1, x: 0,   transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', phone: '', message: '', subscribe: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-primary overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-2/3 h-[500px] bg-brand-accent/8 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-brand-accent" />
            <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm">Get In Touch</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6">
            Book Your<br />
            <span className="italic font-normal text-brand-accent">Appointment.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/65 font-light leading-relaxed">
            Ready to give your vehicle the treatment it deserves? Reach out and we'll get you scheduled — fast.
          </motion.p>
        </motion.div>
      </section>

      {/* ── What Happens Next strip ── */}
      <section className="bg-[#111110] border-y border-white/5">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5"
        >
          {NEXT_STEPS.map(({ Icon, title, desc }, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-start gap-5 p-10 group">
              <div className="w-11 h-11 rounded-full bg-brand-primary border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-400">
                <Icon className="text-brand-accent group-hover:text-white transition-colors duration-400" size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-semibold mb-1">Step {i + 1}</p>
                <h4 className="text-white font-semibold mb-1">{title}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left — Info + Hours */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info card */}
            <motion.div variants={fadeLeft} className="luxury-card-dark">
              <h3 className="text-lg font-semibold text-white mb-8 tracking-wide uppercase text-xs text-white/40">Contact Information</h3>
              <div className="space-y-7">
                {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                  <a key={label} href={href}
                    target={label === 'Address' ? '_blank' : undefined}
                    rel={label === 'Address' ? 'noopener noreferrer' : undefined}
                    className="flex items-start group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-brand-primary border border-white/5 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
                      <Icon className="text-brand-accent group-hover:text-white transition-colors duration-300" size={18} />
                    </div>
                    <div>
                      <p className="text-white/35 text-[10px] uppercase tracking-[0.15em] font-semibold mb-1">{label}</p>
                      <p className="text-white/90 font-light leading-relaxed whitespace-pre-line group-hover:text-brand-accent transition-colors duration-300 text-sm">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Hours card */}
            <motion.div variants={fadeLeft} className="luxury-card-dark">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full bg-brand-primary border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-accent" size={16} />
                </div>
                <h3 className="text-white font-semibold tracking-wide">Hours of Operation</h3>
              </div>
              <div className="space-y-3">
                {HOURS.map(({ day, time, open }) => (
                  <div key={day} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-white/65 font-light text-sm">{day}</span>
                    <span className={`font-semibold text-xs tracking-wider uppercase ${open ? 'text-brand-accent' : 'text-white/25'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-3"
          >
            <div className="luxury-card-dark">
              <h3 className="text-2xl font-semibold text-white mb-1 tracking-wide">Book an Appointment</h3>
              <p className="text-white/45 font-light mb-10 text-sm">We'll get back to you within one business day.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="text-brand-accent" size={40} />
                  </motion.div>
                  <h4 className="text-2xl font-semibold text-white mb-3">Message Sent!</h4>
                  <p className="text-white/55 font-light max-w-sm leading-relaxed text-sm">
                    Thank you for reaching out. We'll be in touch within one business day to confirm your appointment.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '', subscribe: false }); }}
                    className="mt-10 btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/45 text-[10px] uppercase tracking-[0.15em] font-semibold mb-2">Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith"
                        className="w-full bg-brand-primary border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 font-light focus:outline-none focus:border-brand-accent/60 focus:ring-1 focus:ring-brand-accent/20 transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-white/45 text-[10px] uppercase tracking-[0.15em] font-semibold mb-2">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(514) 000-0000"
                        className="w-full bg-brand-primary border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 font-light focus:outline-none focus:border-brand-accent/60 focus:ring-1 focus:ring-brand-accent/20 transition-all duration-300 text-sm"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-white/45 text-[10px] uppercase tracking-[0.15em] font-semibold mb-2">
                      Email <span className="text-brand-accent">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                      className="w-full bg-brand-primary border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 font-light focus:outline-none focus:border-brand-accent/60 focus:ring-1 focus:ring-brand-accent/20 transition-all duration-300 text-sm"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-white/45 text-[10px] uppercase tracking-[0.15em] font-semibold mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your vehicle and what services you're interested in..."
                      className="w-full bg-brand-primary border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 font-light focus:outline-none focus:border-brand-accent/60 focus:ring-1 focus:ring-brand-accent/20 transition-all duration-300 resize-none text-sm"
                    />
                  </motion.div>

                  <motion.label variants={fadeUp} className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input type="checkbox" name="subscribe" checked={form.subscribe} onChange={handleChange} className="sr-only peer" />
                      <div className="w-5 h-5 rounded border border-white/20 bg-brand-primary peer-checked:bg-brand-accent peer-checked:border-brand-accent transition-all duration-300 flex items-center justify-center">
                        {form.subscribe && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-white/45 text-sm font-light leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                      Sign up for updates, promotions, and more
                    </span>
                  </motion.label>

                  <motion.div variants={fadeUp} className="pt-2">
                    <button type="submit" disabled={loading}
                      className="btn-primary w-full sm:w-auto flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <ChevronRight size={18} />
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          <iframe
            title="MTL Exclusive Location"
            src="https://maps.google.com/maps?q=8500+Taschereau+Blvd+5+Brossard+Quebec+J4X+2T4&output=embed&z=15"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

    </div>
  );
}
