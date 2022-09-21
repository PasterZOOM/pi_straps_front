import React from 'react'

import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'

import { PaletteTree } from './palette'

import { App } from 'app/App'
import { Header } from 'common/components/Header/Header'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
