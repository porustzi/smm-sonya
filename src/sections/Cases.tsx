import { motion } from 'framer-motion';
import { Heart, MessageCircle, Bookmark, TrendingUp, Target, Users, BarChart3, Star, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const topCase = {
  brand: 'Beauty Studio',
  tagline: 'Салон краси Ella Beauty',
  description: 'Повний ребрендинг + SMM-стратегія. За 3 місяці вивели акаунт із 800 до 15 000 підписників і заповнили запис на 2 тижні вперед.',
  metric: '+320%',
  metricLabel: 'охоплення',
  likes: '12.4K',
  comments: '342',
  results: [
    { icon: Users, value: '15 000+', label: 'підписників' },
    { icon: BarChart3, value: '320%', label: 'охоплення' },
    { icon: Target, value: '100+', label: 'записів' },
  ],
  image: 'bg-gradient-to-br from-rose-200 via-rose-100 to-orange-50',
};

function PhoneMockup() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
    >
      <div className="relative overflow-hidden rounded-[48px] bg-dark p-3 shadow-2xl shadow-dark/20">
        <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-dark" />
        <div className="relative overflow-hidden rounded-[36px] bg-white">
          <div className="flex items-center justify-between px-8 pt-4 pb-2">
            <span className="text-xs font-semibold text-dark">9:41</span>
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-dark/20" />
              <div className="h-3 w-3 rounded-full bg-dark/20" />
              <div className="h-3 w-3 rounded-full bg-dark/20" />
            </div>
          </div>
          <div className="px-5 pb-5">
            <div className="mb-3 flex items-center gap-3 px-1">
              <div className={`h-10 w-10 rounded-full ${topCase.image}`} />
              <div>
                <div className="text-sm font-semibold text-dark">{topCase.brand}</div>
                <div className="text-[10px] text-secondary">Sponsored</div>
              </div>
            </div>
            <div className={`mb-3 aspect-square w-full rounded-2xl ${topCase.image} flex items-center justify-center`}>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-3 h-14 w-14 text-primary" />
                <span className="text-3xl font-extrabold text-dark">{topCase.metric}</span>
                <div className="text-sm text-secondary">{topCase.metricLabel}</div>
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
              <div className="flex gap-4">
                <Heart className="h-6 w-6 text-dark" />
                <MessageCircle className="h-6 w-6 text-dark" />
              </div>
              <Bookmark className="h-6 w-6 text-dark" />
            </div>
            <div className="mt-2 px-1 text-xs font-semibold text-dark">{topCase.likes} likes</div>
            <div className="px-1 text-[11px] text-secondary">View all {topCase.comments} comments</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Cases() {
  return (
    <section className="relative w-full overflow-hidden bg-bg px-6 py-28 lg:px-20 xl:px-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-primary/10 px-6 py-2.5">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-primary">Топ-кейс</span>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-dark md:text-5xl lg:text-6xl">
            НАЙКРАЩИЙ РЕЗУЛЬТАТ
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
            Реальний кейс, який показує, як ми працюємо.
          </p>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-stretch lg:gap-20">
          <AnimatedSection className="flex-shrink-0" delay={0.1}>
            <PhoneMockup />
          </AnimatedSection>

          <AnimatedSection className="flex flex-1 flex-col justify-center" delay={0.2}>
            <div className="max-w-2xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {topCase.tagline}
              </div>

              <h3 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-dark md:text-5xl">
                {topCase.brand}
              </h3>

              <p className="mb-12 text-lg leading-relaxed text-secondary md:text-xl">
                {topCase.description}
              </p>

              <div className="mb-12 grid grid-cols-3 gap-5">
                {topCase.results.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                    className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-dark/5"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <r.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xl font-extrabold text-dark md:text-2xl">{r.value}</div>
                    <div className="text-sm text-secondary">{r.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03, x: 4 }}
                className="group inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                Подивитись кейс повністю
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
