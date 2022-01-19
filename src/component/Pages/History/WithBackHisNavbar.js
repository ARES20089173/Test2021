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
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';


import database from '../../database'
const { Toplinkdata, Bottomlinkdata} = database;
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
      sx={{ width: 280, height: '100vh', backgroundColor: "#242634" , overflow: "scroll" }}
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
        {Bottomlinkdata.slice(0, 1).map((text, index) => (
          <ListItem button key={text.id}>
            <ListItemText >
              <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>{text.linkName}  </Link>
            </ListItemText>
          </ListItem>
        ))}
        <ListItem >
          <ListItemText >
            <Link to={Bottomlinkdata[1].link} style={{ textDecoration: 'none', color: 'white' }}>{Bottomlinkdata[1].linkName}   <img src={Logout} alt="logout" /></Link>
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
