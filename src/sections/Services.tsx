import { motion } from 'framer-motion';
import { Instagram, FileText, Palette, Video, User, MessageSquare } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const services = [
  { icon: Instagram, title: 'Instagram SMM', desc: 'Повне ведення профілю: контент, сторіс, взаємодія з аудиторією.' },
  { icon: FileText, title: 'Контент-стратегія', desc: 'Розробка плану публікацій, який продає та будує довіру.' },
  { icon: Palette, title: 'Візуальне оформлення', desc: 'Стильний та впізнаваний візуал, який виділяє бренд.' },
  { icon: Video, title: 'Reels та відео', desc: 'Зйомка та монтаж Reels, які набирають охоплення та залучають підписників.' },
  { icon: User, title: 'Особистий бренд', desc: 'Позиціонування експерта, який притягує клієнтів сам по собі.' },
  { icon: MessageSquare, title: 'Консультації', desc: 'Індивідуальні сесії для вирішення конкретних задач у SMM.' },
];

export function Services() {
  return (
    <section className="relative w-full bg-bg px-6 py-24 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">ПОСЛУГИ</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary">
            Комплексний підхід до розвитку особистого бренду та бізнесу в соціальних мережах.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group h-full rounded-[30px] bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-dark">{service.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{service.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
