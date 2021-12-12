import React from "react"
import ConnectedCalendar, { Calendar } from './index'
import { mount } from 'enzyme';

import {
  MemoryRouter,
 Router
} from "react-router-dom"

import {createMemoryHistory} from 'history'

import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";



describe('<Calendar />', () => {
  const mockStore = configureStore();
  let store, component, history;

  beforeEach(() => {
    store = mockStore({})
    history = createMemoryHistory()

    component = mount(
      <Provider store={store}>
        <Router history={history}>
          <ConnectedCalendar/>
        </Router>
      </Provider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(ConnectedCalendar).length).toEqual(1)
  })

  it('+++ render the component with search', () => {
    history = createMemoryHistory()

    component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search?date=2021-03-02']}>
          <ConnectedCalendar/>
        </MemoryRouter>
      </Provider>
    )

    expect(component).toMatchSnapshot()
    expect(component.find(Calendar).state('dateValue')).toBe('2021-03-02')
  })

  it('+++ check change date', () => {

    component
      .find('input.dateInput')
      .simulate('change', { target: { value: '2021-02-02' }});
      
    expect(history.location.search).toBe('?date=2021-02-02')
  })

  it('+++ check change date', () => {

    component
      .find('input.dateInput')
      .simulate('change', { target: { value: '' }});

    expect(history.location.search).toBe('')

      
  })
})