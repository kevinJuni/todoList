import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { getToday } from "../../util/getToday";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Aaaaa () {
    return(
        <div>
            aa
        </div>
    )
}

export default function CalendarContainer() {
    const [value, onChange] = useState<string>(getToday);
    const formatDate = (date:Date) =>{
        let chDate = dayjs(date).format('DD')
        return chDate;
    };
    const onDateChange = (date:Date) => { 
        onChange( dayjs(date).format("YYYY-MM-DD"))
    };
    
    
    
    return(
        <div >
            <Calendar onChange={(date:Date)=>onDateChange(date)} formatDay={(locale, date) => formatDate(date)}  calendarType="US" locale="ko"  />
        </div>
    )
}