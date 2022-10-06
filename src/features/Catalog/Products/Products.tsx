import { Product } from './Product/Product'

export type ProductPhotoType = {
  path: string
  id: string
  isCover: boolean
}

export type ProductType = {
  id: string
  title: string
  model: string
  price: number
  photos: ProductPhotoType[]
}
const products: ProductType[] = [
  {
    id: '1',
    title: 'abc',
    model: 'ssdf',
    price: 1,
    photos: [{ id: '2', isCover: true, path: 'sdf' }],
  },
]

export const Products = () => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
