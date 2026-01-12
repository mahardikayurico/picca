import { useEffect, useMemo, useState } from 'react'
import './App.css'
import BackgroundDecor from './components/BackgroundDecor'
import FilterBar from './components/FilterBar'
import FilterChips from './components/FilterChips'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductDetail from './components/ProductDetail'
import ProductGrid from './components/ProductGrid'
import QuickViewModal from './components/QuickViewModal'
import productsDataRaw from './data/products.json'
import type { Product } from './types'

function App() {
  const [category, setCategory] = useState<string>('All')
  const [search, setSearch] = useState<string>('')
  const [sort, setSort] = useState<'relevance' | 'price-asc' | 'price-desc'>('relevance')
  const [minRating, setMinRating] = useState<number>(0)
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState<number>(8)
  const [wishlist, setWishlist] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem('wishlist')
      return raw ? new Set(JSON.parse(raw)) : new Set()
    } catch {
      return new Set()
    }
  })
  const [quickView, setQuickView] = useState<Product | null>(null)
  const productsData = productsDataRaw as unknown as Product[]
  const parseHash = (h: string): { kind: 'home' } | { kind: 'product'; id: string } => {
    const s = h.replace(/^#/, '')
    if (s.startsWith('/product/')) {
      const id = s.substring('/product/'.length)
      return { kind: 'product', id }
    }
    return { kind: 'home' }
  }
  const [route, setRoute] = useState<{ kind: 'home' } | { kind: 'product'; id: string }>(() => parseHash(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem('wishlist', JSON.stringify(Array.from(next)))
      return next
    })
  }

  const items = useMemo(() => {
    const base = productsData.filter((p) => (category === 'All' ? true : p.category === category))
    const q = search.trim().toLowerCase()
    let filtered = q
      ? base.filter((p) => {
          const hay = [
            p.name,
            p.category,
            ...(p.tags ?? []),
            ...p.colors,
            ...p.sizes,
          ]
            .join(' ')
            .toLowerCase()
          return hay.includes(q)
        })
      : base
    if (selectedColors.length) {
      filtered = filtered.filter((p) => selectedColors.some((c) => p.colors.includes(c)))
    }
    if (selectedSizes.length) {
      filtered = filtered.filter((p) => selectedSizes.some((s) => p.sizes.includes(s)))
    }
    if (minRating > 0) {
      filtered = filtered.filter((p) => (p.rating ?? 0) >= minRating)
    }
    const sorted =
      sort === 'price-asc'
        ? [...filtered].sort((a, b) => a.price - b.price)
        : sort === 'price-desc'
        ? [...filtered].sort((a, b) => b.price - a.price)
        : filtered
    return sorted
  }, [category, search, sort, productsData, selectedColors, selectedSizes, minRating])

  const colors = useMemo(() => Array.from(new Set(productsData.flatMap((p) => p.colors))).sort(), [productsData])
  const sizes = useMemo(() => Array.from(new Set(productsData.flatMap((p) => p.sizes))).sort(), [productsData])
  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount])
  const canLoadMore = visibleItems.length < items.length
  const nameSuggestions = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (q.length < 2) return []
    return productsData.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6)
  }, [search, productsData])
  const goToProduct = (p: Product) => {
    window.location.hash = `#/product/${p.id}`
  }

  const toggleColor = (c: string) =>
    setSelectedColors((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))
  const toggleSize = (s: string) =>
    setSelectedSizes((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))

  return (
    <>
      <BackgroundDecor />
      <Header search={search} onSearch={setSearch} suggestions={nameSuggestions} onSelectSuggestion={goToProduct} />
      {route.kind === 'home' ? (
        <>
          <Hero />
          <FilterBar
            category={category}
            onCategory={setCategory}
            sort={sort}
            onSort={setSort}
            minRating={minRating}
            onMinRating={setMinRating}
          />
          <FilterChips
            colors={colors}
            sizes={sizes}
            selectedColors={selectedColors}
            selectedSizes={selectedSizes}
            onToggleColor={toggleColor}
            onToggleSize={toggleSize}
          />
          <ProductGrid
            items={visibleItems}
            wishlistedIds={wishlist}
            onToggleWishlist={toggleWishlist}
            onQuickView={(p) => setQuickView(p)}
            onViewDetail={goToProduct}
            canLoadMore={canLoadMore}
            onLoadMore={() => setVisibleCount((c) => c + 8)}
          />
          {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
        </>
      ) : (
        <ProductDetail
          product={productsData.find((p) => p.id === route.id) ?? null}
          onBack={() => {
            if (window.history.length > 1) window.history.back()
            else window.location.hash = ''
          }}
        />
      )}
      <Footer />
    </>
  )
}

export default App
