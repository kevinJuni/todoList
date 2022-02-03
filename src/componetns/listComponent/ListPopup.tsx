import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TodoState } from "../../features/todo/todoListSlice";
import { RootState } from "../../store";
import isEmpty from "../../util/isEmpty";

interface todo {
    todo:TodoState
}
export default function ListPopup({todo}:todo) {
    useEffect(()=>{
        console.log(todo)
    },[todo])

    
    return(
        <div className="popupwrap">
            <div className="popuptitle">
                {todo.title}
                <div className="popupdate">
                    {todo.date}
                </div>
            </div>
            <div className="popupcontent">
                {todo.content}
            </div>
            <div className={`popupbtn ${todo.done ? " popupbtnT" :" popupbtnF"}`}>
                {todo.done ? "완료" : "미완료"}
            </div>
        </div>
    )
}