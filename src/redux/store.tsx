import { configureStore } from "@reduxjs/toolkit"

import paginationSlice from "../features/Pagination/PaginationSlice"
import ArticleSlice from "../features/Article/ArticleSlice"
import modeSlice from "../features/edit/modeSlice"

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const articlesPersistConfig = {
  key: 'articles',
  storage: storage,
}

const persistedArticleSlice = persistReducer(articlesPersistConfig, ArticleSlice)

export const store = configureStore({
  reducer: {
    pagination: paginationSlice, 
    search: persistedArticleSlice, 
    edit: modeSlice
  }
})
 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
