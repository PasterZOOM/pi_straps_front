import React from 'react'

import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'

import { PaletteTree } from './palette'

import { App } from 'app/App'
import { HowToOrder } from 'common/components/ HowToOrder/HowToOrder'
import { Header } from 'common/components/Header/Header'
import { InformationBlock } from 'common/components/InformationBlock/InformationBlock'
import { Top } from 'common/components/Top/Top'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header />
      </ComponentPreview>
      <ComponentPreview path="/Top">
        <Top />
      </ComponentPreview>
      <ComponentPreview path="/InformationBlock">
        <InformationBlock />
      </ComponentPreview>
      <ComponentPreview path="/HowToOrder">
        <HowToOrder />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
