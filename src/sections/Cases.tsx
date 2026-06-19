import { motion } from 'framer-motion';
import { Heart, MessageCircle, Bookmark, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const cases = [
  { brand: 'Beauty Studio', metric: '+320%', metricLabel: 'охоплення', likes: '12.4K', comments: '342', image: 'bg-gradient-to-br from-rose-100 to-rose-50' },
  { brand: 'Fit Coach', metric: '+180', metricLabel: 'заявок', likes: '8.7K', comments: '198', image: 'bg-gradient-to-br from-emerald-100 to-emerald-50' },
  { brand: 'Online Store', metric: '+140%', metricLabel: 'продажів', likes: '15.2K', comments: '456', image: 'bg-gradient-to-br from-sky-100 to-sky-50' },
  { brand: 'Personal Brand', metric: '+12 000', metricLabel: 'підписників', likes: '21.8K', comments: '612', image: 'bg-gradient-to-br from-amber-100 to-amber-50' },
  { brand: 'Cafe Chain', metric: '+250%', metricLabel: 'охоплення', likes: '9.1K', comments: '267', image: 'bg-gradient-to-br from-orange-100 to-orange-50' },
  { brand: 'Consultant', metric: '+95', metricLabel: 'заявок', likes: '6.3K', comments: '145', image: 'bg-gradient-to-br from-violet-100 to-violet-50' },
];

function PhoneMockup({ item }: { item: typeof cases[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto w-full max-w-[280px]"
    >
      {/* Phone frame */}
      <div className="relative overflow-hidden rounded-[40px] bg-dark p-2 shadow-2xl shadow-dark/20">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-dark" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[32px] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1">
            <span className="text-[10px] font-semibold text-dark">9:41</span>
            <div className="flex gap-1">
              <div className="h-2.5 w-2.5 rounded-full bg-dark/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-dark/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-dark/20" />
            </div>
          </div>

          {/* Instagram post */}
          <div className="px-3 pb-4">
            {/* Header */}
            <div className="mb-2 flex items-center gap-2 px-1">
              <div className={`h-8 w-8 rounded-full ${item.image}`} />
              <div>
                <div className="text-[11px] font-semibold text-dark">{item.brand}</div>
                <div className="text-[9px] text-secondary">Sponsored</div>
              </div>
            </div>

            {/* Post image */}
            <div className={`mb-2 aspect-square w-full rounded-xl ${item.image} flex items-center justify-center`}>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 h-10 w-10 text-primary" />
                <span className="text-2xl font-extrabold text-dark">{item.metric}</span>
                <div className="text-xs text-secondary">{item.metricLabel}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-1">
              <div className="flex gap-3">
                <Heart className="h-5 w-5 text-dark" />
                <MessageCircle className="h-5 w-5 text-dark" />
              </div>
              <Bookmark className="h-5 w-5 text-dark" />
            </div>

            {/* Likes */}
            <div className="mt-1 px-1 text-[11px] font-semibold text-dark">{item.likes} likes</div>
            <div className="px-1 text-[10px] text-secondary">View all {item.comments} comments</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Cases() {
  return (
    <section className="relative w-full bg-bg px-6 py-24 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">КЕЙСИ</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary">
            Реальні результати реальних брендів.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <AnimatedSection key={item.brand} delay={i * 0.1}>
              <PhoneMockup item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
