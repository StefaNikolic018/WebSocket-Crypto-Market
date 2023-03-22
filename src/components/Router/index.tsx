import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Loader from '../Loader'
import ProtectedRoute from './ProtectedRoute'
import useUserContext from '../../context/User/useUserContext'

const Details = lazy(() => import('../Details'))
const Fallback = lazy(() => import('../Fallback'))
const Dashboard = lazy(() => import('../Dashboard'))
const Favorites = lazy(() => import('../Favorites'))

export default function Router() {
  const { isLoggedIn } = useUserContext()

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route path="/details/:symbol" element={<Details />} />
        <Route
          path="/authority"
          element={
            isLoggedIn ? <Navigate to="/" replace /> : <Fallback type="auth" />
          }
        />
        <Route path="*" element={<Fallback type="404" />} />
      </Routes>
    </Suspense>
  )
}
