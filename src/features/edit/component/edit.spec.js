import React from "react"
import ConnectedEdit, { Edit } from './index'
import { mount } from 'enzyme';

import {
  BrowserRouter as Router
} from "react-router-dom"

import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";



describe('<Edit />', () => {
  const initialState = { 
    edit: {        
      editMode: true,
    }
  };

  const initialStateFalse = { 
    edit: {        
      editMode: false,
    }
  };

  const mockStore = configureStore();
  let store, component;

  beforeEach(() => {
    store = mockStore(initialState)

    component = mount(
      <Provider store={store}>
        <Router>
          <ConnectedEdit/>
        </Router>
      </Provider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(ConnectedEdit).length).toEqual(1)
  })

  it('+++ check Button edit', () => {

    component
      .find('button.btn-close')
      .simulate('click');
      
  })

  it('+++ check Button edit', () => {
    store = mockStore(initialStateFalse)

    component = mount(
      <Provider store={store}>
        <Router>
          <ConnectedEdit/>
        </Router>
      </Provider>
    )

    component
      .find('button.btn-edit')
      .simulate('click');
      
  })
})