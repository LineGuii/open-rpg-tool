import { FunctionComponent } from 'react'
import { Navigate, Outlet, RouteProps } from 'react-router-dom'

export const PrivateRoute: FunctionComponent<RouteProps> = () => {
  const isLoggedIn = true // TODO: remove mock

  return isLoggedIn ? <Outlet /> : <Navigate to={'/unauthorized'} />
}
