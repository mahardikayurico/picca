import { CATEGORIES } from '../constants/categories'

type Props = {
  active: string
  onSelect: (c: string) => void
}

export default function Header({ active, onSelect }: Props) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-[#F297A0]/20 bg-[#F8D0CE]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded bg-gradient-to-tr from-[#F297A0] to-[#B6B879]" />
          <span className="font-bold text-xl">picca</span>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <button
            className={`px-3 py-2 rounded ${active === 'All' ? 'bg-[#F297A0] text-white' : 'hover:bg-[#F8EBD8]'}`}
            onClick={() => onSelect('All')}
          >
            Semua
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`px-3 py-2 rounded ${active === c ? 'bg-[#B6B879] text-white' : 'hover:bg-[#F8EBD8]'}`}
              onClick={() => onSelect(c)}
            >
              {c}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
