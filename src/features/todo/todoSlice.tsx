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
        date:"2022-01-23",
        time:null,
        done:false
    }
]
  
export const todoSlice = createSlice({
    name: 'todo',
    initialState:init,
    reducers: {
        addTodo: (state,action:PayloadAction<ItemType>) => {
            console.log("action"+ JSON.stringify(action),"state"+JSON.stringify(state) )
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
            alert("action"+ JSON.stringify(action));
            return state.filter(item=>item.id !== action.payload)
        },
        doneToggle : (state,action:PayloadAction<number>)=>{
            console.log(JSON.stringify(state) )
            return state.map(item=>item.id === action.payload ?  { ...item, done: !item.done } : item)
        }

    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, doneToggle } = todoSlice.actions

export default todoSlice.reducer