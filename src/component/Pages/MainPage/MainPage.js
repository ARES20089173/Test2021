import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import backgroundEnd from "../../../reed_bg.svg"
import GameChooser from '../../framework/gamechooser';
import Scrollbanner from '../../framework/scrollbanner';
import NavigationBar from '../../framework/navigationBar';
import Scrolltext from '../../framework/scrolltext';
import InviteImage from '../../framework/inviteimage';
import EndBar from '../../framework/endbar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from "react-router-dom"

const StyledFab2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    bottom: "42vh",
    left: 0,
});
export default function MainPage() {
    return (
        <Box sx={{ flexGrow: 1 }}   style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
            <Grid item xs={12}  >
                    <NavigationBar />
                </Grid>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                
                <Grid item xs={11} style={{ marginTop: 3}} >
                    <div style={{ textAlign: 'center' }}>
                        <Scrollbanner />
                    </div>
                </Grid>
                <Grid item xs={11} height="3vh">
                    <Scrolltext />
                    {/* <Grid xs={1}></Grid>
                    <Grid xs={10}><Scrolltext /></Grid>
                    <Grid xs={1}></Grid> */}
                </Grid>
                <Grid item xs={12} height="28vh">
                    <GameChooser />
                    <Link to='/multigameChooser'>
                        <StyledFab2 size="small" color="secondary" aria-label="add">
                            <ReadMoreIcon />
                        </StyledFab2>
                    </Link>
                </Grid>
                <Grid item xs={11} >
                    <div style={{ textAlign: 'center' }}>
                        <InviteImage />
                    </div >
                </Grid>

                <Grid item xs={12} height="35vh">
                    <EndBar />
                </Grid>
            </Grid>
        </Box>
    );
}