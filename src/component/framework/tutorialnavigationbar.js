import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';


export default function noLevelNavigationBar(props) {

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="fixed" align='center' sx={{ top: 0 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{}}>
      
            </Typography>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              CHOOSE YOUR FAVORITE MODE
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
        <Toolbar />
      </Box>
    </React.Fragment>
  );
}
