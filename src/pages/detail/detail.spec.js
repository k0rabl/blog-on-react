// import 'jsdom-global/register'
import React from "react"
import ConnectedDetail, { Detail } from './index'
import { shallow, mount } from 'enzyme';

import {
  BrowserRouter as Router,
} from "react-router-dom"

import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import { handleRead, handleEditElement, handleAddElement } from '../../features/Article/ArticleSlice'

import Articles from "../../fixtures/Articles";


// import jsdom from 'jsdom'
// const { JSDOM } = jsdom;
// const doc = new JSDOM(`<!doctype html><html><body></body></html>`)
// global.document = doc
// global.window = doc.defaultView

describe('<Detail />', () => {
  const initialState = { 
    search: {        
      articles: Articles,
    },
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
        <Router>
          <ConnectedDetail 
            match={{params: {id: 1}}}
            />
        </Router>
      </Provider>
    )
  })

  it('+++ render the component', () => {
    expect(component.find(ConnectedDetail).length).toEqual(1)
  })

  it('+++ get id from props', () => {
    expect(component.find(ConnectedDetail).props().match.params.id).toEqual(1)
  })

  it('+++ check Button back', () => {
    component
      .find('button.button-second')
      .simulate('click');
  })

  it('+++ check Button primary', () => {
    component
      .find('button.button-primary')
      .simulate('click');
  })

  it('should base64 file encoding', () => {

    const mockFile = new File(["image1"], "image1.jpg", { type: 'image/*' })

    component.find('input#file').simulate('change', {
      target: {
        files: [mockFile]
      }
    })
  })

  it('should change input', () => {

    component.find('input.input__name').simulate('change', {
      target: {
        value: 'test'
      }
    })
    expect(component).toMatchSnapshot()
  })

  it('+++ check Prop matches with initialState', () => {
      expect(component.find(Detail).prop('articles')).toEqual(initialState.search.articles)
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