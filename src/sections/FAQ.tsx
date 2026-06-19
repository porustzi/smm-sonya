import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const faqs = [
  {
    q: 'Скільки коштує SMM?',
    a: 'Вартість залежить від обсягу робіт: від базового ведення профілю до повного комплексу зі стратегією, контентом та рекламою. Після короткої зустрічі я підготую індивідуальну пропозицію під ваші цілі та бюджет.',
  },
  {
    q: 'Які результати можна очікувати?',
    a: 'Результати залежать від ніші та стартової точки. Зазвичай перші позитивні зміни видно через 2–4 тижні: зростання охоплення, активності та заявок. Через 2–3 місяці — стабільний приплив клієнтів.',
  },
  {
    q: 'Скільки часу займає запуск?',
    a: 'Після підписання договору запуск займає 3–5 робочих днів. За цей час я проводжу аналіз, розробляю стратегію та готую перший пакет контенту.',
  },
  {
    q: 'Чи працюєте з особистими брендами?',
    a: 'Так, особисті бренди — один із моїх основних напрямків. Допомагаю експертам, коучам та інфлюенсерам побудувати впізнаваність та монетизувати аудиторію.',
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-[24px] bg-card shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-8 py-6 text-left"
      >
        <span className="text-base font-semibold text-dark">{item.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 text-secondary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6 text-sm leading-relaxed text-secondary">{item.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="relative w-full bg-bg px-6 py-24 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">FAQ</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary">
            Відповіді на найпоширеніші запитання.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
