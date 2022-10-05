import { v1 } from 'uuid'

import photo1 from 'assets/images/photo1.jpg'
import photo2 from 'assets/images/photo2.jpg'
import styles from 'common/components/Body/HomePage/InformationBlock/InformationBlock.module.scss'

type InformationBlockItemType = {
  id: string
  title: string
  description: string
  img: string
  photoDescription: string
}
const InformationBlockItems: InformationBlockItemType[] = [
  {
    id: v1(),
    title: 'На чем я специализируюсь?',
    description:
      'Моей основной направленностью' +
      ' является изготовление часовых ремешков по индивидуальному заказу. Кроме этого, так же шью обложки, холдеры, кошельки, другую мелкую галантерею, а иногда даже сумки из натуральной кожи.',
    img: photo1,
    photoDescription: '',
  },
  {
    id: v1(),
    title: 'При изготовлении используются лучшие инструменты и материалы',
    description:
      'Для достижения наилучшего результата я тщательно подхожу к вопросу выбора материалов, а так же инструмента, я не работаю с дешевыми кожами сомнительного производства и кустарной оснасткой. Только профессиональным инструментом и материалами от проверенных производителей можно добиться по-настоящему качественного результата.',
    img: photo2,
    photoDescription: '',
  },
]

export const InformationBlock = () => {
  return (
    <div className={styles.main}>
      {InformationBlockItems.map(item => {
        return (
          <div key={item.id} className={styles.item}>
            <div className={styles.textBlock}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div>
              <div
                style={{
                  marginTop: '9px',
                  borderRadius: '10px',
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  width: '586px',
                  height: '330px',
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
