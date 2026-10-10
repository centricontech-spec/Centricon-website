import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  AIIcon, SoftwareIcon, CloudIcon, DataIcon,
  DevOpsIcon, MobileIcon, ConsultingIcon, SecurityIcon,
} from '../components/ServiceIcons';

const services = [
  {
    id: 'ai', icon: AIIcon, title: 'AI & Machine Learning',
    short: 'Production-grade AI — from custom models to embedded copilots.',
    full: 'We design, train and deploy machine learning systems that move the needle. Whether it is an LLM-powered workflow, a computer vision pipeline, or a forecasting engine, we own it end-to-end — data, modelling, evaluation, and MLOps.',
    features: ['Custom LLM & RAG systems', 'Computer vision pipelines', 'Forecasting & recommendations', 'MLOps & model monitoring', 'AI product strategy'],
  },
  {
    id: 'software', icon: SoftwareIcon, title: 'Custom Software Development',
    short: 'Full-stack platforms engineered to last.',
    full: 'From greenfield SaaS to legacy modernisation, we build maintainable, testable, performant software. Strong typing, strong contracts, and continuous delivery from day one.',
    features: ['SaaS & platform engineering', 'API design & integrations', 'Legacy modernisation', 'Event-driven architectures', 'Technical due diligence'],
  },
  {
    id: 'cloud', icon: CloudIcon, title: 'Cloud & Infrastructure',
    short: 'Resilient, cost-efficient cloud — AWS, Azure, GCP.',
    full: 'We architect and operate cloud systems that scale without drama. Infrastructure as code, multi-region resilience, and finops built in.',
    features: ['Cloud migration & modernisation', 'Kubernetes & serverless', 'Infrastructure as code', 'Cost & reliability engineering', 'Landing zones & multi-account'],
  },
  {
    id: 'data', icon: DataIcon, title: 'Data Analytics & Engineering',
    short: 'Turn data into a durable advantage.',
    full: 'Pipelines, warehouses, semantic layers and BI that actually get used. We make analytics a product, not a side project.',
    features: ['Modern data stack', 'Real-time streaming pipelines', 'Warehouse & lakehouse design', 'BI dashboards & semantic layer', 'Data governance'],
  },
  {
    id: 'devops', icon: DevOpsIcon, title: 'DevOps & Automation',
    short: 'Ship faster, safer — every single day.',
    full: 'CI/CD, observability, and developer experience tuned to your team. We cut cycle time while increasing confidence in every release.',
    features: ['CI/CD pipeline engineering', 'Observability & SRE practices', 'Automated testing strategy', 'Platform engineering', 'Security & compliance automation'],
  },
  {
    id: 'mobile', icon: MobileIcon, title: 'Web & Mobile Apps',
    short: 'Products that feel premium on every surface.',
    full: 'React, React Native, Next.js, Flutter — we craft interfaces that are fast, accessible and beautiful. Design and engineering working as one team.',
    features: ['Next.js & React web apps', 'React Native & Flutter', 'Design systems & UX', 'Performance engineering', 'Accessibility & i18n'],
  },
  {
    id: 'consulting', icon: ConsultingIcon, title: 'Technology Consulting',
    short: 'Strategic clarity for leadership teams.',
    full: 'Architecture reviews, org design, technology strategy. We help leaders choose the right bets and execute them without regret.',
    features: ['Architecture & code audits', 'Technology strategy', 'Team topology & hiring', 'Vendor & stack selection', 'Fractional CTO engagements'],
  },
];

const technologies = [
  'Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Go', 'Rust',
  'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'AWS', 'GCP', 'Azure',
  'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'Snowflake', 'Kafka',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="eyebrow">Services</motion.span>
            <motion.h1 variants={fadeUp} className="mt-5 font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              End-to-end engineering for <span className="text-gradient">modern products</span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-300 leading-relaxed">
              Seven focused practices, one integrated team. Each capability is deep enough to
              stand alone — and designed to compound when they work together on your product.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.button
                  key={s.id}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelected(s)}
                  className="text-left group relative p-7 rounded-2xl glass hover:border-cyan/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-cyan/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-cyan w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-5">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-5">{s.short}</p>
                    <span className="inline-flex items-center gap-1.5 text-cyan text-sm font-semibold">
                      Learn more
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 bg-navy-deep/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
            className="glass border border-white/10 rounded-3xl p-8 md:p-10 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="text-cyan w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                <selected.icon className="w-8 h-8" />
              </div>
              <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white p-2" aria-label="Close">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <h3 className="font-display text-3xl font-bold text-white">{selected.title}</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">{selected.full}</p>
            <h4 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">What's included</h4>
            <ul className="mt-4 space-y-3">
              {selected.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-slate-200">
                  <svg className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary w-full mt-8">Start a project</Link>
          </motion.div>
        </motion.div>
      )}

      {/* Process */}
      <section className="py-24 bg-surface text-text-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow-dark">How we work</span>
            <h2 className="mt-4 section-title">A process that <span className="text-gradient">respects</span> your time.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Discover', d: 'We dig into the problem, constraints and outcomes — not a template questionnaire.' },
              { n: '02', t: 'Design', d: 'Architecture, scope and milestones you can actually stand behind.' },
              { n: '03', t: 'Deliver', d: 'Weekly demos, continuous delivery, zero-surprise engineering.' },
              { n: '04', t: 'Durable', d: 'Handover, documentation and team enablement — you own the outcome.' },
            ].map((s) => (
              <div key={s.n} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-soft transition-all">
                <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
                <div className="mt-3 font-semibold text-lg">{s.t}</div>
                <p className="mt-2 text-text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Technologies</span>
            <h2 className="mt-4 section-title text-white">
              Tools we reach for — chosen <span className="text-gradient">deliberately</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {technologies.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full glass text-slate-200 text-sm hover:border-cyan/40 hover:text-cyan transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Extra pillar */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-cyan w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-5">
              <SecurityIcon className="w-8 h-8" />
            </div>
            <h2 className="section-title text-white">Security & compliance, <span className="text-gradient">built-in</span>.</h2>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              Threat modelling, secure-by-default infra, SOC 2 / HIPAA-ready patterns,
              and continuous scanning. We don't bolt security on at the end — it shapes the design.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 border border-white/10">
            <ul className="space-y-3">
              {['Zero-trust networking', 'Secret & key management', 'SBOM & dependency scanning', 'RBAC & audit logging', 'Compliance-ready controls'].map((f) => (
                <li key={f} className="flex items-start gap-3 text-slate-200">
                  <svg className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
