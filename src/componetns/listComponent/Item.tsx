import { Button, Checkbox, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import DeleteIcon from '@mui/icons-material/Delete';
import { doneToggle, TodoState } from "../../features/todo/todoListSlice";
import { useDispatch } from "react-redux";
import React from "react";
interface propsType extends TodoState {
    setTodoFn:(item:TodoState)=>void,
    removeItem: (id:number)=>void,
}

function Item({setTodoFn, removeItem,  ...props}:propsType) {
    const dispatch = useDispatch();
   
    return(
        <ListItem
        style={{border:'1px solid #eee',padding:'5px 15px'}}
        disableGutters
        secondaryAction={
            <div style={{paddingRight:'15px'}}>
                <Button style={{color:'black'}} onClick={()=>removeItem(props.id)}>
                    <DeleteIcon/>
                </Button>
                <Button style={{color:'black'}} onClick={()=>setTodoFn(props)}>
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
export default React.memo(Item,(pre,next)=>pre.id === next.id);