import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonOne from "../../componetns/common/ButtonOne";
import InputDatePicker from "../../componetns/common/InputDatePicker";
import AddDatePicker from "../../componetns/mainComponent/AddDatePicker";
import AddInput from "../../componetns/mainComponent/AddInput";
import AddTextarea from "../../componetns/mainComponent/AddTextarea";
import AddTimePicker from "../../componetns/mainComponent/AddTimePicker";
import { addTodo, removeTodo } from "../../features/todo/todoSlice";
import { RootState } from "../../store";
import { getToday } from "../../util/getToday";

export default function AddContainer() {
    const [title, setTitle] = useState<string | null>(null);
    const [content, setContent] = useState<string | number | readonly string[] | undefined>("");
    const [time, setTime] = useState<string | null>("00:00");
    const [date, setDate] = useState<string | null>(getToday);
    const dispatch = useDispatch();
    return(
        <div>
            <InputDatePicker value={date} setValue={setDate}/>
            <AddTimePicker value={time} setValue={setTime}/>
            <AddInput value={title} label="title" setValue={setTitle}/>
            <AddTextarea value={content} label="title" setValue={setContent}/>
            <ButtonOne fn={()=>dispatch(addTodo({
                title:title,
                content:content,
                date:date,
                time:time
                }))} text="추가하기"/>
            
        </div>
    )
}