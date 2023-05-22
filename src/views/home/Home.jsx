import React, { memo, useEffect, useState } from 'react'
import { apiRequest } from '@/services/index'

export const Home = memo(() => {
  const [list, setList] = useState([])

  useEffect(() => {
    apiRequest
      .get({
        url: '/home/highscore'
      })
      .then(res => {
        console.log('[data]', res)
        setList(res.list)
      })
  }, [])
  return (
    <div>
      Home
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
})

export default Home
