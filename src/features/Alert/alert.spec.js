import React from "react"
import { Alert } from './index'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it("Check on existing Alert", () => {
  const component = shallow(<Alert />)
  const wrapper = component.find('.alert')
  expect(wrapper.length).toBe(1)
})