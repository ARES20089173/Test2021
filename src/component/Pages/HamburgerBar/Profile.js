import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import puzzle from '../../../puzzle.svg'
import m from '../../../m.svg'
import gamepad from '../../../gamepad.svg'
import heart from '../../../heart.svg'
import money from '../../../money.svg'
import game from '../../../game.svg'
import event from '../../../event.svg'
import r from '../../../r.svg'
import switched from '../../../switched.svg'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoodIcon from '@mui/icons-material/Mood';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Switch from '@mui/material/Switch';
import HomeIcon from '@mui/icons-material/Home'
const contentStyle = {
    margin: 'auto',
    background: '#cfcece',
    width: "100%",
    height: "40%",
    padding: "5px",
    borderRadius: "5%",
};
const StyledFab = styled(Fab)({
    position: 'fixed',
    zIndex: 3,
    top: "75vh",
    left: 0,

});
const StyledFab2 = styled(Fab)({
    position: 'relative',
    zIndex: 3,
    top: 0,
    left: "0%",


});


const userdata = [
    { id: 0, level: 'Lv1', ReesID: 1 },
]
export default class Profile extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <React.Fragment>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid xs={3}>
                            <Link to='/'>
                                <StyledFab size="small" color="secondary" aria-label="add">
                                    <HomeIcon />
                                </StyledFab>
                            </Link>
                        </Grid>
                        <Grid xs={8} >
                            <CssBaseline />
                            <AppBar position="fixed" align='center' sx={{ top: 0 }}>
                                <Toolbar>
                                    <Link to='/'>
                                        <StyledFab2 size="small" color="secondary" aria-label="add">
                                            <ArrowBackIcon />
                                        </StyledFab2>
                                    </Link>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        Profile
                                    </Typography>
                                    <Grid xs={1}></Grid>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                        <Toolbar />
                    </Box>
                </React.Fragment>
                <Grid container height="100vh" >
                    <Grid xs={12} height="5%" bgcolor="#8e8b91" >   </Grid>

                    <Grid xs={12} height="20%" bgcolor="#707070" >
                    </Grid>
                    <Grid xs={12} height="60%" bgcolor="#8e8b91" >
                    </Grid>
                    <Grid xs={12} height="15%" bgcolor="#707070" >
                    </Grid>
                </Grid>
            </Box>
        )
    }
}