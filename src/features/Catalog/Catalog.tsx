import React from 'react'

import { Footer } from 'common/components/Footer/Footer'
import { Top } from 'common/components/Top/Top'
import { Products } from 'features/Catalog/Products/Products'

export const Catalog = () => {
  return (
    <div>
      <Top />
      <Products />
      <Footer />
    </div>
  )
}
