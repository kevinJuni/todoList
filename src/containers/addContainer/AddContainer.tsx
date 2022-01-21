import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddDatePicker from "../../componetns/mainComponent/AddDatePicker";
import AddInput from "../../componetns/mainComponent/AddInput";
import AddTextarea from "../../componetns/mainComponent/AddTextarea";
import AddTimePicker from "../../componetns/mainComponent/AddTimePicker";
import { removeTodo } from "../../features/todo/todoSlice";
import { RootState } from "../../store";

export default function AddContainer() {
    const [title, setTitle] = useState<string | null>(null);
    const [content, setContent] = useState<string | number | readonly string[] | undefined>("");
    const [time, setTime] = useState<string | null>("00:00");
    const [date, setDate] = useState<Date | null>(null);
    const dispatch = useDispatch()

    return(
        <div>
            <AddDatePicker value={date} setValue={setDate}/>
            <AddTimePicker value={time} setValue={setTime}/>
            <AddInput value={title} label="title" setValue={setTitle}/>
            <AddTextarea value={content} label="title" setValue={setContent}/>
            <div onClick={()=>dispatch(removeTodo({title:title,content:content}))}>
                aaa
            </div>
        </div>
    )
}