import { createSlice } from '@reduxjs/toolkit'
const homeSlicer = createSlice({
  name: 'home',
  initialState: {
    total: 10
  },
  reducers: {
    test(state, { type, payload }) {}
  }
})

export const { test } = homeSlicer.actions

export default homeSlicer.reducer
