import { Navigate, RouteObject } from 'react-router-dom'

export const RedirectRoute: RouteObject = {
  path: '*',
  element: <Navigate to="/" />
}
