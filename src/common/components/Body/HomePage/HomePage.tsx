import React from 'react'

import styles from './HomePage.module.scss'

import { Contacts } from 'common/components/Body/HomePage/Contacts/Contacts'
import { HowToOrder } from 'common/components/Body/HomePage/HowToOrder/HowToOrder'
import { InformationBlock } from 'common/components/Body/HomePage/InformationBlock/InformationBlock'
import { Footer } from 'common/components/Footer/Footer'
import { Top } from 'common/components/Top/Top'

export const HomePage = () => {
  return (
    <div>
      <Top />
      <div className={styles.main}>
        <div className={styles.content}>
          <InformationBlock />
          <HowToOrder />
          <Contacts />
        </div>
      </div>
      <Footer />
    </div>
  )
}
