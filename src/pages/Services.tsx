import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer } from '@/animations/variants';
import { SERVICES } from '@/constants/data';

export function Services() {
  return (
    <section id="services" className="container-page scroll-mt-24 py-16 sm:scroll-mt-28">
      <SectionHeading
        eyebrow="What I do"
        title="Services"
        description="End-to-end Business Intelligence and data work, from raw source to a dashboard people actually use."
      />
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </motion.div>
    </section>
  );
}
