import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'

import Loading from './component/Loading'

const Home = lazy(() => import('./page/Home'))
const Menu = lazy(() => import('./page/Menu/Menu'))
const Cart = lazy(() => import('./page/Cart/Cart'))
const Order = lazy(() => import('./page/Order/Order'))

function AnimateRouter() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes
        key={location.pathname}
        location={location}
      >
        <Route
          index
          element={
            <MotionPage>
              <Home />
            </MotionPage>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function MotionPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AnimateRouter />
      </Suspense>
    </BrowserRouter>
  )
}
