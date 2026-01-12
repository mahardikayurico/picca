type Props = {
  onShopClick?: () => void
}

import { LuShoppingBag } from 'react-icons/lu'
import { SiShopee, SiTiktok } from 'react-icons/si'

export default function Hero({ onShopClick }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#F297A0] via-[#F8D0CE] to-[#B6B879] bg-clip-text text-transparent">
              Refined Cute, Every Day.
            </h1>
            <p className="text-lg text-[#946A6D]">
              Curated sweet and playful pieces for modern women—comfort-first essentials and charming statement styles.
            </p>
            <div className="space-y-2 lg:hidden">
              <a
                href="#products"
                className="block w-full px-4 py-2.5 rounded-full bg-gradient-to-r from-[#F297A0] to-[#B6B879] text-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#F297A0] text-sm"
                onClick={onShopClick}
              >
                Shop the Collection
              </a>
              <a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#F297A0]/30 hover:bg-[#F8EBD8] transition"
              >
                <SiShopee className="text-[#F297A0] text-xl" />
                <span className="text-[#946A6D]">Shopee</span>
              </a>
              <a
                href="https://tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#B6B879]/40 hover:bg-[#E9F5E0] transition"
              >
                <LuShoppingBag className="text-[#54614B] text-xl" />
                <span className="text-[#54614B]">Tokopedia</span>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#F8D0CE]/60 hover:bg-[#F8D0CE] transition"
              >
                <SiTiktok className="text-[#946A6D] text-xl" />
                <span className="text-[#946A6D]">TikTok</span>
              </a>
            </div>
            <div className="hidden lg:flex gap-3">
              <a
                href="#products"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F297A0] to-[#B6B879] text-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#F297A0]"
                onClick={onShopClick}
              >
                Shop the Collection
              </a>
              <a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#F297A0]/30 hover:bg-[#F8EBD8] transition"
              >
                Shopee
              </a>
              <a
                href="https://tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#F297A0]/30 hover:bg-[#F8EBD8] transition"
              >
                Tokopedia
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#F297A0]/30 hover:bg-[#F8EBD8] transition"
              >
                TikTok
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-48 sm:h-auto sm:aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#F297A0] via-[#F8D0CE] to-[#B6B879]" />
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 sm:opacity-40 bg-gradient-to-tr from-[#F297A0] to-[#B6B879]" />
            <div className="absolute -left-4 -top-4 size-12 sm:size-16 rounded-full bg-[#F8D0CE] opacity-70" />
            <div className="absolute -right-6 -bottom-6 size-16 sm:size-24 rounded-full bg-[#B6B879] opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
