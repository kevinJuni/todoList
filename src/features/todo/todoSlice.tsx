import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './todoListSlice';



export interface Todo{
    id:number,
    title:string,
    content:string,
    date:string,
    time:string,
    done:boolean
}  
export const init = {} as TodoState;
  
export const todoSlice = createSlice({
    name: 'todo',
    initialState:init,
    reducers: {
        setTodo:(state,action:PayloadAction<TodoState>)=>{
            console.log("setTodo..!");
            return state = action.payload;
        },
        setInit:(state)=>{
            console.log("setInit..!");
            return state = {} as TodoState;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTodo, setInit } = todoSlice.actions

export default todoSlice.reducer