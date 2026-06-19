import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { FloatingBlob } from '../components/FloatingBlob';

export function ContactCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-bg px-6 py-24 lg:px-16 xl:px-24">
      {/* Background gradient with blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      <FloatingBlob className="top-10 left-1/4" size={400} color="rgba(255, 180, 106, 0.12)" delay={0} duration={10} />
      <FloatingBlob className="bottom-10 right-1/4" size={350} color="rgba(255, 156, 66, 0.10)" delay={2} duration={12} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-dark md:text-5xl">
            ГОТОВІ ЗРОСТАТИ
            <br />
            В СОЦМЕРЕЖАХ?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            Обговоримо ваш бізнес, цілі та підберемо оптимальну стратегію просування.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 rounded-full bg-dark px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-colors hover:bg-dark/90"
            >
              Записатися на консультацію
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-8 py-4 text-sm font-semibold text-dark transition-colors hover:bg-secondary/5"
            >
              <MessageCircle className="h-4 w-4" />
              Telegram
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
