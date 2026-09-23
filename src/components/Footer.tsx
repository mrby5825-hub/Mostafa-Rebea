import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Logo } from './Logo';
import { NAV_LINKS, PERSONAL, SOCIAL_LINKS } from '@/constants/data';

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  whatsapp: FiMail,
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-ink-500">
            Data Analyst &amp; Power BI Developer turning raw datasets into decisions —
            based in {PERSONAL.location}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.icon === 'mail' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-colors hover:border-signal/60 hover:text-signal"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <nav
          aria-label="Quick navigation"
          className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-ink-500 sm:grid-cols-1"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="transition-colors hover:text-signal">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container-page mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-ink-700 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.</p>
        <p>Built with React, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
