import { TodoState } from "../../features/todo/todoListSlice";
import DoneIcon from '@mui/icons-material/Done';
interface Props{
    item:TodoState
}

function Work({item}:Props) {
   
    return(
        <div style={{padding:"5px", borderBottom:"1px solid #eee"}}>
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span style={{fontWeight:"bolder"}}>
                    {item.title}
                    <span style={{marginLeft:"15px"}}> 
                        {item.done?<DoneIcon style={{color:"blue"}}/>:null}
                    </span>
                </span>
                <span style={{fontSize:"12px", padding:"4px"}}>
                    {item.date}
                </span>
            </div>
            <div>
                {item.content}                
            </div>
        </div>
    )
}
export default Work;