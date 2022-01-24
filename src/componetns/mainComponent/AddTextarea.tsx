import { TextareaAutosize } from "@mui/material";
import React from "react";
import { AddTextareaType } from "../../type/type";


function AddTextarea(props:AddTextareaType) {
    return(
        <div>
            <TextareaAutosize  
                value={props.value} 
                onChange={(e)=>props.setValue(e.target.value)} 
                minRows={3}
                maxRows={10} 
                style={{width:'470px',margin:'10px',border:'1px solid #c4c4c4'}}/>
        </div>
    )
}
export default React.memo(AddTextarea);