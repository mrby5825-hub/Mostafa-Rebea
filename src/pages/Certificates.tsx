import { motion } from 'framer-motion';
import { useState } from 'react';
import { CertificateCard } from '@/components/CertificateCard';
import { CertificateModal } from '@/components/CertificateModal';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer } from '@/animations/variants';
import { ADDITIONAL_CERTIFICATES, CERTIFICATES } from '@/constants/data';
import type { CertificateItem } from '@/types';

export function Certificates() {
  const [active, setActive] = useState<CertificateItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section id="certificates" className="container-page scroll-mt-24 py-16 sm:scroll-mt-28">
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates"
          description="Formal training completed alongside hands-on project work — click any certificate for a closer look."
        />

        {/* 3 main certificates, always shown up front */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICATES.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} onOpen={setActive} />
          ))}
        </motion.div>

        {!showAll ? (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => setShowAll(true)} className="btn-secondary">
              View Additional Courses &amp; Training ({ADDITIONAL_CERTIFICATES.length})
            </button>
          </div>
        ) : (
          <div className="mt-12">
            <h3 className="font-display text-base font-semibold text-ink-300">
              Additional courses &amp; training
            </h3>
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {ADDITIONAL_CERTIFICATES.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} onOpen={setActive} />
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <button type="button" onClick={() => setShowAll(false)} className="btn-secondary">
                Show Less
              </button>
            </div>
          </div>
        )}
      </section>

      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </>
  );
}
