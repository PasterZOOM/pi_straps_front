import { Product } from './Product/Product'
import styles from './Products.module.scss'

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
    photos: [
      {
        id: '2',
        isCover: true,
        path: 'https://sun9-64.userapi.com/impg/y4P8OFqcB8qL7HJVHiZK7ZXa7tH_bDnYzD4VaA/sBuSN7W3EQQ.jpg?size=1280x960&quality=96&sign=0a6adfa99bce3ed888f75da9d0dad147&type=album',
      },
    ],
  },
  {
    id: '3',
    title: '2sdc',
    model: 'ssdcsdf',
    price: 1,
    photos: [
      {
        id: '4',
        isCover: true,
        path: 'https://sun9-64.userapi.com/impg/y4P8OFqcB8qL7HJVHiZK7ZXa7tH_bDnYzD4VaA/sBuSN7W3EQQ.jpg?size=1280x960&quality=96&sign=0a6adfa99bce3ed888f75da9d0dad147&type=album',
      },
    ],
  },
]

export const Products = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
