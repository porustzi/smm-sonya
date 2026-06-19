import { ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { FloatingBlob } from '../components/FloatingBlob';
import { BookingForm } from '../components/BookingForm';

const tgUser = '@svrnss';

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
          <div className="mx-auto max-w-lg">
            <BookingForm />
            <div className="mt-4 text-center">
              <a
                href={`https://t.me/${tgUser.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {tgUser}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
