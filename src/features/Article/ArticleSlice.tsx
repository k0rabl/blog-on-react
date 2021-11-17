import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Articles from '../../fixtures/Articles'
import IArticle from './component/IArticle'

export interface PaginationState {
  filteredArticles: IArticle[]
}

const initialState: PaginationState = {
  filteredArticles: Articles
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleFilterString: (state, action: PayloadAction<string>) => {
      state.filteredArticles = Articles.filter(element => {
        return element.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
      })
    },
    handleFilterDate: (state, action: PayloadAction<string>) => {
      state.filteredArticles = Articles.filter(element => {
        return element.date.indexOf(action.payload) > -1
      })
    },
    handleDrop: state => {
      state.filteredArticles = Articles
    },
    handleRead: (state, action: PayloadAction<number>) => {
      state.filteredArticles =  state.filteredArticles.map((element: IArticle) => ({
        ...element,
        isRead: element.id === action.payload ? true : element.isRead
      }))
    },
    handleDeleteElement: (state, action: PayloadAction<number>) => {
      state.filteredArticles = state.filteredArticles.filter(element => {
        return element.id !== action.payload
      })
    },
    handleEditElement: (state, action: PayloadAction<IArticle>) => {
      state.filteredArticles = state.filteredArticles.map((element: IArticle) => {
        if(element.id === action.payload.id)  
          return action.payload

        return element
      })
    },
    handleAddElement: (state, action: PayloadAction<IArticle>) => {
      state.filteredArticles.push(action.payload)
    }
  },
})

export const { 
  handleFilterString, 
  handleFilterDate, 
  handleDrop, 
  handleRead, 
  handleDeleteElement,
  handleEditElement,
  handleAddElement
} = searchSlice.actions
export default searchSlice.reducer