import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import { getToday } from "../../util/getToday";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { RootState } from "../../store";
import { useSelector } from "react-redux";


function Aaaaa () {
    return(
        <div>
            aa
        </div>
    )
}

export default function CalendarContainer() {
    const [value, onChange] = useState<string>(getToday);
    const todoList = useSelector((state:RootState)=>state.todoList);

    const formatDate = (date:Date) =>{
        let chDate = dayjs(date).format('DD');
        return chDate;
    };
    const onDateChange = (date:Date) => { 
        onChange( dayjs(date).format("YYYY-MM-DD"));
    };
    const onTilecontent = (date:Date):JSX.Element|null => {
        let dateString = dayjs(date).format("YYYY-MM-DD")
        let chi:JSX.Element[] = [];
        let til =  React.createElement("div",{children:chi});
        for(let i=0;i<todoList.length;i++){
            if(dateString === todoList[i].date){
                chi.push(<span style={{width:"8px",height:"7px", background:"red",display:"inline-block",margin:"0 1px", borderRadius:"50%"}}></span>);
            }
        }
        return til;
    }
    
    
    return(
        <div >
            <Calendar 
                onChange={(date:Date)=>onDateChange(date)}
                formatDay={(locale, date) => formatDate(date)}
                tileContent={({ activeStartDate, date, view }) =>  onTilecontent(date)} 
                calendarType="US" locale="ko"  />
        </div>
    )
}