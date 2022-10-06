import { Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from 'common/components/Body/HomePage/HomePage'
import { path } from 'common/enums/enums'
import { Catalog } from 'features/Catalog/Catalog'

export const RoutesPages = () => {
  const routes = [
    { path: path.HOME, component: <HomePage /> },
    { path: path.CATALOG, component: <Catalog /> },
    {
      path: '*',
      component: (
        <h1
          style={{
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          404
        </h1>
      ),
    },
  ]

  return (
    <Routes>
      <Route path="/" element={<Navigate to={path.HOME} />} />
      {routes.map(route => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  )
}
