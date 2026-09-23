import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/variants';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
  isLast?: boolean;
}

export function TimelineItem({ title, subtitle, period, bullets, isLast }: TimelineItemProps) {
  return (
    <motion.div variants={fadeUp} className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
        <span className="h-2.5 w-2.5 rounded-full bg-signal shadow-glow-signal" />
      </span>
      {!isLast && <span className="absolute left-[7px] top-6 h-full w-px bg-white/10" />}

      <div className="glass-panel mb-8 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <span className="font-mono text-xs text-signal">{period}</span>
        </div>
        <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal/70" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
