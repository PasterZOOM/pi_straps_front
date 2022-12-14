import React from 'react'

import { DevSupport } from '@react-buddy/ide-toolbox'
import OverlayScrollbars from 'overlayscrollbars'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'app/App'
import { store } from 'app/store'
import { ComponentPreviews, useInitial } from 'dev'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
        <App />
      </DevSupport>
    </BrowserRouter>
  </Provider>
)
const options = { scrollbars: { clickScrolling: true } }

OverlayScrollbars(document.body, options)
