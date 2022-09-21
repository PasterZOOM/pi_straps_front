import { Slide } from 'react-slideshow-image'

import top from '../../../assets/images/top.jpg'
import logo from '../../../assets/svg/logo.svg'

import 'react-slideshow-image/dist/styles.css'
import styles from './Top.module.scss'

type SlideItemType = {
  id: number
  text: string
}

const slideImages: SlideItemType[] = [
  { id: 1, text: 'Индивидуальный подход' },
  { id: 1, text: 'Материалы премиум класса' },
]

export const Top = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${top})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className={styles.main}>
        <div className={styles.moreBlock}>
          <img src={logo} alt="logo" width="250px" className={styles.logo} />
          <span className={styles.text}>Кожевенная мастерская белорусского ремесленника</span>
          <button type="button" className={styles.button}>
            Подробнее
          </button>
        </div>
        <div className={styles.slide}>
          <Slide indicators>
            {slideImages.map(item => (
              <div key={item.id} className={styles.eachSlideshowIndicator}>
                <span>{item.text}</span>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  )
}
