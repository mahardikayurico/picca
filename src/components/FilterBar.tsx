import { CATEGORIES } from '../constants/categories'

type Props = {
  category: string
  onCategory: (v: string) => void
  sort: 'relevance' | 'price-asc' | 'price-desc'
  onSort: (v: 'relevance' | 'price-asc' | 'price-desc') => void
  minRating: number
  onMinRating: (v: number) => void
}

export default function FilterBar({ category, onCategory, sort, onSort, minRating, onMinRating }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-wrap gap-3 items-center">
        <select
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-3 rounded border border-[#F297A0]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#F297A0]"
        >
          <option value="All">Semua Kategori</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => {
            const v = e.target.value
            onSort(v === 'price-asc' ? 'price-asc' : v === 'price-desc' ? 'price-desc' : 'relevance')
          }}
          className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-3 rounded border border-[#F297A0]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#F297A0]"
        >
          <option value="relevance">Relevan</option>
          <option value="price-asc">Harga Terendah</option>
          <option value="price-desc">Harga Tertinggi</option>
        </select>
        <select
          value={String(minRating)}
          onChange={(e) => onMinRating(Number(e.target.value))}
          className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-3 rounded border border-[#F297A0]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#F297A0]"
        >
          <option value="0">Rating: Semua</option>
          <option value="4">Rating ≥ 4</option>
          <option value="4.5">Rating ≥ 4.5</option>
        </select>
      </div>
    </div>
  )
}
