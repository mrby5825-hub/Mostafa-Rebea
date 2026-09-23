import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { PROJECT_LINKS } from '@/constants/links';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  const projectUrl = project ? PROJECT_LINKS[project.githubKey] : '';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop — same dark theme as the rest of the site, not an external page */}
          <motion.div
            className="absolute inset-0 bg-base-950/95"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Near-fullscreen panel — reads as its own page, not a small popup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative z-10 h-[96vh] w-full max-w-5xl overflow-y-auto bg-base-900/98 p-6 sm:p-10 lg:p-14"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="sticky left-full top-0 z-20 -mt-2 -mr-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-base-950/80 text-ink-100 hover:text-signal sm:-mt-4 sm:-mr-4"
            >
              <FiX size={16} />
            </button>

            <div className="-mt-9 flex flex-wrap gap-1.5 sm:-mt-11">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-signal"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-2xl text-ink-500">{project.tagline}</p>

            {/* Project images — case-study gallery */}
            {project.gallery.length > 0 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {project.gallery.map((img) => (
                  <figure key={img.src} className="overflow-hidden rounded-xl border border-white/10">
                    <img src={img.src} alt={img.caption} loading="lazy" className="w-full object-cover" />
                    <figcaption className="bg-base-800/60 px-3 py-2 text-xs text-ink-500">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

            {/* The problem */}
            <div className="mt-8">
              <h4 className="eyebrow">The Problem</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {project.businessProblem}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="eyebrow">My Role</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.role}</p>
            </div>

            {/* What I did — step by step */}
            <div className="mt-6">
              <h4 className="eyebrow">Roadmap — What I Did, Step by Step</h4>
              <ol className="mt-3 space-y-2">
                {project.roadmap.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-signal/10 font-mono text-[10px] text-signal">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6">
              <h4 className="eyebrow">Dataset</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.dataset}</p>
            </div>

            <div className="mt-6">
              <h4 className="eyebrow">Tools</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-ink-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="eyebrow">What I Found</h4>
              <ul className="mt-3 space-y-2">
                {project.insights.map((insight) => (
                  <li key={insight} className="flex gap-2 text-sm leading-relaxed text-ink-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            {/* The result */}
            <div className="mt-6">
              <h4 className="eyebrow">The Result</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.impact}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 pb-4">
              {projectUrl && (
                <a href={projectUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                  <FiGithub size={15} /> View on GitHub
                </a>
              )}
              <a href="#contact" onClick={onClose} className="btn-primary">
                Discuss this project <FiExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
