import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiPhone,
} from 'react-icons/fi';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, staggerContainer } from '@/animations/variants';
import { PERSONAL } from '@/constants/data';
import { SOCIALS } from '@/constants/links';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(SOCIALS.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, the number is shown on screen anyway.
    }
  };

  return (
    <section id="contact" className="container-page scroll-mt-24 py-16 sm:scroll-mt-28">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's talk about your data"
        description="Open to data analytics, BI development, and machine-learning collaborations."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-2xl gap-4"
      >
        <motion.a
          variants={fadeUp}
          href={`mailto:${SOCIALS.email}`}
          className="glass-panel flex items-center gap-4 p-5 transition-colors hover:border-signal/50"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10 text-signal">
            <FiMail size={18} />
          </span>
          <div>
            <p className="text-sm text-ink-500">Email</p>
            <p className="font-display text-sm font-medium">{PERSONAL.email}</p>
          </div>
        </motion.a>

        <motion.a
          variants={fadeUp}
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noreferrer"
          className="glass-panel flex items-center gap-4 p-5 transition-colors hover:border-signal/50"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10 text-signal">
            <FiLinkedin size={18} />
          </span>
          <div>
            <p className="text-sm text-ink-500">LinkedIn</p>
            <p className="font-display text-sm font-medium">/in/mostafa-rebea</p>
          </div>
        </motion.a>

        <motion.a
          variants={fadeUp}
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          className="glass-panel flex items-center gap-4 p-5 transition-colors hover:border-signal/50"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10 text-signal">
            <FiGithub size={18} />
          </span>
          <div>
            <p className="text-sm text-ink-500">GitHub</p>
            <p className="font-display text-sm font-medium">mrby5825-hub</p>
          </div>
        </motion.a>

        <motion.div variants={fadeUp} className="glass-panel p-5">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10 text-signal">
              <FiMessageCircle size={18} />
            </span>
            <div>
              <p className="text-sm text-ink-500">WhatsApp</p>
              <p className="font-display text-sm font-medium">{PERSONAL.phone}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`https://wa.me/${SOCIALS.whatsappDigits}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-ink-100 transition-colors hover:border-signal/60 hover:text-signal"
            >
              <FiMessageCircle size={13} /> Open WhatsApp
            </a>
            <a
              href={`https://wa.me/${SOCIALS.whatsappDigits}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-ink-100 transition-colors hover:border-signal/60 hover:text-signal"
            >
              <FiMessageCircle size={13} /> WhatsApp Chat
            </a>
            <a
              href={`tel:+${SOCIALS.whatsappDigits}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-ink-100 transition-colors hover:border-signal/60 hover:text-signal"
            >
              <FiPhone size={13} /> Call
            </a>
            <button
              type="button"
              onClick={handleCopyNumber}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-ink-100 transition-colors hover:border-signal/60 hover:text-signal"
            >
              {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
              {copied ? 'Copied' : 'Copy Number'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}