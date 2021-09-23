import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavigationBar from './component/framework/navigationBar';
import Scrollbanner from './component/framework/scrollbanner';
import ScrollText from './component/framework/scrolltext';
import GameChooser from './component/framework/gamechooser';
import InviteImage from './component/framework/inviteimage';
import Linkbar from './component/framework/linkbar';
import Endbar from './component/framework/endbar';
export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}  >
          <NavigationBar />
        </Grid>
        <Grid item xs={11} margin="1px" >
          <Scrollbanner />
        </Grid>
        <Grid item xs={11} margin="1vh">
          <ScrollText />
        </Grid>
        <Grid item xs={12} >
          <GameChooser />
        </Grid>
        <Grid item xs={11} margin="1vh">
          <InviteImage />
        </Grid>
        <Grid item xs={11} margin="1vh">
          <Linkbar />
        </Grid>
        <Grid item xs={12}  >
          <Endbar/>
        </Grid>
      </Grid>
    </Box>
  );
}