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
      <h3 className={styles.title}>{product.title}</h3>
      <span className={styles.price}>$ {product.price}</span>
    </div>
  )
}
