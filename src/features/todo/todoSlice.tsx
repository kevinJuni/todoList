import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface TodoState {
    id: number,
    title:string,
    content:string
}
interface payloadType {
    title:string | null,
    content:string | number | readonly string[] | undefined
}
  
const init: TodoState[] = []
  
export const todoSlice = createSlice({
    name: 'todo',
    initialState:init,
    reducers: {
        addTodo: (state) => {
            alert("action")
        },
        removeTodo: (state, action:PayloadAction<payloadType>) => {
            alert("action"+ JSON.stringify(action))
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer