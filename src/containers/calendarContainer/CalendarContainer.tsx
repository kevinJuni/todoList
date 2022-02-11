import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getToday } from "../../util/getToday";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { TodoState } from "../../features/todo/todoListSlice";
import Work from "../../componetns/calendarComponent/Work";



export default function CalendarContainer() {
    const [value, onChange] = useState<string>(getToday);
    const [dayList, setDayList] = useState<TodoState[]>([]);
    const todoList = useSelector((state:RootState)=>state.todoList);

    const formatDate = (date:Date) =>{
        let chDate = dayjs(date).format('DD');
        return chDate;
    };
    const onDateChange = (date:Date) => { 
        onChange( dayjs(date).format("YYYY-MM-DD"));
    };
    const onTilecontent = (date:Date):JSX.Element|null => {
        let dateString = dayjs(date).format("YYYY-MM-DD");
        let chi:JSX.Element[] = [];
        let til =  React.createElement("div",{children:chi});
        for(let i=0;i<todoList.length;i++){
            if(dateString === todoList[i].date){
                chi.push(<span style={{width:"8px",height:"7px", background:"red",display:"inline-block",margin:"0 1px", borderRadius:"50%"}}></span>);
            }
        }
        return til;
    }
    
    // const onGetDayList = (value:Date) => {
    //     setDayList([])
    //     let dateString = dayjs(value).format("YYYY-MM-DD");
    //     let list:TodoState[] = [];
    //     for(let i=0;i<todoList.length;i++){
    //         if(dateString === todoList[i].date){
    //             list.push(todoList[i])
    //         }
    //     }
    //     setDayList(dayList.concat(list))
    // }

    useEffect(()=>{
        let list:TodoState[] = [];
        for(let i=0;i<todoList.length;i++){
            if(value === todoList[i].date){
                list.push(todoList[i]);
            }
        }
        if(list.length === 0 ){
            setDayList([]);
        }else{
            setDayList(list);
        }
    },[value, todoList])
    return(
        <div >
            <Calendar 
                onChange={(date:Date)=>onDateChange(date)}
                formatDay={(locale, date) => formatDate(date)}
                tileContent={({ activeStartDate, date, view }) => onTilecontent(date)} 
                // onClickDay={(value, event) => onGetDayList(value)}
                calendarType="US" locale="ko"  />
            <div style={{marginTop:"10px"}}>
                {dayList.map(item=>
                    <Work item={item}/>
                )}
            </div>
        </div>
    )
}