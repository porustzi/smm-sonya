import { MessageCircle } from 'lucide-react';

const tgUser = '@svrnss';

export function Footer() {
  return (
    <footer className="w-full border-t border-dark/5 bg-bg px-6 py-12 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-sm text-secondary">
          {new Date().getFullYear()} SMM Specialist. Всі права захищені.
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`https://t.me/${tgUser.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-dark"
          >
            <MessageCircle className="h-4 w-4" />
            {tgUser}
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="relative w-full max-w-xs overflow-hidden rounded-full bg-white px-5 py-3 shadow-lg md:py-2.5">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-4 -right-3 h-16 w-16 rounded-full bg-rose-300/50 blur-xl" />
            <div className="absolute -bottom-4 -left-3 h-12 w-12 rounded-full bg-rose-400/40 blur-lg" />
            <div className="absolute left-1/3 top-1/4 h-8 w-8 rounded-full bg-rose-200/30 blur-md" />
          </div>
          <a
            href="https://krvtsv.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block whitespace-nowrap text-center text-[11px] font-bold uppercase tracking-widest text-rose-600 transition-colors hover:text-rose-500 md:text-[10px]"
          >
            Сайт зроблений KRVTSV CORP
          </a>
        </div>
      </div>
    </footer>
  );
}
