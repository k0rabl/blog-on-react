import React from "react"
import { Alert } from './index'
import { shallow } from 'enzyme';


it("Check on existing Alert", () => {
  const component = shallow(<Alert />)
  const wrapper = component.find('.alert')
  expect(wrapper.length).toBe(1)
})