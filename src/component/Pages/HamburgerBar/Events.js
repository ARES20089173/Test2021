import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EndBar from '../../framework/pureEndbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Switch from '@mui/material/Switch';
import Event1 from '../../../svgicon/Carousel/pic1.svg'
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
const Event = [
    { id: 0, img: Event1, name: "PAID TO PLAY&EARN/CHALLENGER MODE", detail: "CHALLENGER MODE is ......." },
    { id: 1, img: Event1, name: "PAID TO PLAY&EARN/Battle MODE", detail: "Battle MODE is ......." },
    { id: 2, img: Event1, name: "PAID TO PLAY&EARN/1 ON 1 MODE", detail: "1 ON 1 MODE is ......." },
    { id: 3, img: Event1, name: "PAID TO PLAY&EARN/1 ON 1 MODE", detail: "1 ON 1 MODE is ......." },
];
export default class Events extends Component {
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
                                        Events
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
                    <Grid container item xs={12} justifyContent='center' style={{ backgroundColor: '#707070' }} >
                        {Event.map((Event) => (

                            <Grid item xs={11} key={Event.id} height="45vh">
                                <div >
                                    <Typography color="black" variant='body2'>{Event.name}</Typography>
                                    <img src={Event.img} alt="Events" width="90%"/>
                                </div>

                                <Typography variant="caption" color="black"> {Event.detail}</Typography>
                            </Grid>
                        ))}

                        <Grid item xs={11} height="15vh">
                            <Typography variant="h2 " component="div" color='balck' textAlign='center' marginTop="1vh">
                                POWERED BY [R]
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={12} marginTop="0vh" >
                    <EndBar />
                </Grid>
            </Box>
        )
    }
}