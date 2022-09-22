import React from 'react'

import styles from './MainPage.module.scss'

import { Contacts } from 'common/components/Body/MainPage/Contacts/Contacts'
import { HowToOrder } from 'common/components/Body/MainPage/HowToOrder/HowToOrder'
import { InformationBlock } from 'common/components/Body/MainPage/InformationBlock/InformationBlock'

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <InformationBlock />
        <HowToOrder />
        <Contacts />
      </div>
    </div>
  )
}
