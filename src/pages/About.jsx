import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const values = [
  { t: 'Craft', d: 'We sweat the details — in code, UX, and communication.' },
  { t: 'Ownership', d: 'We treat client problems as our own. No finger-pointing, ever.' },
  { t: 'Clarity', d: 'Honest timelines, honest trade-offs, honest status.' },
  { t: 'Compounding', d: 'Every engagement should leave your team sharper than we found it.' },
];

const team = [
  { name: 'A.', role: 'Founder & Principal Engineer', bio: 'Full-stack & AI systems. Ships pragmatic solutions to hard problems.', initials: 'MA' },
  { name: 'AI Lead', role: 'Head of Machine Learning', bio: 'LLM systems, computer vision, and applied ML at production scale.', initials: 'AI' },
  { name: 'Cloud Lead', role: 'Head of Platform', bio: 'Cloud architecture, DevOps and reliability engineering.', initials: 'CL' },
  { name: 'Design Lead', role: 'Head of Product Design', bio: 'Product systems thinking with an obsession for craft.', initials: 'DL' },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="eyebrow">About Centricon</motion.span>
            <motion.h1 variants={fadeUp} className="mt-5 font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              A small team with a <span className="text-gradient">large surface area</span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-300 leading-relaxed">
              Centricon is an AI & software studio. We partner with founders and engineering
              leaders to design, build and operate the systems that move their business forward.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface text-text-dark">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow-dark">Our mission</span>
            <h2 className="mt-4 section-title">Turn frontier tech into <span className="text-gradient">durable business value</span>.</h2>
          </div>
          <div className="space-y-5 text-text-muted text-lg leading-relaxed">
            <p>
              The gap between "interesting technology" and "reliable, revenue-generating product"
              is where most teams lose months. We close it.
            </p>
            <p>
              We pair strong engineering with strong product thinking. Every system we ship is
              designed to be observable, maintainable, and legible to the team taking it over.
            </p>
            <p>
              We deliberately stay small. Senior engineers, senior outcomes, no middle layer.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Values</span>
            <h2 className="mt-4 section-title text-white">Principles that <span className="text-gradient">shape the work</span>.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="p-6 rounded-2xl glass hover:border-cyan/30 transition-colors"
              >
                <div className="font-display text-xl font-semibold text-white">{v.t}</div>
                <p className="mt-2 text-slate-400 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Team</span>
            <h2 className="mt-4 section-title text-white">Senior by default.</h2>
            <p className="mt-4 text-slate-400 text-lg">
              A focused group of engineers, designers and strategists who've built at
              startups and enterprises alike.
            </p>
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl glass hover:border-cyan/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-brand-blue flex items-center justify-center font-display font-bold text-navy-deep text-lg">
                  {m.initials}
                </div>
                <div className="mt-5 font-display text-lg font-semibold text-white">{m.name}</div>
                <div className="text-cyan text-sm font-medium">{m.role}</div>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['50+', 'Products shipped'],
            ['10+', 'Years combined'],
            ['4★', 'Avg NPS feedback'],
            ['99.9%', 'Production uptime'],
          ].map(([n, l]) => (
            <div key={l} className="text-center p-6 rounded-2xl glass">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{n}</div>
              <div className="mt-2 text-slate-300 text-sm">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy-deep text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="section-title text-white">Let's build something <span className="text-gradient">worth shipping</span>.</h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Get in touch</Link>
            <Link to="/portfolio" className="btn-ghost">See our work</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
