import { Navigate } from 'react-router-dom'
import React from 'react'
import Home from '@/views/home/Home'
import Entry from '@/views/entry/Entry'
import NotFound from '@/components/not-found/NotFound'
import Error from '@/components/Error'

const Detail = React.lazy(() => import('@/views/detail/index'))

export const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entry',
    element: <Entry />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
