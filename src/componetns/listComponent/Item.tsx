import { Button, Checkbox, IconButton, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ItemType } from "../../type/type";
import EastIcon from '@mui/icons-material/East';
import DeleteIcon from '@mui/icons-material/Delete';
import { doneToggle, removeTodo, TodoState } from "../../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import React from "react";
interface propsType extends TodoState {
    setDetail:React.Dispatch<React.SetStateAction<TodoState | null>>
}

function Item({setDetail,...props}:propsType) {
    const dispatch = useDispatch();


    return(
        <ListItem

        style={{border:'1px solid #eee',padding:'5px 15px'}}
        disableGutters
        secondaryAction={
            <div style={{paddingRight:'15px'}}>
                <Button style={{color:'black'}}onClick={()=>dispatch(removeTodo(props.id))} >
                    <DeleteIcon/>
                </Button>
                <Button style={{color:'black'}} onClick={()=>{console.log(props);setDetail(props)}}>
                    <EastIcon/>
                </Button>
            </div>
        }
        >
            <ListItemIcon>
                <Checkbox
                    onChange={()=>dispatch(doneToggle(props.id))}
                    checked={props.done}
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                />
              </ListItemIcon>
            <ListItemText primary={props.title} secondary={props.date} />
            
        </ListItem>
    )
}
export default React.memo(Item);