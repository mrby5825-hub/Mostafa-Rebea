import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer } from '@/animations/variants';
import { PROJECTS } from '@/constants/data';
import { cn } from '@/utils/cn';
import type { Project, ProjectCategory } from '@/types';

const CATEGORIES: Array<ProjectCategory | 'All'> = [
  'All',
  'Power BI',
  'Python / ML',
  'Excel',
  'SQL',
];

// Shown up front before "View All Projects" is pressed.
const FEATURED_COUNT = 3;

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [category, setCategory] = useState<ProjectCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(
    () => PROJECTS.filter((p) => p.featured).slice(0, FEATURED_COUNT),
    [],
  );

  const filtered = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = category === 'All' || project.category.includes(category);
      const matchesQuery =
        query.trim().length === 0 ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.tools.some((tool) => tool.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section id="projects" className="container-page scroll-mt-24 py-16 sm:scroll-mt-28">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          description="Every dashboard, model, and pipeline listed here was built from a real dataset and a real business question."
        />

        {!showAll ? (
          <>
            {/* 3 projects up front */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="btn-secondary"
              >
                View All Projects ({PROJECTS.length})
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-xs font-medium transition-colors',
                      category === cat
                        ? 'border-signal/60 bg-signal/10 text-signal'
                        : 'border-white/10 text-ink-500 hover:text-signal',
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <label className="relative w-full sm:w-64">
                <FiSearch
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-700"
                  size={15}
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects or tools…"
                  aria-label="Search projects"
                  className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-ink-100 placeholder:text-ink-700 focus:border-signal/60"
                />
              </label>
            </div>

            {filtered.length === 0 ? (
              <div className="glass-panel p-10 text-center text-ink-500">
                No projects match that search yet — try another keyword or category.
              </div>
            ) : (
              <motion.div
                key={category + query}
                variants={staggerContainer(0.1)}
                initial="hidden"
                animate="show"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
                ))}
              </motion.div>
            )}

            <div className="mt-10 flex justify-center">
              <button type="button" onClick={() => setShowAll(false)} className="btn-secondary">
                Show Less
              </button>
            </div>
          </>
        )}
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
