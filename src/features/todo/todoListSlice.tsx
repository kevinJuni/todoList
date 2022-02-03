import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemType } from '../../type/type';
import { getToday } from '../../util/getToday';

export interface TodoState extends ItemType {
    id: number,
    done:boolean
}

  
export const init: TodoState[] = [
    {
        id:1,
        title:"111",
        content:"1111",
        date:getToday,
        time:null,
        done:false
    },
    {
        id:2,
        title:"111121",
        content:"121",
        date:getToday,
        time:null,
        done:false
    }
]
  
export const todoListSlice = createSlice({
    name: 'todoList',
    initialState:init,
    reducers: {
        addTodo: (state,action:PayloadAction<ItemType>) => {
            console.log("addTodo..!");
            return [...state,{
                id:state.length+1,
                title:action.payload.title,
                content:action.payload.content,
                date:action.payload.date,
                time:action.payload.time,
                done:false
            }]
        },
        removeTodo: (state, action:PayloadAction<number>) => {
            console.log("removeTodo..!");
            return state.filter(item=>item.id !== action.payload);
        },
        doneToggle : (state,action:PayloadAction<number>)=>{
            console.log("doneToggle..!"); 
            return state.map(item=>{
                return item.id === action.payload ?  { ...item, done: !item.done } : item
            })
        }

    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, doneToggle } = todoListSlice.actions

export default todoListSlice.reducer