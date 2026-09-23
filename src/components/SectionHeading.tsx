import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/variants';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={cn('mb-12 max-w-2xl', align === 'center' && 'mx-auto text-center')}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-500">{description}</p>
      )}
    </motion.div>
  );
}
