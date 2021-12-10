import React from "react"
import { Modal } from  './index'
import { mount } from 'enzyme';

import { ModalProvider } from "../../Context/ModalContext";
import {
  BrowserRouter as Router,
} from "react-router-dom"


describe('<Modal />', () => {
  let component
  beforeEach(() => {
    component = mount(
      <ModalProvider value={{isOpen: true}}>
        <Router>
          <Modal />
        </Router>
      </ModalProvider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(Modal).length).toEqual(1)
    expect(component).toMatchSnapshot()
  })

  it('+++ check Button close', () => {
    component
      .find('button.btn__no')
      .simulate('click');
  })
  
  it('+++ check Button exit/delete', () => {
    component
      .find('button.btn__exit')
      .simulate('click');
  })
})