import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface propsDate {
    value:Date|null,
    setValue:React.Dispatch<React.SetStateAction<Date|null>>
}

function AddDatePicker(props:propsDate) {

    return(
        <div>
            <LocalizationProvider 
                dateAdapter={AdapterDateFns}
            >
                <DatePicker
                    className="aaaaaa"
                    label="날짜 입력"
                    value={props.value}
                    onChange={(newValue) => {
                    props.setValue(newValue);
                    }}
                    renderInput={(params) => <TextField 
                        style={{width:'480px',margin:'10px', marginTop:'80px'}}
                        {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}
export default React.memo(AddDatePicker, (prevPorps, nextProps) => prevPorps.value === nextProps.value);