import React from "react"
import Article from  './index'
import { Modal } from  '../../Modal'

import { mount } from 'enzyme';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ModalProvider } from "../../../Context/ModalContext";
import {
  BrowserRouter as Router,
} from "react-router-dom"

const mockProps = {
  id: 1, 
  date: '2021-01-01', 
  name: 'test', 
  image: 'testImg',
  desc: 'test descr', 
  isRead: true,
}


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
            <Article {...mockProps}/>
            <Modal />
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

    component
      .find('button.btn__exit')
      .simulate('click');
  })
})