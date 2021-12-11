import 
  reducer, 
  { 
    handleRead, 
    handleDeleteElement,
    handleEditElement,
    handleAddElement
  } 
from './ArticleSlice'

import Articles from '../../fixtures/Articles'

const mockInitialState =  { 
  filteredArticles: [],
  articles: [
    {
      id: 1,
      date: '2021-05-20',
      name: 'Test name',
      preview: 'Test prevt.',
      image: '',
      desc: 'Test descr',
      isRead: false
    },
    {
      id: 5,
      date: '2021-05-20',
      name: 'Test name 5',
      preview: 'Test prevt 5.',
      image: '',
      desc: 'Test descr 5',
      isRead: false
    }
  ]
}

const mockEditedArticle = {
  id: 1,
  date: '2021-05-20',
  name: 'Edit name',
  preview: 'Edit prevt.',
  image: '',
  desc: 'Edit descr',
  isRead: false
}


const mockNewArticle = {
  id: 2,
  date: '2021-05-20',
  name: 'New name',
  preview: 'New prevt.',
  image: '',
  desc: 'New descr',
  isRead: false
}

test('+++ should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    filteredArticles: Articles,
    articles: Articles
  })
})

test('+++ should read an article', () => {
  expect(reducer(mockInitialState, handleRead(1))).toEqual({
    ...mockInitialState,
    articles: [
      {
        ...mockInitialState.articles[0],
        isRead: true
      },
      mockInitialState.articles[1]
    ] 
  })
})


test('+++ should delete an article', () => {
  expect(reducer(mockInitialState, handleDeleteElement(1))).toEqual({ 
    filteredArticles: [],
    articles: [
      mockInitialState.articles[1]
    ]
  })
})

test('+++ should edit an article', () => {
  expect(reducer(mockInitialState, handleEditElement(mockEditedArticle))).toEqual({ 
    filteredArticles: [],
    articles: [
      mockEditedArticle,
      mockInitialState.articles[1]
    ]
  })
})

test('+++ should add an article', () => {
  expect(reducer(mockInitialState, handleAddElement(mockNewArticle))).toEqual({ 
    filteredArticles: [],
    articles: [
      ...mockInitialState.articles,
      mockNewArticle
    ]
  })
})