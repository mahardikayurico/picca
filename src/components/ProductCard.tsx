import type { Product } from '../types'
import { formatIDR } from '../utils/format'

type Props = {
  item: Product
}

export default function ProductCard({ item }: Props) {
  return (
    <div className="group rounded-2xl border border-[#F297A0]/20 overflow-hidden bg-white">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#946A6D]">{item.name}</h3>
          <span className="text-sm px-2 py-1 rounded bg-[#F8D0CE] text-[#946A6D]">{item.category}</span>
        </div>
        <div className="text-lg font-bold text-[#F297A0]">{formatIDR(item.price)}</div>
        <div className="flex flex-wrap gap-2">
          {item.colors.slice(0, 3).map((c) => (
            <span key={c} className="text-xs px-2 py-1 rounded border border-[#F297A0]/20">
              {c}
            </span>
          ))}
          {item.sizes.slice(0, 3).map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded border border-[#F297A0]/20">
              {s}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {item.shopeeUrl && (
            <a
              href={item.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-3 py-2 rounded bg-[#F297A0] text-white hover:opacity-90"
            >
              Shopee
            </a>
          )}
          {item.tokopediaUrl && (
            <a
              href={item.tokopediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-3 py-2 rounded bg-[#B6B879] text-white hover:opacity-90"
            >
              Tokopedia
            </a>
          )}
          {item.tiktokUrl && (
            <a
              href={item.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-3 py-2 rounded bg-[#F8D0CE] text-[#946A6D] hover:opacity-90"
            >
              TikTok
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
