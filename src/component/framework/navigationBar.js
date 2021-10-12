import * as React from 'react';
import Drawer from "@mui/material/Drawer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../graphsix.svg';
import CssBaseline from '@mui/material/CssBaseline';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from 'react-router-dom';
import Logout from '../../logout.svg'
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import puzzle from "../../puzzle.svg"
import coderedeem from '../../coderedeem.svg'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const userdata = [
  { id: 0, level: 'Lv1', ReesID: 1 },
]
const Toplinkdata = [
  { id: 0, linkName: "PROFILE", link: `/${userdata[0].ReesID}/Profile` },
  { id: 1, linkName: "SETTING", link: `/${userdata[0].ReesID}/Setting` },
  { id: 2, linkName: "EVENTS", link: "/Events" },
  { id: 3, linkName: "BUY PUZZLES", link: "/" }
  // { id: 5, linkName:"PROFILE"},
  // { id: 6, linkName:"PROFILE"},
  // { id: 7, linkName:"PROFILE"},
  // { id: 8, linkName:"PROFILE"},
]
const Bottomlinkdata = [
  { id: 0, linkName: "About REES", link: "/" },
  { id: 1, linkName: "FAQ", link: "/" },
  { id: 2, linkName: "PRESS", link: "/" },
  { id: 3, linkName: "LOGOUT", link: "/" },
]
export default function NavigationBar() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 280, height: "100vh", backgroundColor: "#707070" }}
      role="presentation"
    >
      <List >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("right", false)}
          sx={{ left: "85%", bottom: 5 }}
        >
          <MenuIcon />
        </IconButton>
        <ListItemText style={{ textAlign: "center" }}  >Play to Earn PUZZLES<img src={puzzle} /></ListItemText>

        {Toplinkdata.map((text, index) => (
          <Link to={text.link} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button key={text.id}>
              <ListItemText >
                {text.linkName}
              </ListItemText>
              <KeyboardArrowRightIcon />
            </ListItem>
          </Link>
        ))}
        <ListItem >
          <ListItemText style={{fontSize:'0.7em'}}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',fontSize:'0.7em' }}>

            CODE REDEEM :   
              <TextField id="input-with-sx" variant="standard" />

            <img src={coderedeem} alt="coderedeem" />
            </Box>
          </ListItemText>
        </ListItem>
      </List>
      <List style={{ top: "10%", textDecoration: 'none', color: '#FFF' }} >
        {Bottomlinkdata.slice(0, 3).map((text, index) => (
          <ListItem button key={text.id}>
            <ListItemText >
              <Link to={text.link} style={{ textDecoration: 'none', color: 'black' }}>{text.linkName}  </Link>
            </ListItemText>
          </ListItem>
        ))}
        <ListItem >
          <ListItemText >
            <Link to={Bottomlinkdata[3].link} style={{ textDecoration: 'none', color: 'black' }}>{Bottomlinkdata[3].linkName}   <img src={Logout} alt="logout" /></Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="fixed" align='center' sx={{ top: 0 }}>
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mb: 0.5 }}
            >
              <img src={logo} className="App-logo" alt="logo" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{}}>
              {userdata[0].level}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              News
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer("right", true)}
              sx={{}}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </Toolbar>
        </AppBar>

        <Toolbar />
      </Box>
    </React.Fragment>
  );
}
