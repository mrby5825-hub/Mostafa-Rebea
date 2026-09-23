import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { Logo } from './Logo';
import { NAV_LINKS, PERSONAL } from '@/constants/data';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            'flex items-center justify-between rounded-full border border-white/10 bg-base-900/70 px-4 py-2.5 shadow-glass backdrop-blur-xl transition-colors sm:px-6',
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  'rounded-full px-4 py-2 font-body text-sm transition-colors',
                  activeId === link.id
                    ? 'bg-signal/10 text-signal'
                    : 'text-ink-300 hover:text-signal',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL.cvPath}
              download
              className="hidden items-center gap-2 rounded-full bg-signal px-4 py-2 font-display text-xs font-semibold text-base-950 transition-transform duration-300 hover:scale-[1.03] hover:shadow-glow-signal active:scale-[0.98] lg:inline-flex"
            >
              Download CV <FiDownload size={14} />
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-100 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="container-page mt-2 lg:hidden"
          >
            <div className="glass-panel flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm transition-colors',
                    activeId === link.id ? 'bg-signal/10 text-signal' : 'text-ink-300 hover:text-signal',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PERSONAL.cvPath}
                download
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-signal px-4 py-3 font-display text-sm font-semibold text-base-950"
              >
                Download CV <FiDownload size={14} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
