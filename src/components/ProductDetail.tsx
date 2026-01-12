import { useMemo, useState } from 'react'
import { LuShare2, LuShoppingBag, LuStar } from 'react-icons/lu'
import { SiShopee, SiTiktok } from 'react-icons/si'
import type { Product } from '../types'
import { formatIDR } from '../utils/format'

type Props = {
  product: Product | null
  onBack?: () => void
}

export default function ProductDetail({ product, onBack }: Props) {
  const gallery = useMemo(() => {
    if (!product) return []
    const imgs = product.images && product.images.length ? product.images : [product.image]
    return imgs.slice(0, 8)
  }, [product])
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + gallery.length) % gallery.length)
  const next = () => setIdx((i) => (i + 1) % gallery.length)

  const onShare = async () => {
    if (!product) return
    const text = `${product.name} – ${formatIDR(product.price)}`
    const url = product.shopeeUrl || product.tokopediaUrl || product.tiktokUrl || window.location.href
    let ok = false
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text, url })
        ok = true
      } catch {
        ok = false
      }
    }
    if (!ok) {
      try {
        await navigator.clipboard.writeText(url!)
        alert('Link disalin ke clipboard')
      } catch {
        alert('Gagal menyalin link')
      }
    }
  }

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <button className="mb-6 px-4 py-2 rounded-full border border-[#F297A0]/30 hover:bg-[#F8EBD8]" onClick={onBack}>
          Kembali
        </button>
        <div className="rounded-2xl border border-[#F297A0]/20 bg-white p-10 text-center text-[#946A6D]">
          Produk tidak ditemukan.
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <button className="mb-6 px-4 py-2 rounded-full border border-[#F297A0]/30 hover:bg-[#F8EBD8]" onClick={onBack}>
        Kembali
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="relative rounded-2xl overflow-hidden bg-[#F8EBD8] md:aspect-[4/3] aspect-square max-h-[50vh] md:max-h-none">
          {gallery.length > 0 && <img src={gallery[idx]} alt={product.name} className="w-full h-full object-cover" />}
          {product.isNew && <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-[#F297A0] text-white">Baru</span>}
          {gallery.length > 1 && (
            <>
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full"
                onClick={prev}
                aria-label="prev"
              >
                ‹
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full"
                onClick={next}
                aria-label="next"
              >
                ›
              </button>
              <div className="absolute left-0 right-0 bottom-3 mx-auto flex items-center justify-center gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`size-2 rounded-full ${i === idx ? 'bg-[#F297A0]' : 'bg-white/70'}`}
                    aria-label={`slide-${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-2 sm:p-4 space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#F297A0] via-[#F8D0CE] to-[#B6B879] bg-clip-text text-transparent">
            {product.name}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#F297A0]">{formatIDR(product.price)}</span>
            {product.rating && (
              <span className="inline-flex items-center gap-1 text-[#946A6D]">
                <LuStar /> {product.rating.toFixed(1)}
              </span>
            )}
          </div>
          {product.description && <p className="text-[#946A6D]">{product.description}</p>}
          <div className="space-y-2 text-[#946A6D]">
            <div className="text-sm">Warna: {product.colors.join(', ')}</div>
            <div className="text-sm">Ukuran: {product.sizes.join(', ')}</div>
          </div>
          <div className="flex flex-col gap-2 pt-2 lg:hidden">
            {product.shopeeUrl && (
              <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl border border-[#F297A0]/30 hover:bg-[#F8EBD8]">
                <SiShopee className="text-[#F297A0] text-xl" /> <span className="text-[#946A6D]">Shopee</span>
              </a>
            )}
            {product.tokopediaUrl && (
              <a href={product.tokopediaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl border border-[#B6B879]/40 hover:bg-[#E9F5E0]">
                <LuShoppingBag className="text-[#54614B] text-xl" /> <span className="text-[#54614B]">Tokopedia</span>
              </a>
            )}
            {product.tiktokUrl && (
              <a href={product.tiktokUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl border border-[#F8D0CE]/60 hover:bg-[#F8D0CE]">
                <SiTiktok className="text-[#946A6D] text-xl" /> <span className="text-[#946A6D]">TikTok</span>
              </a>
            )}
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-2 pt-2">
            {product.shopeeUrl && (
              <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer" className="text-center px-3 py-2 rounded bg-[#F297A0] text-white">
                <span className="inline-flex items-center justify-center gap-1">
                  <SiShopee /> Shopee
                </span>
              </a>
            )}
            {product.tokopediaUrl && (
              <a href={product.tokopediaUrl} target="_blank" rel="noopener noreferrer" className="text-center px-3 py-2 rounded bg-[#B6B879] text-white">
                <span className="inline-flex items-center justify-center gap-1">
                  <LuShoppingBag /> Tokopedia
                </span>
              </a>
            )}
            {product.tiktokUrl && (
              <a href={product.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-center px-3 py-2 rounded bg-[#F8D0CE] text-[#946A6D]">
                <span className="inline-flex items-center justify-center gap-1">
                  <SiTiktok /> TikTok
                </span>
              </a>
            )}
          </div>
          <button onClick={onShare} className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded border border-[#F297A0]/30">
            <LuShare2 /> Bagikan
          </button>
        </div>
      </div>
    </section>
  )
}
