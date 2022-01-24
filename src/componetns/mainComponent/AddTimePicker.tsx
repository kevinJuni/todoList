import { TextField } from "@mui/material";
import React from "react";
import { AddTimePickerType } from "../../type/type";


function AddTimePicker(props:AddTimePickerType) {

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
export default React.memo(AddTimePicker);