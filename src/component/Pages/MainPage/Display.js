import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GameChooser from '../../framework/gamechooser';
import Scrollbanner from '../../framework/scrollbanner';
import NavigationBar from '../../framework/navigationBar';
import Scrolltext from '../../framework/scrolltext';
import InviteImage from '../../framework/inviteimage';
import EndBar from '../../framework/endbar';
export default function BasicGrid() {
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
                <Scrolltext />
                    {/* <Grid xs={1}></Grid>
                    <Grid xs={10}><Scrolltext /></Grid>
                    <Grid xs={1}></Grid> */}
                </Grid>
                <Grid item xs={12} >
                    <GameChooser />
                </Grid>
                <Grid item xs={11} margin="1vh">
                    <InviteImage />
                </Grid>
                <Grid item xs={11} margin="1vh">
                </Grid>
                <Grid item xs={12}  >
                    <EndBar />
                </Grid>
            </Grid>
        </Box>
    );
}