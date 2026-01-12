import { CATEGORIES } from '../constants/categories'

type Props = {
  search: string
  onSearch: (v: string) => void
  category: string
  onCategory: (v: string) => void
  sort: 'relevance' | 'price-asc' | 'price-desc'
  onSort: (v: 'relevance' | 'price-asc' | 'price-desc') => void
}

export default function FilterBar({ search, onSearch, category, onCategory, sort, onSort }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Cari produk cute: dress, blouse, warna, ukuran…"
            className="w-full px-4 py-3 rounded border border-[#F297A0]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#F297A0]"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={category}
            onChange={(e) => onCategory(e.target.value)}
            className="px-4 py-3 rounded border border-[#F297A0]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#F297A0]"
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
            className="px-4 py-3 rounded border border-[#F297A0]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#F297A0]"
          >
            <option value="relevance">Relevan</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
          </select>
        </div>
      </div>
    </div>
  )
}
