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
      <ModalProvider value={{isOpen: true, type: 'exit'}}>
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
  
  it('+++ check Button exit', () => {
    component
      .find('button.btn__exit')
      .simulate('click');
  })
  
  it('+++ check Button Delete', () => {
    component = mount(
      <ModalProvider value={{isOpen: true, type: 'delete'}}>
        <Router>
          <Modal />
        </Router>
      </ModalProvider>
    )

    component
      .find('button.btn__exit')
      .simulate('click');
  })
})