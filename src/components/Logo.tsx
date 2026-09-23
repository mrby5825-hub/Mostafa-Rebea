import { PERSONAL } from '@/constants/data';

/**
 * Minimal MR monogram logo — white type with a cyan accent, built from
 * the person's initials in PERSONAL.name. Swap `showFullName` off to
 * render the monogram badge only (used in the mobile navbar).
 */
export function Logo({ showFullName = true }: { showFullName?: boolean }) {
  const initials = PERSONAL.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <a
      href="#home"
      aria-label={`${PERSONAL.name} — home`}
      className="flex items-center gap-2.5"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 font-display text-sm font-semibold tracking-tight text-ink-100 shadow-glass">
        {initials}
        <span
          aria-hidden
          className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-signal shadow-glow-signal"
        />
      </span>
      {showFullName && (
        <span className="hidden font-display text-sm font-semibold tracking-tight text-ink-100 sm:inline">
          {PERSONAL.name.split(' ').slice(0, 2).join(' ')}
          <span className="text-signal">.</span>
        </span>
      )}
    </a>
  );
}
