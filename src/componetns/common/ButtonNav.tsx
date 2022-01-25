import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DomainVerificationRoundedIcon from '@mui/icons-material/DomainVerificationRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link } from "react-router-dom";
import { useState } from "react";

interface propsInterface {
  setState:React.Dispatch<React.SetStateAction<number>>,
  state:number
}

export default function ButtonNav(props:propsInterface) {

  const [value, setValue] = useState("");

  
    return(
        <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels={false}
          value={props.state}
          onChange={(event, newValue) => {
            props.setState(newValue);
          }}
        >
          <BottomNavigationAction label="calander" value="/" icon={<DomainVerificationRoundedIcon />} />
          <BottomNavigationAction label="Favorites" value="/AddPage" icon={<FormatListNumberedRoundedIcon />} />
          <BottomNavigationAction label="Archive" value="/ListPage" icon={<CreateRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    )
}