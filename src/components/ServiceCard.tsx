import { motion } from 'framer-motion';
import {
  FiActivity,
  FiBarChart2,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFilter,
  FiGrid,
  FiPieChart,
  FiRefreshCw,
  FiTrendingUp,
} from 'react-icons/fi';
import { fadeUp } from '@/animations/variants';
import type { ServiceItem } from '@/types';

const ICONS: Record<ServiceItem['icon'], typeof FiBarChart2> = {
  powerbi: FiBarChart2,
  bi: FiTrendingUp,
  sql: FiDatabase,
  python: FiCode,
  ml: FiCpu,
  automation: FiRefreshCw,
  cleaning: FiFilter,
  reporting: FiActivity,
  dashboard: FiGrid,
  visualization: FiPieChart,
};

export function ServiceCard({ title, description, icon }: ServiceItem) {
  const Icon = ICONS[icon];

  return (
    <motion.div
      variants={fadeUp}
      className="glass-panel group flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} />
      </span>
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.div>
  );
}
