import { FC } from 'react'

import styles from './AppButton.module.scss'

type PropsType = {
  title: string
}

export const AppButton: FC<PropsType> = ({ title }) => {
  return (
    <div>
      <button type="button" className={styles.button}>
        {title}
      </button>
    </div>
  )
}
