import { Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#features', label: 'Tính năng' },
  { href: '#showcase', label: 'Sản phẩm' },
  { href: '#benefits', label: 'Lợi ích' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050508]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:max-w-[88rem] lg:px-10 xl:max-w-[96rem] xl:px-14 2xl:max-w-[110rem] 2xl:px-20">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="SoulSync" className="h-8 w-auto" width={140} height={32} />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-violet-500/25 transition hover:opacity-95"
          >
            Dùng thử ngay
          </a>
        </div>

        <button type="button" onClick={() => setIsOpen(!isOpen)} className="p-2 md:hidden" aria-label="Menu">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#050508]/92 md:hidden">
          <div className="space-y-2 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-lg px-2 py-2 text-sm text-white/80"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              className="mt-2 block w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Dùng thử ngay
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
