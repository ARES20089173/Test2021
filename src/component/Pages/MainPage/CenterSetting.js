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
export default class MessageCenter extends Component {
    render() {
        const data = [
            { id: 0, icon: puzzle, setname: "Assetchange" },
            { id: 1, icon: m, setname: "System Message" },
            { id: 2, icon: gamepad, setname: "Game Results & Rewards" },
            { id: 3, icon: heart, setname: "Engagement Notify" },
            { id: 4, icon: money, setname: "Transaction Notify" },
            { id: 5, icon: game, setname: "New Battle Challengers" },
            { id: 6, icon: event, setname: "Events & Discounts Reminder" },
            { id: 7, icon: r, setname: "REES Teams Announcement" },
            { id: 8, icon: switched, setname: "Swith Off All Tutorials Button" },

        ];

        const handleChange = (event) => {
            // for swith
        };
        // const handleChange1 = (event) => {
        //     // for swith
        // };
        // const handleChange2 = (event) => {
        //     // for swith
        // };
        const data2 = data.map((data) => {
            if (data.id % 2 == 0) {
                return <Grid container
                    direction="row"
                    alignItems="center"
                    height="11vh"
                    style={{ backgroundColor: '#707070' }}>

                    <Grid item xs={9} style={{ textAlign: 'left', paddingLeft: '6vh' }} >
                        <img src={data.icon} width="9%" />
                        <Typography variant="caption" color="#ffffff" style={{ overflowWrap: 'break-word' }} display="inline"> {data.setname}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={2}>
                        <Switch
                            defaultChecked
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Grid>
                </Grid>
            } else {
                return <Grid container
                    direction="row"
                    alignItems="center"
                    height="11vh"

                    style={{ backgroundColor: "black" }}>

                    <Grid item xs={9} style={{ textAlign: 'left', paddingLeft: '6vh' }} >
                        <img src={data.icon} width="9%" />
                        <Typography variant="caption" color="#ffffff" style={{ overflowWrap: 'break-word' }} display="inline"> {data.setname}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={2}>
                        <Switch
                            defaultChecked
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Grid>
                </Grid>
            }
        }
        );
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
                                    <Link to='/MessageCenter'>
                                        <StyledFab2 size="small" color="secondary" aria-label="add">
                                            <ArrowBackIcon />
                                        </StyledFab2>
                                    </Link>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        Notice Setting
                                    </Typography>
                                    <Grid xs={1}></Grid>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                        <Toolbar />
                    </Box>
                </React.Fragment>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {data2}

                </Grid>
            </Box>
        );
    }


}