import React from "react"
import { Alert } from './index'
import { mount } from 'enzyme';

import {
  BrowserRouter as Router,
} from "react-router-dom"


import { AlertProvider } from "../../Context/AlertContext";

describe('<Alert />', () => {
  let component
  beforeEach(() => {
    component = mount(
      <AlertProvider value={{isOpen: true, message: 'test'}}>
        <Router>
          <Alert />
        </Router>
      </AlertProvider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(Alert).length).toEqual(1)
    expect(component).toMatchSnapshot()
  })
})