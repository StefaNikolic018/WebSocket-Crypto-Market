import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Fallback from '../Fallback'
import ProtectedRoute from './ProtectedRoute'
import useUserContext from '../../context/User/useUserContext'

// import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

// import Loader from '../Components/Loader'
const Dashboard = lazy(() => import('../Dashboard'))

export default function Router() {
  const { isLoggedIn } = useUserContext()

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/details/:symbol"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard isSpecific={true} />
            </ProtectedRoute>
          }
        />
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
