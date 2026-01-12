export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded bg-gradient-to-tr from-[#F297A0] to-[#B6B879]" />
          <span className="font-semibold">picca</span>
        </div>
        <p className="text-sm text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} picca. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  )
}
