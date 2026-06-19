import { Instagram, MessageCircle, ArrowRight, TrendingUp, FileText, Video, User } from 'lucide-react';
import { FloatingBlob } from '../components/FloatingBlob';

const services = [
  { icon: Instagram, label: 'Instagram SMM' },
  { icon: FileText, label: 'Контент-стратегія' },
  { icon: Video, label: 'Reels' },
  { icon: User, label: 'Особистий бренд' },
];

interface HeroProps {
  onOpenBooking: () => void;
}

const tgUser = '@svrnss';

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg px-6 py-20 md:px-10 lg:px-16 xl:px-24" aria-label="Головна">
      <FloatingBlob className="top-20 -left-20" size={400} color="rgba(255, 180, 106, 0.12)" delay={0} />
      <FloatingBlob className="top-60 right-0" size={350} color="rgba(255, 180, 106, 0.10)" delay={2} duration={10} />
      <FloatingBlob className="bottom-20 left-1/3" size={300} color="rgba(255, 156, 66, 0.08)" delay={1} duration={9} />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:gap-8">
        <div className="flex flex-1 flex-col items-start">
          <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-5 py-2 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              SMM SPECIALIST | UKRAINE
            </span>
          </div>

          <h1
            className="animate-fade-up mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-dark md:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.32s' }}
          >
            КОНТЕНТ, ЩО
            <br />
            ПЕРЕТВОРЮЄ
            <br />
            <span className="text-primary">ПІДПИСНИКІВ НА ПОКУПЦІВ</span>
          </h1>

          <p
            className="animate-fade-up mb-10 max-w-lg text-base leading-relaxed text-secondary md:text-lg"
            style={{ animationDelay: '0.44s' }}
          >
            Допомагаю бізнесу, експертам та особистим брендам залучати клієнтів через контент, стратегію та сучасний SMM.
          </p>

          <div className="animate-fade-up mb-12 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.56s' }}>
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 rounded-full bg-dark px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:bg-dark/90 active:scale-[0.98]"
              aria-label="Обговорити проєкт"
            >
              Обговорити проєкт
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

          <div className="animate-fade-up flex flex-wrap gap-x-12 gap-y-4" style={{ animationDelay: '0.68s' }}>
            {[
              { num: '50+', label: 'Проєктів' },
              { num: '3+', label: 'Роки досвіду' },
              { num: '100%', label: 'Індивідуальний підхід' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-dark">{stat.num}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative flex flex-1 items-center justify-center"
          style={{ animation: 'fade-up 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) 0.4s forwards', opacity: 0 }}
        >
          <div
            className="absolute -top-10 -right-10 h-32 w-32 rounded-full border border-primary/20"
            style={{ animation: 'spin 40s linear infinite' }}
          />
          <div
            className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-primary/10"
            style={{ animation: 'float 5s ease-in-out infinite' }}
          />
          <div
            className="absolute top-1/2 -right-8 h-14 w-14 rounded-full border-2 border-primary/30"
            style={{ animation: 'float 4s ease-in-out infinite 1s' }}
          />

          <div className="relative w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl shadow-dark/5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-dark">Панель послуг</h3>
                <p className="text-sm text-secondary">SMM-студія</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div className="space-y-3">
              {services.map((service, i) => (
                <div
                  key={service.label}
                  className="flex cursor-default items-center gap-4 rounded-2xl bg-bg p-4 transition-all hover:translate-x-1 hover:bg-primary/5"
                  style={{ animation: `fade-up 0.5s ease-out ${0.6 + i * 0.1}s forwards`, opacity: 0 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-dark">{service.label}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-5"
              style={{ animation: 'fade-up 0.6s ease-out 1.1s forwards', opacity: 0 }}
            >
              <p className="text-center text-sm font-medium leading-relaxed text-dark">
                Без шаблонів.
                <br />
                Без води.
                <br />
                <span className="font-bold text-primary">Тільки стратегія та результат.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
