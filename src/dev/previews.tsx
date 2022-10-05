import React from 'react'

import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'

import { PaletteTree } from './palette'

import { App } from 'app/App'
import { Contacts } from 'common/components/Body/HomePage/Contacts/Contacts'
import { HowToOrder } from 'common/components/Body/HomePage/HowToOrder/HowToOrder'
import { InformationBlock } from 'common/components/Body/HomePage/InformationBlock/InformationBlock'
import { Footer } from 'common/components/Footer/Footer'
import { Header } from 'common/components/Header/Header'
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
      <ComponentPreview path="/Contacts">
        <Contacts />
      </ComponentPreview>
      <ComponentPreview path="/Footer">
        <Footer />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
