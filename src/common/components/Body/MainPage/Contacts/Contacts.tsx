import { Map, Placemark, YMaps } from 'react-yandex-maps'

import styles from './Contacts.module.scss'

const startMapX = 54.001765
const startMapY = 27.263761

export const Contacts = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.contactsBlock}>
        <YMaps>
          <Map defaultState={{ center: [startMapX, startMapY], zoom: 14 }} className={styles.map}>
            <Placemark
              defaultGeometry={[startMapX, startMapY]}
              properties={{
                balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system',
              }}
            />
            <Placemark geometry={[startMapX, startMapY]} options={{}} />
          </Map>
        </YMaps>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <a href="tel:+375257390658" className={styles.a}>
              <span>+375 (25) 739-06-58</span>
            </a>
          </div>
          <div className={styles.contact}>
            <a href="https://vk.com/pi_straps/" className={styles.a}>
              <span>Вконтакте</span>
            </a>
          </div>
          <div className={styles.contact}>
            <a href="https://www.instagram.com/pi_straps/" className={styles.a}>
              <span>Инстаграм</span>
            </a>
          </div>
          <div className={styles.contact}>
            <span className={styles.address}>ул.Весенняя, д.7, г.Заславль</span>
          </div>
        </div>
      </div>
    </div>
  )
}
