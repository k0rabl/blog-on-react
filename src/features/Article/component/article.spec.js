import React from "react"
import Article from  './index'
import { mount } from 'enzyme';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ModalProvider } from "../../../Context/ModalContext";
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
        <ModalProvider >
          <Router>
            <Article 
              match={{params: {id: 1}}}
              />
          </Router>
        </ModalProvider>
      </Provider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(Article).length).toEqual(1)
    expect(component).toMatchSnapshot()
  })

  
  it('+++ check Button delete', () => {
    component
      .find('button.btn-delete')
      .simulate('click');
  })
})