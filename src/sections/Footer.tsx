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

      <div className="mt-8 text-center text-2xl text-secondary/30 select-none">
        (^-^)/
      </div>
    </footer>
  );
}
