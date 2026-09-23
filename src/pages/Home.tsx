import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { RotatingTitles } from '@/components/RotatingTitles';
import { SectionHeading } from '@/components/SectionHeading';
import { StatCounter } from '@/components/StatCounter';
import { fadeUp, staggerContainer } from '@/animations/variants';
import { HERO_STATS, HERO_TITLES, PERSONAL, PROJECTS } from '@/constants/data';
import { SOCIALS } from '@/constants/links';
import type { Project } from '@/types';

export function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const rest = PROJECTS.filter((p) => !p.featured).slice(0, 2);
  const preview = [...featured, ...rest].slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section id="home" className="container-page relative scroll-mt-24 overflow-hidden pb-24 pt-6 sm:scroll-mt-28 sm:pt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        />

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Portfolio
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {PERSONAL.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-display text-lg font-medium text-ink-300 sm:text-xl"
            >
              <RotatingTitles titles={HERO_TITLES} />
            </motion.p>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              {PERSONAL.heroSummary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL.cvPath}
                download="Mostafa_Rebea_Ahmed_Resume.pdf"
                className="btn-primary"
              >
                Download CV <FiDownload size={16} />
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects <FiArrowRight size={16} />
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-signal/60 hover:text-signal"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-signal/60 hover:text-signal"
              >
                <FiLinkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image — replace assets/profile/mostafa.jpg with a new photo any time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative mx-auto aspect-square w-full max-w-sm animate-float">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-signal/25 blur-3xl"
              />
              <div className="glass-panel relative h-full w-full overflow-hidden rounded-full border-2 border-signal/40 p-2 shadow-glow-signal">
                {/* PROFILE IMAGE — replace the file at public/images/profile/mostafa.jpg to update this photo */}
                <img
                  src={PERSONAL.profileImage}
                  alt={PERSONAL.name}
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-page py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Dashboards & models built to be used, not just admired"
          description="A sample of end-to-end analytics work spanning Power BI, Python machine learning, and Excel."
        />
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {preview.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a href="#projects" className="btn-secondary">
            See all projects <FiArrowRight size={16} />
          </a>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
