import { TextField } from "@mui/material";
import React from "react";

interface propsDate {
    value:string|null,
    setValue:React.Dispatch<React.SetStateAction<string|null>>
}

function AddDatePicker(props:propsDate) {

    return(
        <div>
            <TextField
                id="time"
                label="time"
                type="time"
                value={props.value}
                onChange={(e)=>props.setValue(e.target.value)}
                sx={{ width: 480,margin:1 }}
            />
        </div>
    )
}
export default React.memo(AddDatePicker);