
import { FunctionComponent } from 'react'
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom'


import { PrivateRoute, RedirectRoute } from '.'

const ProtectedRoutes: RouteObject = {
  path: '/',
  children: []
}

const MainRoutes: FunctionComponent = () => {
  return useRoutes([
    {
      element: <PrivateRoute />,
      children: [ProtectedRoutes]
    },
    RedirectRoute
  ])
}

export const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}
