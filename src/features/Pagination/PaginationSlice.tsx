import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PaginationState {
  active: number
}

const initialState: PaginationState = {
  active: 1,
}

export const paginationSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    increment: (state) => {
      state.active += 1
    },
    decrement: (state) => {
      state.active -= 1
    },
    setActive: (state, action: PayloadAction<number>) => {
      state.active = action.payload
    },
  },
})

export const { increment, decrement, setActive } = paginationSlice.actions
export default paginationSlice.reducer