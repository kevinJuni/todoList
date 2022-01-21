import { TextareaAutosize } from "@mui/material";
import React from "react";

interface inputProps {
    label:string,
    value:string|number,
    setValue:React.Dispatch<React.SetStateAction<string | null>>
}
function AddInput(props:inputProps) {

    return(
        <div>
            <TextareaAutosize  value={props.value} onChange={(e)=>props.setValue(e.target.value)} style={{width:'480px',margin:'10px'}}/>
        </div>
    )
}
export default React.memo(AddInput);