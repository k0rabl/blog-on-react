import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Articles from '../../fixtures/Articles'
import IArticle from './component/IArticle'

export interface PaginationState {
  filteredArticles: IArticle[]
  articles: IArticle[]
}

const initialState: PaginationState = {
  filteredArticles: Articles,
  articles: Articles
}

export const articlesSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleRead: (state, action: PayloadAction<number>) => {
      state.articles =  state.articles.map((element: IArticle) => ({
        ...element,
        isRead: element.id === action.payload ? true : element.isRead
      }))
    },
    handleDeleteElement: (state, action: PayloadAction<number>) => {
      state.articles = state.articles.filter(element => {
        return element.id !== action.payload
      })
    },
    handleEditElement: (state, action: PayloadAction<IArticle>) => {
      state.articles = state.articles.map((element: IArticle) => {
        if(element.id === action.payload.id)  
          return action.payload

        return element
      })
    },
    handleAddElement: (state, action: PayloadAction<IArticle>) => {
      state.articles.push(action.payload)
    }
  }
})

export const { 
  handleRead, 
  handleDeleteElement,
  handleEditElement,
  handleAddElement
} = articlesSlice.actions
export default articlesSlice.reducer