import reducer, { handleMode } from './modeSlice'

const mockState = { editMode: false }

test('+++ should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(mockState)
})

test('+++ should edit is true', () => {
  expect(reducer(mockState, handleMode())).toEqual(
    { editMode: true }
  )
})