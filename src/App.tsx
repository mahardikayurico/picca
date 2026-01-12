import { useMemo, useState } from 'react'
import './App.css'
import FilterBar from './components/FilterBar'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import productsDataRaw from './data/products.json'
import type { Product } from './types'

function App() {
  const [category, setCategory] = useState<string>('All')
  const [search, setSearch] = useState<string>('')
  const [sort, setSort] = useState<'relevance' | 'price-asc' | 'price-desc'>('relevance')
  const productsData = productsDataRaw as unknown as Product[]

  const items = useMemo(() => {
    const base = productsData.filter((p) => (category === 'All' ? true : p.category === category))
    const q = search.trim().toLowerCase()
    const filtered = q
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
    const sorted =
      sort === 'price-asc'
        ? [...filtered].sort((a, b) => a.price - b.price)
        : sort === 'price-desc'
        ? [...filtered].sort((a, b) => b.price - a.price)
        : filtered
    return sorted
  }, [category, search, sort, productsData])

  return (
    <>
      <Header active={category} onSelect={setCategory} />
      <Hero />
      <FilterBar
        search={search}
        onSearch={setSearch}
        category={category}
        onCategory={setCategory}
        sort={sort}
        onSort={setSort}
      />
      <ProductGrid items={items} />
      <Footer />
    </>
  )
}

export default App
