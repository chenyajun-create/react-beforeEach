import React from 'react'
import matchAuth from '../utils/matchAuth'
import { Navigate, useLocation } from 'react-router-dom'
export default function AuthRoute(props: { children: JSX.Element }) {
  const location = useLocation()
  const isLogin = localStorage.getItem('isLogin')
  const currentPath = location.pathname
  const condition =
    (currentPath === '/login' && !isLogin) ||
    (currentPath === '/management' && isLogin) ||
    (currentPath === '/404' && isLogin)

  const findPath = matchAuth(currentPath)

  if (condition) {
    return props.children
  }

  if (!findPath && isLogin) {
    return <Navigate to="/404" />
  }

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  if (isLogin) {
    return <Navigate to="/management" />
  }

  return props.children
}
