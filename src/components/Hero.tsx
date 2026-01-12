type Props = {
  onShopClick?: () => void
}

export default function Hero({ onShopClick }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F297A0]">
              Fashion cute untuk wanita: anak, remaja, dewasa
            </h1>
            <p className="text-lg text-[#946A6D]">
              Koleksi manis, playful, dan nyaman untuk aktivitas harian. Dari basic yang lembut sampai statement piece yang lucu.
            </p>
            <div className="flex gap-3">
              <a
                href="#products"
                className="px-5 py-3 rounded bg-[#F297A0] text-white"
                onClick={onShopClick}
              >
                Lihat Koleksi
              </a>
              <a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded border border-[#F297A0]/30 hover:bg-[#F8EBD8]"
              >
                Shopee
              </a>
              <a
                href="https://tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded border border-[#F297A0]/30 hover:bg-[#F8EBD8]"
              >
                Tokopedia
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded border border-[#F297A0]/30 hover:bg-[#F8EBD8]"
              >
                TikTok
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#F297A0] via-[#F8D0CE] to-[#B6B879]" />
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-tr from-[#F297A0] to-[#B6B879]" />
          </div>
        </div>
      </div>
    </section>
  )
}
