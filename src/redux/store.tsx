import { configureStore } from "@reduxjs/toolkit"

import paginationSlice from '../components/pagination/PaginationSlice'
import searchSlice from "../components/Search/SearchSlice"

export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    search: searchSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
