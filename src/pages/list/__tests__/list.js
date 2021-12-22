import React from "react"
import ConnectedList, { List } from '../index'
import { mount } from 'enzyme';

import {
  BrowserRouter,
  Router
} from "react-router-dom"

import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import { setActive } from '../../../features/Pagination/PaginationSlice'

import Articles from "../../../fixtures/Articles";
import {createMemoryHistory} from 'history'


describe('<List />', () => {
  const initialState = { 
    search: {        
      articles: Articles,
    },
    edit: {        
      editMode: true,
    },
    pagination: {
      active: 1
    }
  };

  const initialStateWtihOne = { 
    search: {        
      articles: [Articles[0]],
    },
    edit: {        
      editMode: true,
    },
    pagination: {
      active: 1
    }
  }

  const mockStore = configureStore()
  let store, component, history

  beforeEach(() => {
    store = mockStore(initialState)
    history = createMemoryHistory()

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedList/>
        </BrowserRouter>
      </Provider>
    )
  })

  
  it('+++ render the component', () => {
    expect(component.find(ConnectedList).length).toEqual(1)
  })

  it('+++ render the component with 1 article', () => {
    store = mockStore(initialStateWtihOne)

    const componentSearch = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedList />
        </BrowserRouter>
      </Provider>
    )

    expect(componentSearch.find(ConnectedList).length).toEqual(1)
    expect(componentSearch).toMatchSnapshot()
  })
  
  it('+++ check text search', () => {
    history.push('/search?string=how');
    
    const componentSearch = mount(
      <Provider store={store}>
        <Router history={history}>
          <ConnectedList />
        </Router>
      </Provider>
    )
    
    expect(componentSearch.find(ConnectedList).length).toEqual(1)
  })

  it('+++ check calendar search', () => {
    history.push('/search?date=2021-12-10');
    
    component = mount(
      <Provider store={store}>
        <Router history={history}>
          <ConnectedList />
        </Router>
      </Provider>
    )
    
    expect(component.find(ConnectedList).length).toEqual(1)
  })

  it('+++ check actions on dispatching ', () => {
    let action

    store.dispatch(setActive(1))
    action = store.getActions()
    
    expect(action[0].type).toBe("active/setActive")
  })
})