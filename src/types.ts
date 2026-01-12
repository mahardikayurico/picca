export type Category = 'Anak' | 'Remaja' | 'Dewasa'

export type Product = {
  id: string
  name: string
  category: Category
  price: number
  colors: string[]
  sizes: string[]
  image: string
  images?: string[]
  shopeeUrl?: string
  tokopediaUrl?: string
  tiktokUrl?: string
  tags?: string[]
  rating?: number
  isNew?: boolean
  description?: string
}
