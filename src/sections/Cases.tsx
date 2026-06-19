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
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto w-full max-w-[300px]"
    >
      <div className="relative overflow-hidden rounded-[40px] bg-dark p-2 shadow-2xl shadow-dark/20">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-dark" />
        <div className="relative overflow-hidden rounded-[32px] bg-white">
          <div className="flex items-center justify-between px-6 pt-3 pb-1">
            <span className="text-[10px] font-semibold text-dark">9:41</span>
            <div className="flex gap-1">
              <div className="h-2.5 w-2.5 rounded-full bg-dark/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-dark/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-dark/20" />
            </div>
          </div>
          <div className="px-3 pb-4">
            <div className="mb-2 flex items-center gap-2 px-1">
              <div className={`h-8 w-8 rounded-full ${topCase.image}`} />
              <div>
                <div className="text-[11px] font-semibold text-dark">{topCase.brand}</div>
                <div className="text-[9px] text-secondary">Sponsored</div>
              </div>
            </div>
            <div className={`mb-2 aspect-square w-full rounded-xl ${topCase.image} flex items-center justify-center`}>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 h-10 w-10 text-primary" />
                <span className="text-2xl font-extrabold text-dark">{topCase.metric}</span>
                <div className="text-xs text-secondary">{topCase.metricLabel}</div>
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
              <div className="flex gap-3">
                <Heart className="h-5 w-5 text-dark" />
                <MessageCircle className="h-5 w-5 text-dark" />
              </div>
              <Bookmark className="h-5 w-5 text-dark" />
            </div>
            <div className="mt-1 px-1 text-[11px] font-semibold text-dark">{topCase.likes} likes</div>
            <div className="px-1 text-[10px] text-secondary">View all {topCase.comments} comments</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Cases() {
  return (
    <section className="relative w-full overflow-hidden bg-bg px-6 py-24 lg:px-16 xl:px-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection className="mb-12 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2"
          >
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Топ-кейс</span>
          </motion.div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            НАЙКРАЩИЙ РЕЗУЛЬТАТ
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary">
            Реальний кейс, який показує, як ми працюємо.
          </p>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          {/* Left — phone */}
          <AnimatedSection className="flex-shrink-0" delay={0.1}>
            <PhoneMockup />
          </AnimatedSection>

          {/* Right — info */}
          <AnimatedSection className="flex flex-1 flex-col justify-center" delay={0.2}>
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary"
              >
                {topCase.tagline}
              </motion.div>

              <h3 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-dark md:text-4xl">
                {topCase.brand}
              </h3>

              <p className="mb-10 text-base leading-relaxed text-secondary md:text-lg">
                {topCase.description}
              </p>

              <div className="mb-10 grid grid-cols-3 gap-4">
                {topCase.results.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="rounded-2xl bg-white p-4 text-center shadow-lg shadow-dark/5"
                  >
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <r.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-lg font-extrabold text-dark">{r.value}</div>
                    <div className="text-xs text-secondary">{r.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03, x: 4 }}
                className="group inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                Подивитись кейс повністю
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
