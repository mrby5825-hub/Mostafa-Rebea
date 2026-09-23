import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RotatingTitlesProps {
  titles: string[];
  intervalMs?: number;
}

export function RotatingTitles({ titles, intervalMs = 2200 }: RotatingTitlesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (titles.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [titles.length, intervalMs]);

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-signal"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
