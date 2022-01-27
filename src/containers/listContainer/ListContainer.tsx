import { List } from "@mui/material";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputDatePicker from "../../componetns/common/InputDatePicker";
import Item from "../../componetns/listComponent/Item";
import { removeTodo, TodoState } from "../../features/todo/todoListSlice";
import {  setTodo } from "../../features/todo/todoSlice";
import { RootState } from "../../store";
import { getToday } from "../../util/getToday";

export default function ListContainer() {
    const todoList = useSelector((state:RootState)=>state.todoList);
    const [date, setDate] = useState<string | null>(getToday);
    const [list,setList] = useState<TodoState[] | null>(null);
    const dispatch = useDispatch();
    const removeItem =(id:number) =>{
        dispatch(removeTodo(id));
    }
    const setTodoFn = (item:TodoState) =>{
        dispatch(setTodo(item));
    }
    
    useEffect(()=>{
        setList(todoList.filter(item=>item.date === date));
    },[date, todoList])
    return(
        <div>
            <InputDatePicker value={date} setValue={setDate}/>
            <List> 
            {list && list.map(item=>
                    <Item 
                    setTodoFn={setTodoFn}
                    removeItem={removeItem}
                    {...item}
                    />
                
            )}
            </List>
        </div>
    )
}