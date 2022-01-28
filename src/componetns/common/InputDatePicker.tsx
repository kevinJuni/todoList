import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { AddDatePickerType } from "../../type/type";
import dayjs from "dayjs";


function InputDatePicker(props:AddDatePickerType) {
    return(
        <div>
            <LocalizationProvider 
                dateAdapter={AdapterDateFns}
            >
                <DatePicker
                    className="test"
                    label="날짜 입력"
                    inputFormat={"yyyy-MM-dd"}
                    mask={"____-__-__"}
                    value={props.value}
                    onChange={(newValue) => {
                    props.setValue(dayjs(newValue).format("YYYY-MM-DD"));
                    }}
                    renderInput={(params) => <TextField 
                        style={{width:'480px',margin:'10px', marginTop:'80px'}}
                        {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}
export default React.memo(InputDatePicker, (prevPorps, nextProps) => prevPorps.value === nextProps.value);