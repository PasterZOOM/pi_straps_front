import { FC } from 'react'

import styles from './Product.module.scss'

import { ProductType } from 'features/Catalog/Products/Products'

type PropsType = {
  product: ProductType
}

export const Product: FC<PropsType> = ({ product }) => {
  return (
    <div className={styles.main}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${product.photos[0].path})`,
        }}
      />
      <h1>{product.title}</h1>
    </div>
  )
}
