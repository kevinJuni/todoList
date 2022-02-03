import { configureStore } from '@reduxjs/toolkit'
import { removeItemSaga, toggleItemSaga } from '../features/saga/todoSaga';
import todoListSlice from '../features/todo/todoListSlice'
import todoSlice from '../features/todo/todoSlice'
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

function* saga() {
  yield all([fork(removeItemSaga)]);
  yield all([fork(toggleItemSaga)]);
}
export const store = configureStore({
  reducer: {
    todoList:todoListSlice,
    todo:todoSlice
  },
  middleware: [sagaMiddleware],
  devTools:true
});
sagaMiddleware.run(saga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch