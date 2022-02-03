import { PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeEvery } from "redux-saga/effects";
import { RootState } from "../../store";
import { doneToggle, removeTodo, TodoState } from "../todo/todoListSlice";
import  { setInit, setTodo } from "../todo/todoSlice";

function* removeSaga(action: PayloadAction<number>) {
    try {
        console.log("saga!!");
        const todo:TodoState  = yield select((state:RootState)=>state.todo);
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


function* toggleSaga(action:PayloadAction<number>) {
    try {
        console.log("saga!!");
        const todo:TodoState  = yield select((state:RootState)=>state.todo);
        if(todo.id === action.payload){
            yield put(setTodo({...todo,done:!todo.done}));
        }
    }catch (err){
        console.log(err);
    }
}

export function* toggleItemSaga () {
    yield takeEvery(doneToggle.type, toggleSaga);
}