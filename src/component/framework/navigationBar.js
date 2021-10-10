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
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const userdata = [
  { id: 0, level: 'Lv1', name: "2048", number: 52, entryFee: 88 },
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
      sx={{ width: 280, height: "100vh", backgroundColor: "white" }}
      role="presentation"
    >
      <List >

      <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("right", false)}
          sx={{left:"90%",bottom:20}}
        >
          <MenuIcon />
        </IconButton>
        {/* <ListItem>
          <ListItemText primary={"close"} sx={{ float: "right" }} />
        </ListItem>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} sx={{ float: "right" }} />  >
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List >
        {/* {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
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
