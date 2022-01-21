import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DomainVerificationRoundedIcon from '@mui/icons-material/DomainVerificationRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

interface propsInterface {
  setState:React.Dispatch<React.SetStateAction<number>>,
  state:number
}

export default function ButtonNav(props:propsInterface) {

    return(
        <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels={false}
          value={props.state}
          onChange={(event, newValue) => {
            props.setState(newValue);
          }}
        >
          <BottomNavigationAction label="calander" icon={<DomainVerificationRoundedIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FormatListNumberedRoundedIcon />} />
          <BottomNavigationAction label="Archive" icon={<CreateRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    )
}