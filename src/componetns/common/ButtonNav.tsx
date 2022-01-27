import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DomainVerificationRoundedIcon from '@mui/icons-material/DomainVerificationRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface propsInterface {
  setState:React.Dispatch<React.SetStateAction<string>>,
  state:string
}

export default function ButtonNav(props:propsInterface) {
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    props.setState(location.pathname)
  })
  
    return(
        <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels={false}
          value={props.state}
          onChange={(event, newValue) => {
            props.setState(newValue);
            navigate(`${newValue}`)
          }}
        >
          <BottomNavigationAction label="calander" value="/" icon={<DomainVerificationRoundedIcon />} />
          <BottomNavigationAction label="Favorites" value="/ListPage" icon={<FormatListNumberedRoundedIcon />} />
          <BottomNavigationAction label="Archive" value="/AddPage" icon={<CreateRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    )
}