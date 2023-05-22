import { configureStore } from '@reduxjs/toolkit'
import homeSlicer from './features/home'
import { reducer } from './features/entry'

export const store = configureStore({
  reducer: {
    home: homeSlicer,
    entry: reducer
  }
})

export default store
