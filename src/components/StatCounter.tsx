import { useCountUp } from '@/hooks/useCountUp';
import type { StatItem } from '@/types';

export function StatCounter({ label, value, suffix = '', prefix = '' }: StatItem) {
  const decimals = value % 1 !== 0 ? 2 : 0;
  const { value: animatedValue, ref } = useCountUp({ end: value, decimals });

  return (
    <div ref={ref} className="glass-panel px-6 py-7 text-center">
      <p className="font-mono text-3xl font-semibold text-signal sm:text-4xl">
        {prefix}
        {animatedValue.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-ink-500">{label}</p>
    </div>
  );
}
