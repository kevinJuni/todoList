import { TextField } from "@mui/material";
import React from "react";
import { AddInputType } from "../../type/type";


function AddInput(props:AddInputType) {

    return(
        <div>
            <TextField 
                label="title" 
                value={props.value || ""} 
                onChange={(e)=>props.setValue(e.target.value)} 
                style={{width:'480px',margin:'10px'}}/>
        </div>
    )
}
export default React.memo(AddInput);