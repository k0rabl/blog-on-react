import reducer, { increment, decrement, setActive } from '../PaginationSlice'

test('+++ should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    { active: 1 }
  )
})

test('+++ should add 1 to active', () => {
  const previousState = { active: 1 }
  expect(reducer(previousState, increment())).toEqual(
    { active: 2 }
  )
})

test('+++ should substruct 1 from active', () => {
  const previousState = { active: 2 }
  expect(reducer(previousState, decrement())).toEqual(
    { active: 1 }
  )
})


test('should change active to number in params', () => {
  const previousState = { active: 2 }
  expect(reducer(previousState, setActive(5))).toEqual(
    { active: 5 }
  )
})