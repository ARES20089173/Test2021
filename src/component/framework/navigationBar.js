import * as React from 'react';
import Drawer from "@mui/material/Drawer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import face from '../../svgicon/Headicon/face_1.svg';
import Hamburgicon from '../../svgicon/Componenticon/Hamburgicon.svg'
import CssBaseline from '@mui/material/CssBaseline';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom';
import Logout from '../../logout.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import puzzle from "../../puzzle.svg"
import coderedeem from '../../coderedeem.svg'
import TextField from '@mui/material/TextField';


const userdata = [
  { id: 0, level: 'Lv1', ReesID: 1,nickname:'Jay' },
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
      <List sx={{height: "50%"}} >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("right", false)}
          sx={{ left: "80%", bottom: 5 }}
          width="10%" 
        >
          <img src={Hamburgicon} alt='hamburgericon' width='70%'/>
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
      <List style={{ top: "10%", textDecoration: 'none', color: '#FFF' }}sx={{height: "40%"}}  >
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
      <Box sx={{ flexGrow: 1 }} >
        <CssBaseline />
        <AppBar position="fixed" elevation={0} align='center' style={{backgroundColor:'#242634'}} sx={{ margin: 0 }} >
          <Toolbar variant="dense">
            
            <img src={face} className="App-logo" alt="logo" width="13%" style={{marginLeft:"1vh",marginRight:'1vh'}} />
           
            <Typography variant="h6" component="div" sx={{}}>
              {userdata[0].nickname}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          
            </Typography>
            
          <img src={Hamburgicon} alt='hamburgericon' style={{position: 'absolute',
                                            top: 5,
                                            left: 0,
                                            margin: '0 90%',}} width="10%" height="90%" onClick={toggleDrawer("right", true)}/>
        
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
