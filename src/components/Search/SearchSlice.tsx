import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Articles from '../../fixtures/Articles'
import IArticle from '../article/IArticle'

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
    }
  },
})

export const { handleFilterString, handleFilterDate, handleDrop } = searchSlice.actions
export default searchSlice.reducer