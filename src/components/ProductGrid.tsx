import type { Product } from '../types'
import ProductCard from './ProductCard'

type Props = {
  items: Product[]
  wishlistedIds?: Set<string>
  onToggleWishlist?: (id: string) => void
  onQuickView?: (p: Product) => void
  onViewDetail?: (p: Product) => void
  canLoadMore?: boolean
  onLoadMore?: () => void
}

export default function ProductGrid({ items, wishlistedIds, onToggleWishlist, onQuickView, onViewDetail, canLoadMore, onLoadMore }: Props) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((p) => (
          <ProductCard
            key={p.id}
            item={p}
            wishlisted={wishlistedIds?.has(p.id)}
            onToggleWishlist={onToggleWishlist}
            onQuickView={onQuickView}
            onViewDetail={onViewDetail}
          />
        ))}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-6">
          <button className="px-5 py-3 rounded bg-[#F297A0] text-white hover:opacity-90" onClick={onLoadMore}>
            Lihat lebih banyak
          </button>
        </div>
      )}
    </section>
  )
}
