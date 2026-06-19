import { ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { FloatingBlob } from '../components/FloatingBlob';

interface ContactCTAProps {
  onOpenBooking: () => void;
}

const tgUser = '@svrnss';

export function ContactCTA({ onOpenBooking }: ContactCTAProps) {
  return (
    <section className="relative w-full overflow-hidden bg-bg px-6 py-24 md:px-12 lg:px-16 xl:px-24" aria-label="Контакти">
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
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 rounded-full bg-dark px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:bg-dark/90 active:scale-[0.98]"
              aria-label="Записатися на консультацію"
            >
              Записатися на консультацію
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href={`https://t.me/${tgUser.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-8 py-4 text-sm font-semibold text-dark transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:bg-secondary/5 active:scale-[0.98]"
              aria-label="Telegram @svrnss"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {tgUser}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
