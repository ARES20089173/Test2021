import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../graphsix.svg';
import CssBaseline from '@mui/material/CssBaseline';

const userdata = [
  { id: 0, level: 'Lv1', name: "2048", number: 52, entryFee: 88 },
]

export default function NavigationBar() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
          <AppBar position="fixed" align='center' sx={{  top: 0 }}>
            <Toolbar>
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
                sx={{}}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar/>
      </Box>
    </React.Fragment>
  );
}
