import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import isEmpty from "../../util/isEmpty";


export default function ListPopupContainer() {
    const todo = useSelector((state:RootState)=>state.todo);
    

    if(isEmpty(todo)){
        return null
    }
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