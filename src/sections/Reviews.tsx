import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const reviews = [
  {
    name: 'Анна Коваль',
    niche: 'Beauty Studio',
    text: 'За 3 місяці роботи охоплення зросли на 320%. Клієнти пишуть самі — це справді працює. Дуже вдячна за професіоналізм та індивідуальний підхід.',
    initials: 'АК',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    name: 'Олег Петренко',
    niche: 'Fitness Coach',
    text: 'Професійна стратегія, чіткі терміни та відмінний результат. Заявки пішли вже на другому тижні співпраці. Рекомендую всім, хто хоче серйозно розвивати свій бренд.',
    initials: 'ОП',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Марія Сидоренко',
    niche: 'Online Boutique',
    text: 'Мій Instagram перетворився з простої сторінки на повноцінний канал продажів. Продажі зросли на 140%. Дуже задоволена співпрацею!',
    initials: 'МС',
    color: 'bg-sky-100 text-sky-600',
  },
];

export function Reviews() {
  return (
    <section className="relative w-full bg-bg px-6 py-24 md:px-12 lg:px-16 xl:px-24" aria-label="Відгуки">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">ВІДГУКИ</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary">
            Що кажуть клієнти про співпрацю.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="h-full rounded-[30px] bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>

                <p className="mb-8 text-sm leading-relaxed text-secondary">{review.text}</p>

                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${review.color}`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-bold text-dark">{review.name}</div>
                    <div className="text-xs text-secondary">{review.niche}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
