import { FC } from 'react'

import { ProductType } from 'features/Catalog/Products/Products'

type PropsType = {
  product: ProductType
}

export const Product: FC<PropsType> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}
