import styles from './Footer.module.scss'

import { AppButton } from 'common/components/Buttons/AppButton/AppButton'

export const Footer = () => {
  return (
    <div className={styles.main}>
      <img
        src="	https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/dsMeWEeYMzPu-TNVUGl81XFsghiOT2H_VY3_VGO9pUQcXSN-SCyGCdjhNc13jDH42nb0r5uJx2JWpR4l20G_jpOM.jpg?size=400x400&quality=96&crop=71,71,2017,2017&ava=1"
        alt="logoVK"
        width="100px"
        height="100px"
        className={styles.img}
      />
      <div className={styles.title}>PI_Straps | Изделия ручной работы из кожи</div>
      <a href="https://vk.com/pi_straps" className={styles.a}>
        На нас подписаны 160 человек
      </a>
      <AppButton title="Подробнее" />
    </div>
  )
}
