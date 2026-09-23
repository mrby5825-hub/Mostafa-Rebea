import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { fadeUp } from '@/animations/variants';
import { PROJECT_LINKS } from '@/constants/links';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const githubUrl = PROJECT_LINKS[project.githubKey];

  return (
    <motion.article
      variants={fadeUp}
      className="group glass-panel flex flex-col overflow-hidden"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative aspect-[16/10] w-full overflow-hidden text-left"
        aria-label={`Open case study: ${project.title}`}
      >
        <img
          src={project.cover}
          alt={`${project.title} — dashboard preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950/90 via-base-950/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-base-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-signal backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-500">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-ink-500"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-signal transition-transform group-hover:translate-x-0.5"
          >
            Case study <FiArrowUpRight size={14} />
          </button>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-signal/60 hover:text-signal"
            >
              <FiGithub size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
