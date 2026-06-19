import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const steps = [
  { num: '01', icon: Search, title: 'Аналіз бізнесу', desc: 'Детально вивчаю ваш бізнес, аудиторію та конкурентів, щоб знайти точки зростання.' },
  { num: '02', icon: Lightbulb, title: 'Розробка стратегії', desc: 'Створюю індивідуальний план контенту та просування з чіткими цілями.' },
  { num: '03', icon: PenTool, title: 'Створення контенту', desc: 'Реалізую стратегію: пости, Reels, сторіс, візуал — усе під ключ.' },
  { num: '04', icon: Rocket, title: 'Просування та масштабування', desc: 'Оптимізую результати та масштабую успішні механіки для зростання.' },
];

export function Process() {
  return (
    <section className="relative w-full bg-bg px-6 py-24 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            ЯК ПРОХОДИТЬ РОБОТА
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary">
            Прозорий та зрозумілий процес від першої зустрічі до стабільних результатів.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-primary/20 md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className={`relative flex items-start gap-8 md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-0 hidden h-4 w-4 -translate-x-1.5 rounded-full border-4 border-bg bg-primary md:left-1/2 md:block md:-translate-x-2" />

                  {/* Card */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="inline-block rounded-[30px] bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                    >
                      <div className={`mb-4 flex items-center gap-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-primary">КРОК {step.num}</span>
                          <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-secondary">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
