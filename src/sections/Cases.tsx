import { Heart, MessageCircle, Bookmark, TrendingUp, Target, Users, BarChart3, Star, Instagram, Globe, Phone } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const topCase = {
  brand: 'Eden Resort',
  tagline: 'Заміський комплекс на Київському морі',
  description: 'Boutique hotel на березі Київського моря в с. Ясногородка. 60 номерів, відкритий басейн з підігрівом, фінська та японська сауни, ресторан, піщаний пляж, конференц-зал. Комплексне SMM-просування + таргетована реклама.',
  metric: '+320%',
  metricLabel: 'охоплення',
  likes: '15.2K',
  comments: '486',
  results: [
    { icon: Users, value: '8 500+', label: 'підписників' },
    { icon: BarChart3, value: '320%', label: 'охоплення' },
    { icon: Target, value: '200+', label: 'бронювань' },
  ],
  image: 'bg-gradient-to-br from-emerald-200 via-teal-100 to-sky-50',
  links: [
    { icon: Instagram, href: 'https://www.instagram.com/ganedenresort/', label: 'ganedenresort' },
    { icon: Globe, href: 'https://www.edenresort.com.ua/', label: 'edenresort.com.ua' },
    { icon: Phone, href: 'tel:+380677144133', label: '+38 (067) 714-41-33' },
  ],
};

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] transition-all hover:scale-[1.02] hover:-translate-y-1.5 lg:max-w-[420px]">
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
                <TrendingUp className="mx-auto mb-3 h-14 w-14 text-primary" aria-hidden="true" />
                <span className="text-3xl font-extrabold text-dark">{topCase.metric}</span>
                <div className="text-sm text-secondary">{topCase.metricLabel}</div>
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
              <div className="flex gap-4">
                <Heart className="h-6 w-6 text-dark" aria-hidden="true" />
                <MessageCircle className="h-6 w-6 text-dark" aria-hidden="true" />
              </div>
              <Bookmark className="h-6 w-6 text-dark" aria-hidden="true" />
            </div>
            <div className="mt-2 px-1 text-xs font-semibold text-dark">{topCase.likes} likes</div>
            <div className="px-1 text-[11px] text-secondary">View all {topCase.comments} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Cases() {
  return (
    <section className="relative w-full overflow-hidden bg-bg px-6 py-28 md:px-12 lg:px-20 xl:px-28" aria-label="Кейси">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-primary/10 px-6 py-2.5">
            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
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

              <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {topCase.results.map((r, i) => (
                  <div
                    key={r.label}
                    className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-dark/5"
                    style={{ animation: `fade-up 0.5s ease-out ${0.3 + i * 0.12}s forwards`, opacity: 0 }}
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                      <r.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xl font-extrabold text-dark md:text-2xl">{r.value}</div>
                    <div className="text-sm text-secondary">{r.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {topCase.links.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-5 py-2.5 text-sm font-medium text-dark shadow-sm transition-all hover:scale-[1.04] hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                    style={{ animation: `fade-up 0.4s ease-out ${0.6 + i * 0.08}s forwards`, opacity: 0 }}
                  >
                    <link.icon className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
