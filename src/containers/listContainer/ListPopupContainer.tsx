import { useSelector } from "react-redux";
import { RootState } from "../../store";
import isEmpty from "../../util/isEmpty";


export default function ListPopupContainer() {
    const todo = useSelector((state:RootState)=>state.todo);
    
    if(isEmpty(todo)){
        return null
    }
    return(
        <div style={{position:"absolute", left:"100%", top:"50px", border:"1px solid #eee", marginLeft:"10px",height:"500px", width:"350px", borderRadius:"10px"}}>
            <div>
                {todo.title}
            </div>
            <div>
                {todo.content}
            </div>
        </div>
    )
}