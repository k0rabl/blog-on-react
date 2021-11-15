import { createSlice } from '@reduxjs/toolkit'

export interface ModeState {
  editMode: boolean
}

const initialState: ModeState = {
  editMode: false
}

export const modeSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    handleMode: (state) => {
      state.editMode = !state.editMode
    }
  },
})

export const { handleMode } = modeSlice.actions
export default modeSlice.reducer