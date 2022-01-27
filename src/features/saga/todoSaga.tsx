import { PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeEvery } from "redux-saga/effects";
import { RootState } from "../../store";
import { removeTodo, TodoState } from "../todo/todoListSlice";
import  { setInit } from "../todo/todoSlice";

function* removeSaga(action: PayloadAction<number>) {
    try {
        const  todo:TodoState  = yield select((state:RootState)=>state.todo);
        if(todo.id === action.payload){
            yield put(setInit());
        }
    } catch (err) {
        console.dir(err);
    }
}
export function* removeItemSaga() {
    yield takeEvery(removeTodo.type, removeSaga);
}