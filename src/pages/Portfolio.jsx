import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  {
    tag: 'AI / LLM', category: 'AI',
    title: 'Enterprise AI Copilot',
    client: 'Global SaaS (Fortune 500)',
    desc: 'RAG-powered assistant integrated across 12 internal tools. Cut support handle time by 62% and deflected 41% of tickets in the first quarter.',
    metrics: [['62%', 'Faster responses'], ['41%', 'Ticket deflection'], ['4M+', 'Queries/month']],
    color: 'from-cyan/40 to-brand-blue/30',
  },
  {
    tag: 'FinTech', category: 'Software',
    title: 'Real-time Payments Ledger',
    client: 'Cross-border FinTech',
    desc: 'Event-sourced, idempotent ledger processing 2M+ transactions per day across 14 currencies. Five-nines reliability, sub-50ms write latency.',
    metrics: [['2M+', 'Tx / day'], ['99.999%', 'Uptime'], ['<50ms', 'Write latency']],
    color: 'from-brand-blue/40 to-cyan/30',
  },
  {
    tag: 'SaaS', category: 'Data',
    title: 'Self-serve Analytics Platform',
    client: 'B2B Marketing Suite',
    desc: 'Replaced a legacy BI stack with a semantic-layer-driven analytics platform. Sub-second queries across 4B rows, adopted by 80% of customer base.',
    metrics: [['4B', 'Rows queried'], ['<1s', 'P95 latency'], ['80%', 'Adoption']],
    color: 'from-cyan/40 to-cyan-soft/30',
  },
  {
    tag: 'Healthcare', category: 'AI',
    title: 'Clinical Vision Pipeline',
    client: 'Diagnostic Imaging Network',
    desc: 'HIPAA-compliant computer vision pipeline for triage of medical imaging. Radiologist-level precision on priority classes.',
    metrics: [['96%', 'Sensitivity'], ['HIPAA', 'Compliant'], ['11 sites', 'Deployed']],
    color: 'from-brand-blue/40 to-brand-bluedark/30',
  },
  {
    tag: 'Cloud', category: 'Cloud',
    title: 'Multi-region Cloud Migration',
    client: 'Financial Services',
    desc: 'Migrated a monolithic on-prem platform to a multi-region AWS footprint. 45% infra cost reduction, zero-downtime cutover.',
    metrics: [['45%', 'Cost reduction'], ['0', 'Downtime'], ['3 regions', 'Active-active']],
    color: 'from-cyan/40 to-brand-blue/30',
  },
  {
    tag: 'Mobile', category: 'Software',
    title: 'Consumer Super-App',
    client: 'Regional Retail Group',
    desc: 'Unified loyalty, commerce and payments in a single React Native app. 1.8M MAU within 6 months of launch.',
    metrics: [['1.8M', 'MAU'], ['4.8★', 'Store rating'], ['6 mo', 'To launch']],
    color: 'from-brand-blue/40 to-cyan/30',
  },
];

const filters = ['All', 'AI', 'Software', 'Cloud', 'Data'];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <section className="relative pt-40 pb-16 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="eyebrow">Portfolio</motion.span>
            <motion.h1 variants={fadeUp} className="mt-5 font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              Selected <span className="text-gradient">case studies</span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-300">
              A glimpse of the systems we've shipped with ambitious teams across AI, FinTech,
              Healthcare, SaaS and Cloud.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === f
                    ? 'bg-cyan text-navy-deep'
                    : 'glass text-slate-300 hover:text-white hover:border-cyan/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            key={filter}
            initial="hidden" animate="visible" variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {visible.map((p) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 glass p-8 group"
              >
                <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-50 group-hover:opacity-90 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{p.tag}</span>
                    <span className="text-xs text-slate-500">{p.client}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">{p.desc}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {p.metrics.map(([n, l]) => (
                      <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                        <div className="font-display text-lg font-bold text-gradient">{n}</div>
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="section-title text-white">
            Have something <span className="text-gradient">ambitious</span> in mind?
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Tell us what you're trying to build. We'll tell you honestly if and how we can help.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Start a conversation</Link>
            <Link to="/services" className="btn-ghost">See services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
