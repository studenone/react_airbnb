import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css' // 重置css
import '@/assets/css/index.less'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from '@/router'
import { store } from '@/store'

import App from './App'

const router = createBrowserRouter(routes) //编程式路由
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Suspense fallback={<div>临时处理</div>}>
    <RouterProvider router={router} fallbackElement={<div>loading</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </Suspense>
  // </React.StrictMode>
)
