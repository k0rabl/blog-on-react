import React from "react"
import { Alert } from '../index'
import { mount } from 'enzyme'

import { BrowserRouter as Router } from 'react-router-dom'

import { AlertProvider } from '../../../context/AlertContext'


describe('<Alert />', () => {
  let component
  beforeEach(() => {
    
    jest.spyOn(React, 'useEffect').mockImplementation(f => f())
    component = mount(
      <AlertProvider value={{isOpen: true, message: ''}}>
        <Router>
          <Alert />
        </Router>
      </AlertProvider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(Alert).length).toEqual(1)

    // expect(component.find(Alert.prop))
    expect(component).toMatchSnapshot()
  })

  
//   it('+++ check alert is open', () => {
    
//     expect(component.prop('isOpen')).toBeFalsy()

//     expect(component).toMatchSnapshot()
//   })
})