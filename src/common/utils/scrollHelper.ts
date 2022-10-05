import OverlayScrollbars from 'overlayscrollbars'

import { path } from 'common/enums'

export const scrollHelper = (
  instance: OverlayScrollbars,
  pathname: string,
  setWhiteHeader: (value: boolean) => void
) => {
  if (instance.scroll().position.y === 0 && pathname === path.HOME) {
    setWhiteHeader(false)
  } else setWhiteHeader(true)
}
