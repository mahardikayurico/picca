export type Category = 'Anak' | 'Remaja' | 'Dewasa'

export type Product = {
  id: string
  name: string
  category: Category
  price: number
  colors: string[]
  sizes: string[]
  image: string
  shopeeUrl?: string
  tokopediaUrl?: string
  tiktokUrl?: string
  tags?: string[]
}
