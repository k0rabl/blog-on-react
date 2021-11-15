import { configureStore } from "@reduxjs/toolkit"

import paginationSlice from "../features/Pagination/PaginationSlice"
import searchSlice from "../features/Article/ArticleSlice"
import modeSlice from "../features/edit/modeSlice"

export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    search: searchSlice,
    edit: modeSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
