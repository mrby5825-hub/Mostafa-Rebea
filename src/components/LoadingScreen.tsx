import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-base-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 rounded-full border-2 border-signal/40" />
        <span className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-signal" />
        <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold text-signal">
          MR
        </span>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
        Compiling insights…
      </p>
    </motion.div>
  );
}
