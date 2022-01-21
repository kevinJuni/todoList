import { TextareaAutosize } from "@mui/material";
import React from "react";

interface inputProps {
    label:string,
    value:string | number | readonly string[] | undefined,
    setValue:React.Dispatch<React.SetStateAction<string | number | readonly string[] | undefined>>
}
function AddInput(props:inputProps) {
    return(
        <div>
            <TextareaAutosize  value={props.value} onChange={(e)=>props.setValue(e.target.value)} minRows={3} style={{width:'470px',margin:'10px',border:'1px solid #c4c4c4'}}/>
        </div>
    )
}
export default React.memo(AddInput);