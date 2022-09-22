import styles from 'common/components/Body/MainPage/HowToOrder/HowToOrder.module.scss'
import { AppButton } from 'common/components/Buttons/AppButton/AppButton'

export const HowToOrder = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Как оформить заказ?</h2>
        <p className={styles.text}>
          Свяжитесь со мной одним из удобных для Вас способов: сообщения ВК, директ в Instagram либо
          через мессенджеры и укажите для каких часов Вам нужен ремешок. Далее мы обсудим все
          необходимые детали заказа.
        </p>
      </div>
      <div className={styles.buttonBlock}>
        <AppButton title="Подробнее" />
      </div>
    </div>
  )
}
