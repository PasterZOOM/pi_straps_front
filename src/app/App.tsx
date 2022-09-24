import React from 'react'

import { MainPage } from 'common/components/Body/MainPage/MainPage'
import { Footer } from 'common/components/Footer/Footer'
import { Header } from 'common/components/Header/Header'
import { Top } from 'common/components/Top/Top'

export const App = () => {
  return (
    <div>
      <Header />
      <Top />
      <MainPage />
      <Footer />
    </div>
  )
}
