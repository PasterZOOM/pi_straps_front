import React from 'react'

import styles from './MainPage.module.scss'

import { HowToOrder } from 'common/components/ HowToOrder/HowToOrder'
import { InformationBlock } from 'common/components/InformationBlock/InformationBlock'

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <InformationBlock />
      <HowToOrder />
    </div>
  )
}
