import React from "react"
import Article from  './index'
import { mount } from 'enzyme';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import {
  BrowserRouter as Router,
} from "react-router-dom"


describe('<Article />', () => {
  const initialState = { 
    edit: {        
      editMode: true,
    }
  };
  const mockStore = configureStore();
  let store, component;
  
  beforeEach(() => {
    store = mockStore(initialState)

    component = mount(
      <Provider store={store}>
        <Router>
          <Article 
            match={{params: {id: 1}}}
            />
        </Router>
      </Provider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(Article).length).toEqual(1)
  })

  
  it('+++ check Button delete', () => {
    component
      .find('button.btn-delete')
      .simulate('click');
  })
})