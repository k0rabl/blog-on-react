// import 'jsdom-global/register'
import React from "react"
import ConnectedDetail, { Detail } from '../index'
import { mount, render } from 'enzyme';

import {
  Router,
  Route
} from "react-router-dom"

import {createMemoryHistory} from 'history'

import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import { handleRead, handleEditElement, handleAddElement } from '../../../features/Article/ArticleSlice'

import Articles from "../../../fixtures/Articles";
import { AlertProvider } from "../../../context/AlertContext";

// const history = createMemoryHistory()

// function renderWithRouterMatch(
//   ui,
//   {
//     path = "/",
//     route = "/",
//     history = createMemoryHistory({ initialEntries: [route] })
//   } = {}
// ) {
//   const mockStore = configureStore();

//   const store = mockStore({
//     search: {        
//       articles: Articles,
//     },
//     edit: {        
//       editMode: true,
//     }
//   })
//   return {
//     ...mount(
      
//       <Provider store={store}>
//         <AlertProvider>
//           <Router history={history}>
//             <Route path={path} component={ui} />
//           </Router>
//         </AlertProvider>
//       </Provider>
//     )
//   };
// }

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
  let store, component
  
  const history = createMemoryHistory({ initialEntries: ["/1"] })

  beforeEach(() => {
    store = mockStore(initialState)

    component = mount(
      <Provider store={store}>
        <AlertProvider>
          <Router history={history} >
            <Route path="/:id" component={ConnectedDetail} />
          </Router> 
        </AlertProvider>
      </Provider>
    )
  })

  it('+++ render the component', () => {
    // expect(component.find(ConnectedDetail).length).toEqual(1)
    // renderWithRouterMatch(ConnectedDetail, {
    //   route: "/1",
    //   path: "/:id"
    // });
    expect(component).toMatchSnapshot()
  })

  
  it('+++ render witchout id', () => {
    store = mockStore(initialState)

    component = mount(
      <Provider store={store}>
        <AlertProvider>
          <Router history={history} >
            <ConnectedDetail />
          </Router> 
        </AlertProvider>
      </Provider>
    )
    
    expect(component).toMatchSnapshot()
  })

  it('+++ check Button back', () => {
    component
      .find('button.button-back')
      .simulate('click')
  })

  it('+++ check Button save', () => {
    component
      .find('button.button-save')
      .simulate('click')
      
  })

  it('+++ should base64 file encoding', () => {
    const file = new File([""], 'darthvader.png', {type: 'image/*'});

    component.find('input#file').simulate('change', {
      target: {
        files: [file]
      }
    })
  })
  
  it('+++ should fet errror size', () => {
    const file = new File([""], 'darthvader.png', {type: 'image/*'})
    Object.defineProperty(file, 'size', { value: 1024 * 5024 + 1 })

    component.find('input#file').simulate('change', {
      target: {
        files: [file]
      }
    })       
  })

  it('+++ should change input', () => {

    component.find('input.input__name').simulate('change', {
      target: {
        value: 'test'
      }
    })
  })

  it('+++ check Prop matches with initialState', () => {
    expect(component.find(Detail).prop('articles')).toEqual(initialState.search.articles)
      
  })

  it('+++ check actions on dispatching ', () => {
    let action
    store = mockStore(initialState)

    component = mount(
      <Provider store={store}>
        <AlertProvider>
          <Router history={history} >
            <ConnectedDetail />
          </Router> 
        </AlertProvider>
      </Provider>
    )

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