import { useState } from 'react'
import type { Product } from '../types'

type Props = {
  search: string
  onSearch: (v: string) => void
  suggestions?: Product[]
  onSelectSuggestion?: (p: Product) => void
}

export default function Header({ search, onSearch, suggestions = [], onSelectSuggestion }: Props) {
  const [focused, setFocused] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-[#F297A0]/20 bg-[#F8D0CE]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center gap-3 md:gap-4">
        <img src="/logo.png" alt="gloomy" className="h-12 md:h-16 w-auto" />
        <div className="flex-1 relative">
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Cari produk cute: dress, blouse, warna, ukuran…"
            className={`w-full px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-white/60 backdrop-blur-sm shadow-sm ring-1 ring-[#F297A0]/20 focus:outline-none transition text-sm md:text-base ${
              focused ? 'ring-2 ring-[#F297A0]' : ''
            }`}
          />
          {focused && search.trim().length >= 2 && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] bg-white rounded-xl shadow-lg border border-[#F297A0]/20 overflow-hidden z-50">
              <ul className="max-h-64 sm:max-h-80 overflow-auto">
                {suggestions.map((p) => (
                  <li key={p.id}>
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-[#F8EBD8] flex items-center justify-between"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => onSelectSuggestion?.(p)}
                    >
                      <span className="text-[#946A6D]">{p.name}</span>
                      <span className="text-xs px-2 py-1 rounded bg-[#F8D0CE] text-[#946A6D]">{p.category}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
