import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputDatePicker from "../../componetns/common/InputDatePicker";
import Item from "../../componetns/listComponent/Item";
import { TodoState } from "../../features/todo/todoSlice";
import { RootState } from "../../store";
import { getToday } from "../../util/getToday";

export default function ListContainer() {
    const todoList = useSelector((state:RootState)=>state.todo);
    const [date, setDate] = useState<string | null>(getToday);
    const [list,setList] = useState<TodoState[]|null>(null);
    const [detail,setDetail] = useState<TodoState|null>(null);
    
    useEffect(()=>{
        setList(todoList.filter(item=>item.date === date))
    },[date, todoList])
    return(
        <div>
            <InputDatePicker value={date} setValue={setDate}/>
            <List> 
            {list && list.map(item=>
                
                <Item 
                    {...item}
                    setDetail={setDetail}/>
            )}
            </List>
            <div style={{position:"absolute", left:"100%"}}>
                    {detail && detail.id}
            </div>
        </div>
    )
}