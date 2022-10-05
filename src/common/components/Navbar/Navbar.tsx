import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.scss'

type ActionType = {
  [key: string]: boolean
}

type PropsType = {
  whiteHeader: boolean
}

export const Navbar: FC<PropsType> = ({ whiteHeader }) => {
  const whiteHeaderStyle = whiteHeader ? styles.whiteHeader : ''

  const setAction = ({ isActive }: ActionType) =>
    isActive
      ? `${styles.link} ${styles.active} ${whiteHeaderStyle}`
      : `${styles.link} ${whiteHeaderStyle}`

  return (
    <nav className={styles.main}>
      <NavLink to="/home" className={setAction}>
        Главная
      </NavLink>
      <NavLink to="/catalog" className={setAction}>
        Товары
      </NavLink>
      <NavLink to="/contacts" className={setAction}>
        Контакты
      </NavLink>
    </nav>
  )
}
