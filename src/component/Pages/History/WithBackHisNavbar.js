import * as React from 'react';
import Drawer from "@mui/material/Drawer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router';
import back from '../../../svgicon/Componenticon/Back.svg'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Hamburgicon from '../../../svgicon/Componenticon/Hamburgicon.svg'
import { Grid } from '@mui/material';
import Close from '../../../svgicon/Componenticon/Close.svg'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom';
import Logout from '../../../logout.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import puzzle from "../../../svgicon/Componenticon/Chasepuzzle.svg"
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';


const userdata = [
  { id: 0, level: 'Lv1', ReesID: 1, nickname: 'Jay' },
]

const Toplinkdata = [
  { id: 0, linkName: "PROFILE", link: `/${userdata[0].ReesID}/Profile` },
  { id: 1, linkName: "SETTING", link: `/${userdata[0].ReesID}/Setting` },
  { id: 2, linkName: "EVENTS", link: "/Events" },
  { id: 3, linkName: "BUY PUZZLES", link: "/Wallet/PuzzlePackage" },
  { id: 4, linkName: "Reward Status", link: `/MissionMain/RewardStatus` },
  { id: 5, linkName: "Player Support Guide", link: `/MissionMain/SupportGuide` },
  { id: 6, linkName: "General FAQ", link: "/MissionMain/FAQ" },
  { id: 7, linkName: "Privacy Policy", link: "/MissionMain/Policy" },
  { id: 8, linkName: "Terms of Service", link: "/MissionMain/Service" }

]
const Bottomlinkdata = [
  { id: 0, linkName: "About REES", link: "/" },
  { id: 1, linkName: "FAQ", link: "/" },
  { id: 2, linkName: "PRESS", link: "/" },
  { id: 3, linkName: "LOGOUT", link: "/login" }
]
export default function NavigationBar() {
  const [state, setState] = React.useState({
    right: false
  });

  const history = useHistory();
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 280, height: '100vh', backgroundColor: "#242634", overflow: "scroll" }}
      role="presentation"
    >
      <List  >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("right", false)}
          sx={{ left: "50%", bottom: 5 }}

        >
          <img src={Close} alt='hamburgericon' width='40%' style={{ position: 'relative', left: 60 }} />
        </IconButton>
        <ListItemText style={{ textAlign: "center" }}  >  <Grid container justifyContent='center' alignItems="center"><Typography color='white'>Play to Earn PUZZLES</Typography><img src={puzzle} alt=''/></Grid></ListItemText>

        {Toplinkdata.map((text, index) => (
          <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
            <ListItem button key={text.id}>
              <ListItemText >
                {text.linkName}
              </ListItemText>
              <KeyboardArrowRightIcon />
            </ListItem>
          </Link>
        ))}
        <ListItem >
          <ListItemText style={{ fontSize: '0.7em' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', fontSize: '0.7em', color: 'white' }}>

              CODE REDEEM :
              <TextField id="input-with-sx" variant="standard" />

              <img src={coderedeem} alt="coderedeem" />
            </Box>
          </ListItemText>
        </ListItem>
      </List>
      <List style={{ textDecoration: 'none', color: 'white' }} >
        {Bottomlinkdata.slice(0, 3).map((text, index) => (
          <ListItem button key={text.id}>
            <ListItemText >
              <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>{text.linkName}  </Link>
            </ListItemText>
          </ListItem>
        ))}
        <ListItem >
          <ListItemText >
            <Link to={Bottomlinkdata[3].link} style={{ textDecoration: 'none', color: 'white' }}>{Bottomlinkdata[3].linkName}   <img src={Logout} alt="logout" /></Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed" elevation={0} align='center' style={{ backgroundColor: '#242634' }} sx={{ margin: 0 }} >
          <Toolbar style={{ textAlign: 'center' }}>
            <Grid container justifyContent='center' alignItems="center">
     
                <img src={back} alt='hamburgericon' onClick={() => history.goBack()} style={{
                  position: 'absolute',
                  top: -8,
                  left: 10,
                  width: 50
                }} width="10%" height="150%" />
  
              <Typography variant="h6" >
                MATCH HISTORY
              </Typography>

              <img src={Hamburgicon} alt='hamburgericon' style={{
                position: 'absolute',
                top: 5,
                left: 0,
                margin: '0 90%',
              }} width="10%" height="90%" onClick={toggleDrawer("right", true)} />

              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </Grid>
          </Toolbar>
        </AppBar>

        <Toolbar />
      </Box>
    </React.Fragment>
  );
}
