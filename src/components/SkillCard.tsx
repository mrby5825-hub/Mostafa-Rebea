import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/variants';

export function SkillCard({ name }: { name: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass-panel flex items-center justify-center px-4 py-3.5 text-center transition-colors duration-300 hover:border-signal/50"
    >
      <p className="font-display text-sm font-medium">{name}</p>
    </motion.div>
  );
}
