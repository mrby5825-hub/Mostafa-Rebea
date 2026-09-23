import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, staggerContainer } from '@/animations/variants';
import { EDUCATION, PERSONAL } from '@/constants/data';

export function About() {
  return (
    <section id="about" className="container-page scroll-mt-24 py-16 sm:scroll-mt-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:sticky lg:top-32"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            About
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-3 text-3xl font-semibold sm:text-4xl">
            The story behind the dashboards
          </motion.h1>
          <motion.div variants={fadeUp} className="glass-panel mt-6 overflow-hidden">
            <img
              src={PERSONAL.profileImage}
              alt={PERSONAL.name}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </motion.div>
          <motion.a
            variants={fadeUp}
            href={PERSONAL.cvPath}
            download
            className="btn-primary mt-6 w-full"
          >
            Download CV <FiDownload size={16} />
          </motion.a>
        </motion.div>

        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            {PERSONAL.summary}
          </motion.p>

          <div className="mt-14">
            <SectionHeading eyebrow="Education" title="Academic background" />
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {EDUCATION.map((edu) => (
                <motion.div key={edu.id} variants={fadeUp} className="glass-panel p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
                    <span className="font-mono text-xs text-signal">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-500">{edu.school}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{edu.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
