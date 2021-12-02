import React from "react"
import ConnectedDetail, { Detail } from './index'
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import { handleRead, handleEditElement, handleAddElement } from '../../features/Article/ArticleSlice'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Articles from "../../fixtures/Articles";


import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView
Enzyme.configure({ adapter: new Adapter() });


describe('<Detail />', () => {
  const initialState = { 
    articles: Articles,
    
   };
  const mockStore = configureStore();
  let store, component;

  beforeEach(() => {
    store = mockStore(initialState)

    component = mount(
    <Provider store={store}>
      <ConnectedDetail/>
    </Provider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(ConnectedDetail).length).toEqual(1)
  })

  it('+++ check Prop matches with initialState', () => {
      expect(component.find(Detail).prop('articles')).toEqual(initialState.articles)
  })

  it('+++ check actions on dispatching ', () => {
    let action

    store.dispatch(handleRead(true))
    store.dispatch(handleEditElement(2))
    store.dispatch(handleAddElement({
      id: 1,
      date: '2021-05-20',
      name: 'Test name',
      image: '',
      desc: 'test-1.',
      isRead: true
    }))

    action = store.getActions()
    
    expect(action[0].type).toBe("search/handleRead")
    expect(action[1].type).toBe("search/handleEditElement")
    expect(action[2].type).toBe("search/handleAddElement")
  })
})