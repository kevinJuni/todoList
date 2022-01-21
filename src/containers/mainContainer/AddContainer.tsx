import { useState } from "react";
import AddDatePicker from "../../componetns/mainComponent/AddDatePicker";
import AddInput from "../../componetns/mainComponent/AddInput";
import AddTimePicker from "../../componetns/mainComponent/AddTimePicker";

export default function AddContainer() {
    const [title, setTitle] = useState<string | null>(null);
    const [contetn, setContent] = useState<string | null>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string | null>("00:00");
    return(
        <div>
            <AddDatePicker value={date} setValue={setDate}/>
            <AddTimePicker value={time} setValue={setTime}/>
            <AddInput value={title} label="title" setValue={setTitle}/>
            <AddInput value={contetn} label="title" setValue={setContent}/>
        </div>
    )
}