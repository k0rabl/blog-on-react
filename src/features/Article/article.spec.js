import React from "react"
import Article from  './component/index'
import { shallow } from 'enzyme';

import { store } from '../../redux/store'
import { Provider } from 'react-redux'


const setUp = props => shallow(
  <Provider store={store}>
    <Article {...props} />
  </Provider>
)

describe('<Article />', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  })

  it('renders <Article /> component', () => {
    expect(component).toMatchSnapshot()
  })
})