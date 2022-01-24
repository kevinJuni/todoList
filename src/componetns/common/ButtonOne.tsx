import { Button } from "@mui/material";
import React from "react";

interface BtnType {
    fn: ()=> void,
    text:string
}
function ButtonOne(props:BtnType) {
    return(
        <Button 
            variant="contained" 
            onClick={props.fn} 
            style={{width:'30%',height:'50px'}}
            >
            {props.text}
        </Button>
    )
}
export default React.memo(ButtonOne);