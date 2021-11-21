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

const persistedReducer = persistReducer(articlesPersistConfig, ArticleSlice)

export const store = configureStore({
  reducer: {
    pagination: paginationSlice, 
    search: persistedReducer, 
    edit: modeSlice
  }
})
 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
