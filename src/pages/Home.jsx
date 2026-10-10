import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  AIIcon, SoftwareIcon, CloudIcon, DataIcon,
  DevOpsIcon, MobileIcon, ConsultingIcon,
} from '../components/ServiceIcons';

const services = [
  { icon: AIIcon, title: 'AI & Machine Learning', desc: 'Custom ML models, NLP, computer vision and production-grade AI systems.' },
  { icon: SoftwareIcon, title: 'Custom Software', desc: 'Full-stack platforms engineered to scale with your business and users.' },
  { icon: CloudIcon, title: 'Cloud & DevOps', desc: 'AWS, Azure, GCP — resilient infrastructure, CI/CD, and automation.' },
  { icon: DataIcon, title: 'Data Analytics', desc: 'Pipelines, warehouses and BI that turn raw data into decisions.' },
  { icon: MobileIcon, title: 'Web & Mobile Apps', desc: 'Pixel-perfect, native-feeling products across every surface.' },
  { icon: ConsultingIcon, title: 'Tech Consulting', desc: 'Architecture, strategy and team enablement — from audit to execution.' },
];

const pillars = [
  { stat: '10+', label: 'Years combined experience', desc: 'Seasoned engineers who have shipped at startup speed and enterprise scale.' },
  { stat: '50+', label: 'Products delivered', desc: 'From AI copilots to multi-region SaaS platforms — delivered end-to-end.' },
  { stat: '99.9%', label: 'Production uptime', desc: 'Hardened infrastructure, observability-first, built to never page you at 3am.' },
  { stat: '24/7', label: 'Partnership mindset', desc: 'We show up as a team, not a vendor. Fast answers. Honest calls.' },
];

const portfolio = [
  { tag: 'AI / LLM', title: 'Enterprise AI Copilot', desc: 'RAG-powered assistant cutting support handle time by 62%.', color: 'from-cyan/30 to-brand-blue/30' },
  { tag: 'FinTech', title: 'Real-time Payments Ledger', desc: 'Event-sourced ledger processing 2M+ tx/day with five-9s reliability.', color: 'from-brand-blue/30 to-cyan/30' },
  { tag: 'SaaS', title: 'Analytics Platform', desc: 'Self-serve BI with sub-second queries across 4B rows.', color: 'from-cyan/30 to-cyan-soft/30' },
  { tag: 'Healthcare', title: 'Clinical Vision System', desc: 'HIPAA-compliant CV pipeline for diagnostic imaging at scale.', color: 'from-brand-blue/30 to-brand-bluedark/30' },
];

const testimonials = [
  { quote: "Centricon didn't just deliver — they out-engineered our internal roadmap by two quarters. Rare partner.", name: 'Aisha Rahman', role: 'VP Engineering, FinSight' },
  { quote: "The AI assistant they built is now core to our product. Thoughtful, fast, and ruthlessly reliable.", name: 'David Kim', role: 'CTO, Northwind SaaS' },
  { quote: "From strategy to production in 9 weeks. They treat our business like it's theirs.", name: 'Maria Conti', role: 'COO, Atlas Health' },
];

const logos = ['NORTHWIND', 'FINSIGHT', 'ATLAS', 'NOVA', 'LUMEN', 'ORBIT'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/70 to-navy-deep" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-20 z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="max-w-4xl"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              AI & Software Engineering Studio
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
            >
              AI & Software Solutions{' '}
              <span className="text-gradient">That Drive Real Transformation</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We build intelligent systems that scale — from custom AI and data platforms to
              cloud-native products engineered for growth.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">
                Explore Solutions
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link to="/contact" className="btn-ghost">
                Book a Strategy Call
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-5">Trusted by ambitious teams</p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-60">
                {logos.map((l) => (
                  <span key={l} className="font-display font-bold text-slate-400 tracking-widest text-sm">{l}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-cyan"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-28 bg-navy-deep">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-3xl mb-16"
          >
            <motion.span variants={fadeUp} className="eyebrow">What we do</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 section-title text-white">
              Services engineered for <span className="text-gradient">scale</span>.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-slate-400 text-lg">
              Seven disciplines, one cohesive team. We cover the full stack of modern
              product engineering — from strategy to production.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group relative p-7 rounded-2xl glass hover:border-cyan/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-cyan mb-5 w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-cyan text-sm font-semibold group/link">
                      Learn more
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CENTRICON */}
      <section className="relative py-28 bg-surface text-text-dark overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            >
              <motion.span variants={fadeUp} className="eyebrow-dark">Why Centricon</motion.span>
              <motion.h2 variants={fadeUp} className="mt-4 section-title text-text-dark">
                A partner built for <span className="text-gradient">compounding</span> outcomes.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-text-muted text-lg leading-relaxed">
                We don't sell hours — we sell leverage. Our senior-only team plugs in fast,
                owns hard problems, and leaves your engineering organization stronger than we
                found it.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Link to="/about" className="btn-outline-dark">About Centricon</Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-navy hover:text-cyan-deep transition-colors">
                  See our work
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 gap-5"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  variants={fadeUp}
                  className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300 ${i % 3 === 0 ? 'md:translate-y-4' : ''}`}
                >
                  <div className="font-display text-4xl font-bold text-gradient">{p.stat}</div>
                  <div className="mt-2 font-semibold text-text-dark">{p.label}</div>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="relative py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="max-w-2xl"
            >
              <motion.span variants={fadeUp} className="eyebrow">Featured work</motion.span>
              <motion.h2 variants={fadeUp} className="mt-4 section-title text-white">
                Products we're <span className="text-gradient">proud</span> of.
              </motion.h2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Link to="/portfolio" className="btn-ghost">View all case studies</Link>
            </motion.div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {portfolio.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 glass p-8 h-64 flex flex-col justify-end"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{p.tag}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-slate-300">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="eyebrow">Clients</span>
            <h2 className="mt-4 section-title text-white">
              Words from teams we've <span className="text-gradient">shipped with</span>.
            </h2>
          </div>

          <div className="relative rounded-3xl glass p-8 md:p-14 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan/15 blur-3xl" />
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, x: i === active ? 0 : 20, position: i === active ? 'relative' : 'absolute' }}
                transition={{ duration: 0.5 }}
                className="inset-0"
                style={{ display: i === active ? 'block' : 'none' }}
              >
                <svg className="w-10 h-10 text-cyan/60 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4v2h1a4 4 0 004-4V9a2 2 0 000-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V9a2 2 0 000-2z"/></svg>
                <p className="font-display text-2xl md:text-3xl text-white leading-snug">"{t.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan to-brand-blue flex items-center justify-center font-bold text-navy-deep">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="mt-8 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? 'w-10 bg-cyan' : 'w-5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
