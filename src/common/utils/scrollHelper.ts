import OverlayScrollbars from 'overlayscrollbars'

export const scrollHelper = (
  instance: OverlayScrollbars,
  pathname: string,
  setWhiteHeader: (value: boolean) => void
) => {
  if (instance.scroll().position.y === 0 && pathname === '/main') {
    setWhiteHeader(false)
  } else setWhiteHeader(true)
}
