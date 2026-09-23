import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { TimelineItem } from '@/components/TimelineItem';
import { staggerContainer } from '@/animations/variants';
import { EXPERIENCE } from '@/constants/data';

export function Experience() {
  return (
    <section id="experience" className="container-page scroll-mt-24 py-16 sm:scroll-mt-28">
      <SectionHeading
        eyebrow="Track record"
        title="Experience"
        description="Independent projects, applied research, and government-backed training — in chronological order."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-3xl"
      >
        {EXPERIENCE.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.role}
            subtitle={`${item.organization} · ${item.location}`}
            period={item.period}
            bullets={item.bullets}
            isLast={index === EXPERIENCE.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
