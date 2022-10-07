import { v1 } from 'uuid'

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
    id: v1(),
    title: 'abc',
    model: 'ssdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/YcJI38S4lUS5MQzdeg1Jmhj8g2yYTaQw4IR6oQ/em-ARYNg2JY.jpg?size=520x0&quality=90&sign=8258146eef5b5ceeb2ef9b2c1dc22725',
      },
    ],
  },
  {
    id: v1(),
    title: '2sdc',
    model: 'ssdcsdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/JVASvXHP8xV5PBdJemw7kys6lf4qIcp7z9ZMEA/IBDwwnwI_I4.jpg?size=520x0&quality=90&sign=5779437fe5be65007b62079f50ebe5de',
      },
    ],
  },
  {
    id: v1(),
    title: 'abc',
    model: 'ssdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/YcJI38S4lUS5MQzdeg1Jmhj8g2yYTaQw4IR6oQ/em-ARYNg2JY.jpg?size=520x0&quality=90&sign=8258146eef5b5ceeb2ef9b2c1dc22725',
      },
    ],
  },
  {
    id: v1(),
    title: '2sdc',
    model: 'ssdcsdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/JVASvXHP8xV5PBdJemw7kys6lf4qIcp7z9ZMEA/IBDwwnwI_I4.jpg?size=520x0&quality=90&sign=5779437fe5be65007b62079f50ebe5de',
      },
    ],
  },
  {
    id: v1(),
    title: 'abc',
    model: 'ssdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/YcJI38S4lUS5MQzdeg1Jmhj8g2yYTaQw4IR6oQ/em-ARYNg2JY.jpg?size=520x0&quality=90&sign=8258146eef5b5ceeb2ef9b2c1dc22725',
      },
    ],
  },
  {
    id: v1(),
    title: '2sdc',
    model: 'ssdcsdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/JVASvXHP8xV5PBdJemw7kys6lf4qIcp7z9ZMEA/IBDwwnwI_I4.jpg?size=520x0&quality=90&sign=5779437fe5be65007b62079f50ebe5de',
      },
    ],
  },
  {
    id: v1(),
    title: 'abc',
    model: 'ssdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/YcJI38S4lUS5MQzdeg1Jmhj8g2yYTaQw4IR6oQ/em-ARYNg2JY.jpg?size=520x0&quality=90&sign=8258146eef5b5ceeb2ef9b2c1dc22725',
      },
    ],
  },
  {
    id: v1(),
    title: '2sdc',
    model: 'ssdcsdf',
    price: 1,
    photos: [
      {
        id: v1(),
        isCover: true,
        path: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/JVASvXHP8xV5PBdJemw7kys6lf4qIcp7z9ZMEA/IBDwwnwI_I4.jpg?size=520x0&quality=90&sign=5779437fe5be65007b62079f50ebe5de',
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
