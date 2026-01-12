import { LuHeart, LuHeartOff, LuShoppingBag, LuStar } from 'react-icons/lu'
import { SiShopee, SiTiktok } from 'react-icons/si'
import type { Product } from '../types'
import { formatIDR } from '../utils/format'

type Props = {
  item: Product
  wishlisted?: boolean
  onToggleWishlist?: (id: string) => void
  onQuickView?: (p: Product) => void
  onViewDetail?: (p: Product) => void
}

export default function ProductCard({ item, wishlisted, onToggleWishlist, onQuickView, onViewDetail }: Props) {
  return (
    <div className="group rounded-2xl border border-[#F297A0]/20 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div className="aspect-square w-full overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {item.isNew && <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-[#F297A0] text-white">Baru</span>}
        <button
          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full shadow-sm hover:shadow transition"
          onClick={() => onToggleWishlist?.(item.id)}
          aria-label="wishlist"
        >
          {wishlisted ? <LuHeartOff /> : <LuHeart />}
        </button>
        <button
          className="absolute bottom-3 right-3 px-4 py-2 rounded-full bg-[#F8D0CE] text-[#946A6D] shadow-sm hover:shadow transition text-sm"
          onClick={() => onQuickView?.(item)}
        >
          Quick View
        </button>
        <button
          className="absolute bottom-3 left-3 px-4 py-2 rounded-full bg-[#B6B879] text-white shadow-sm hover:shadow transition text-sm"
          onClick={() => (onViewDetail ? onViewDetail(item) : (window.location.hash = `#/product/${item.id}`))}
        >
          View Detail
        </button>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#946A6D]">{item.name}</h3>
          <span className="text-sm px-2 py-1 rounded bg-[#F8D0CE] text-[#946A6D]">{item.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold text-[#F297A0]">{formatIDR(item.price)}</div>
          {item.rating && (
            <span className="inline-flex items-center gap-1 text-[#946A6D] text-sm">
              <LuStar /> {item.rating.toFixed(1)}
            </span>
          )}
        </div>
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
              className="flex items-center justify-center w-10 h-10 mx-auto rounded bg-[#F297A0] text-white hover:opacity-90"
              aria-label="Shopee"
            >
              <SiShopee className="text-xl" />
            </a>
          )}
          {item.tokopediaUrl && (
            <a
              href={item.tokopediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 mx-auto rounded bg-[#B6B879] text-white hover:opacity-90"
              aria-label="Tokopedia"
            >
              <LuShoppingBag className="text-xl" />
            </a>
          )}
          {item.tiktokUrl && (
            <a
              href={item.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 mx-auto rounded bg-[#F8D0CE] text-[#946A6D] hover:opacity-90"
              aria-label="TikTok"
            >
              <SiTiktok className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
