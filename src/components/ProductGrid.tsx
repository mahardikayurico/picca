import type { Product } from '../types'
import ProductCard from './ProductCard'

type Props = {
  items: Product[]
}

export default function ProductGrid({ items }: Props) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>
    </section>
  )
}

