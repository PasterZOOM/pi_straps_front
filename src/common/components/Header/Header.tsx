import { useState } from 'react'

import OverlayScrollbars from 'overlayscrollbars'

import styles from './Header.module.scss'

export const Header = () => {
  const [whiteHeader, setWhiteHeader] = useState(false)
  const scrollHandler = () => {
    if (instance.scroll().position.y !== 0) {
      setWhiteHeader(true)
    } else setWhiteHeader(false)
  }
  const instance = OverlayScrollbars(document.body, { callbacks: { onScroll: scrollHandler } })

  return (
    <div className={whiteHeader ? `${styles.main} ${styles.whiteHeader}` : styles.main}>
      <div className={styles.start}>
        <img
          src="	https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/dsMeWEeYMzPu-TNVUGl81XFsghiOT2H_VY3_VGO9pUQcXSN-SCyGCdjhNc13jDH42nb0r5uJx2JWpR4l20G_jpOM.jpg?size=400x400&quality=96&crop=71,71,2017,2017&ava=1"
          alt="logoVK"
          width="40px"
          height="40px"
          className={styles.img}
        />
        <div className={styles.text}>
          <span className={styles.title}>PI_Straps | Изделия ручной работы из кожи</span>
          <a href="https://vk.com/pi_straps" className={styles.a}>
            На нас подписаны 160 человек
          </a>
        </div>
      </div>
      <div className={styles.center}>nav</div>
      <div className={styles.end}>+375 (25) 739-06-58</div>
    </div>
  )
}
