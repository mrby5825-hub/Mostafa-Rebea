import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { fadeUp } from '@/animations/variants';
import type { CertificateItem } from '@/types';

interface CertificateCardProps {
  certificate: CertificateItem;
  onOpen: (certificate: CertificateItem) => void;
}

export function CertificateCard({ certificate, onOpen }: CertificateCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass-panel group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <button
        type="button"
        onClick={() => onOpen(certificate)}
        className="aspect-[4/3] w-full overflow-hidden text-left"
        aria-label={`Open certificate: ${certificate.title}`}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <FiAward className="text-signal" size={18} />
        <h3 className="font-display text-sm font-semibold leading-snug">
          {certificate.title}
        </h3>
        {certificate.issuer && <p className="text-xs text-ink-500">{certificate.issuer}</p>}
        {certificate.date && <p className="font-mono text-[11px] text-ink-700">{certificate.date}</p>}

        {(certificate.credentialUrl || certificate.verifyUrl) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-100 transition-colors hover:border-signal/60 hover:text-signal"
              >
                Credential <FiExternalLink size={12} />
              </a>
            )}
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-100 transition-colors hover:border-signal/60 hover:text-signal"
              >
                Verify <FiCheckCircle size={12} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
