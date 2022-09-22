import React from 'react'

import { HowToOrder } from 'common/components/ HowToOrder/HowToOrder'
import { Header } from 'common/components/Header/Header'
import { InformationBlock } from 'common/components/InformationBlock/InformationBlock'
import { Top } from 'common/components/Top/Top'

export const App = () => {
  return (
    <div>
      <Header />
      <Top />
      <InformationBlock />
      <HowToOrder />
    </div>
  )
}
