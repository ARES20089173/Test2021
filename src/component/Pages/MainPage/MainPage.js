import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GameChooser from '../../framework/gamechooser';
import Scrollbanner from '../../framework/scrollbanner';
import NavigationBar from '../../framework/navigationBar';
import Scrolltext from '../../framework/scrolltext';
import InviteImage from '../../framework/inviteimage';
import EndBar from '../../framework/endbar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {Link} from "react-router-dom"
  
const StyledFab2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    bottom: "38vh",
    left: 0,
});
export default function MainPage() {
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
                    <Link to='/multigameChooser'>
                    <StyledFab2 size="small" color="secondary" aria-label="add">
                        <ReadMoreIcon />
                    </StyledFab2>
                   </Link>
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