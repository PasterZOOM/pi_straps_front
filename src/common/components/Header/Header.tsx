import { useEffect, useState } from 'react'

import OverlayScrollbars from 'overlayscrollbars'
import { useLocation } from 'react-router-dom'

import styles from './Header.module.scss'

import { Navbar } from 'common/components/Navbar/Navbar'
import { scrollHelper } from 'common/utils/scrollHelper'

export const Header = () => {
  const { pathname } = useLocation()
  const [whiteHeader, setWhiteHeader] = useState(false)

  const onScrollCallBack = () => {
    scrollHelper(instance, pathname, setWhiteHeader)
  }
  const instance = OverlayScrollbars(document.body, {
    callbacks: { onScroll: onScrollCallBack },
  })

  useEffect(() => {
    scrollHelper(instance, pathname, setWhiteHeader)
  }, [instance, pathname])

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
      <div className={styles.center}>
        <Navbar whiteHeader={whiteHeader} />
      </div>
      <div className={styles.end}>
        <a href="tel:+375257390658" className={styles.a}>
          <span>+375 (25) 739-06-58</span>
        </a>
      </div>
    </div>
  )
}
