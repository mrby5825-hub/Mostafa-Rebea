import { motion } from 'framer-motion';
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiPieChart,
  FiTool,
  FiTrendingUp,
  FiBarChart2,
} from 'react-icons/fi';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';
import { staggerContainer } from '@/animations/variants';
import { SKILLS } from '@/constants/data';
import type { SkillCategory } from '@/types';

const CATEGORY_ORDER: SkillCategory[] = [
  'Programming',
  'Business Intelligence',
  'Machine Learning',
  'Visualization',
  'Business Analytics',
  'Databases',
  'Cloud',
  'Tools',
];

const CATEGORY_DESCRIPTIONS: Record<SkillCategory, string> = {
  Programming: 'Core programming and query languages used across every project.',
  'Business Intelligence': 'Dashboarding, modeling, and business-intelligence workflow.',
  'Machine Learning': 'Model building and data manipulation with Python.',
  Visualization: 'Charting and visual analysis libraries.',
  'Business Analytics': 'Statistical analysis and survey/experiment tooling.',
  Databases: 'Relational databases used for storage and querying.',
  Cloud: 'Cloud platforms used for data and ML workflows.',
  Tools: 'The day-to-day environment and analysis toolkit.',
};

const CATEGORY_ICONS: Record<SkillCategory, typeof FiCode> = {
  Programming: FiCode,
  'Business Intelligence': FiBarChart2,
  'Machine Learning': FiCpu,
  Visualization: FiPieChart,
  'Business Analytics': FiTrendingUp,
  Databases: FiDatabase,
  Cloud: FiCloud,
  Tools: FiTool,
};

export function Skills() {
  return (
    <section id="skills" className="container-page scroll-mt-24 py-16 sm:scroll-mt-28">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills"
        description="A categorized look at the languages, BI tools, ML libraries, and platforms I work with."
      />

      <div className="space-y-14">
        {CATEGORY_ORDER.map((category) => {
          const items = SKILLS.filter((skill) => skill.category === category);
          if (items.length === 0) return null;
          const Icon = CATEGORY_ICONS[category];

          return (
            <div key={category}>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <Icon size={16} />
                </span>
                <h3 className="font-display text-lg font-semibold">{category}</h3>
              </div>
              <p className="mt-1 pl-12 text-sm text-ink-500">
                {CATEGORY_DESCRIPTIONS[category]}
              </p>
              <motion.div
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              >
                {items.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
