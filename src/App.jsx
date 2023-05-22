import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'></div>
      <div className='main'>{<Outlet />}</div>
      <div className='footer'></div>
    </div>
  )
})

export default App
