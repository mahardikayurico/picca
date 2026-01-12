type Props = {
  colors: string[]
  sizes: string[]
  selectedColors: string[]
  selectedSizes: string[]
  onToggleColor: (c: string) => void
  onToggleSize: (s: string) => void
}

export default function FilterChips({ colors, sizes, selectedColors, selectedSizes, onToggleColor, onToggleSize }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-[#946A6D]">Warna:</span>
            {colors.map((c) => {
              const active = selectedColors.includes(c)
              return (
                <button
                  key={c}
                  onClick={() => onToggleColor(c)}
                  className={`text-xs px-3 py-1 rounded-full border ${active ? 'bg-[#F297A0] text-white border-[#F297A0]' : 'border-[#F297A0]/30'}`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-[#946A6D]">Ukuran:</span>
            {sizes.map((s) => {
              const active = selectedSizes.includes(s)
              return (
                <button
                  key={s}
                  onClick={() => onToggleSize(s)}
                  className={`text-xs px-3 py-1 rounded-full border ${active ? 'bg-[#B6B879] text-white border-[#B6B879]' : 'border-[#F297A0]/30'}`}
                >
                  {s}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

