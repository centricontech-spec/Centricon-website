import { motion } from 'framer-motion';
import { useState } from 'react';

const CONTACT = {
  email: 'centricon.tech@gmail.com',
  phone: '+92 343 3021725',
  phoneHref: 'tel:+923433021725',
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', company: '', budget: '', subject: '', message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `New project inquiry from ${form.name}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      form.budget ? `Budget: ${form.budget}` : null,
      '',
      'Message:',
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setStatus('opened');
  };

  const info = [
    {
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      ),
    },
    {
      label: 'Phone',
      value: CONTACT.phone,
      href: CONTACT.phoneHref,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      ),
    },
    {
      label: 'Response',
      value: 'Within 24 hours, every weekday',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      ),
    },
  ];

  const inputClass = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan/60 focus:bg-white/10 transition-all';

  return (
    <div>
      <section className="relative pt-40 pb-16 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="eyebrow">Contact</motion.span>
            <motion.h1 variants={fadeUp} className="mt-5 font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              Tell us what you're <span className="text-gradient">building</span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-300 leading-relaxed">
              Send us a short brief and we'll reply within one business day with next steps —
              or an honest "not us".
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <motion.h2 variants={fadeUp} className="font-display text-2xl md:text-3xl font-bold text-white">Start a conversation</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-slate-400">
              Fill this in and we'll open your email client with the details — delivered to <span className="text-cyan">{CONTACT.email}</span>.
            </motion.p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                <input required type="text" name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Budget range</label>
                <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                  <option value="" className="bg-navy-deep">Select...</option>
                  <option value="< $10k" className="bg-navy-deep">Under $10k</option>
                  <option value="$10k – $50k" className="bg-navy-deep">$10k – $50k</option>
                  <option value="$50k – $150k" className="bg-navy-deep">$50k – $150k</option>
                  <option value="$150k+" className="bg-navy-deep">$150k+</option>
                  <option value="Not sure yet" className="bg-navy-deep">Not sure yet</option>
                </select>
              </motion.div>
              <motion.div variants={fadeUp} className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject *</label>
                <input required type="text" name="subject" value={form.subject} onChange={handleChange} className={inputClass} placeholder="e.g. AI copilot for our support workflow" />
              </motion.div>
              <motion.div variants={fadeUp} className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Project details *</label>
                <textarea required name="message" rows="6" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="What are you trying to build? What's the timeline? Any specific constraints?" />
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary">
                Send Message
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="text-xs text-slate-500">
                Submitting opens your email client with the message pre-filled.
              </p>
            </motion.div>

            {status === 'opened' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl border border-cyan/30 bg-cyan/10 text-cyan-soft text-sm"
              >
                Your email client should have opened. If not, email us directly at{' '}
                <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>.
              </motion.div>
            )}
          </motion.form>

          {/* Side info */}
          <motion.aside
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="lg:col-span-2 space-y-5"
          >
            <motion.div variants={fadeUp} className="glass rounded-3xl p-8 border border-white/10">
              <h3 className="font-display text-xl font-semibold text-white mb-6">Reach us directly</h3>
              <ul className="space-y-5">
                {info.map((i) => (
                  <li key={i.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan flex items-center justify-center flex-shrink-0">
                      {i.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{i.label}</div>
                      {i.href ? (
                        <a href={i.href} className="text-white font-medium hover:text-cyan transition-colors">{i.value}</a>
                      ) : (
                        <div className="text-white font-medium">{i.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan/15 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-xl font-semibold text-white">What happens next?</h3>
                <ol className="mt-5 space-y-4 text-slate-300 text-sm">
                  {[
                    'We read your brief within one business day.',
                    'A senior engineer replies with questions or a 30-min intro call.',
                    'If it is a fit, we scope a lightweight engagement — no fluff.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-cyan/15 border border-cyan/30 text-cyan text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
