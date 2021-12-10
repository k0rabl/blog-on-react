import React from "react"
import Pagination from './index'
import { mount } from 'enzyme';

import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";

import { setActive, decrement, increment } from '../PaginationSlice'

describe('<Pagination />', () => {

  const initialState = { 
    pagination: {        
      active: 2,
    }
  }
  
  const mockStore = configureStore()
  let store, component

  beforeEach(() => {
    store = mockStore(initialState)

    component = mount(
      <Provider store={store}>
          <Pagination amount={3}/>
      </Provider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(Pagination).length).toEqual(1)
    expect(component).toMatchSnapshot()
  })

  it('+++ check Button of number page', () => {

    component
      .find('button.numberPage-3')
      .simulate('click')

      expect(component).toMatchSnapshot()
  })

  it('+++ check arrow Button prev', () => {
    component
      .find('button.prev')
      .simulate('click')

      
    expect(component).toMatchSnapshot()
  })

  it('+++ check arrow Button next', () => {
    component
      .find('button.next')
      .simulate('click')

      
    expect(component).toMatchSnapshot()
  })

  it('+++ check actions on dispatching ', () => {
    let action

    store.dispatch(setActive(2))
    store.dispatch(decrement())
    store.dispatch(increment())

    action = store.getActions()
    
    expect(action[0].type).toBe("active/setActive")
    expect(action[1].type).toBe("active/decrement")
    expect(action[2].type).toBe("active/increment")
  })
})