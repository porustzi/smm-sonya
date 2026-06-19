import { MessageCircle } from 'lucide-react';

const tgUser = '@svrnss';

export function Footer() {
  return (
    <footer className="w-full border-t border-dark/5 bg-bg px-6 py-12 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-sm text-secondary">
          {new Date().getFullYear()} SMM Specialist. Всі права захищені.
        </div>

        <a
          href={`https://t.me/${tgUser.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full bg-raspberry px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-raspberry/25 transition-all hover:bg-raspberry-hover hover:shadow-xl hover:shadow-raspberry/30 hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
          {tgUser}
        </a>
      </div>
    </footer>
  );
}
