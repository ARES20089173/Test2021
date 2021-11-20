import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Messagepuzzle from '../../../svgicon/NotificationIcon/Messagepuzzle.svg'
import m from '../../../svgicon/NotificationIcon/m.svg'
import gamepad from '../../../svgicon/NotificationIcon/gamepad.svg'
import heart from '../../../svgicon/NotificationIcon/heart.svg'
import money from '../../../svgicon/NotificationIcon/money.svg'
import game from '../../../svgicon/NotificationIcon/game.svg'
import event from '../../../svgicon/NotificationIcon/event.svg'
import r from '../../../svgicon/NotificationIcon/r.svg'
import switched from '../../../svgicon/NotificationIcon/switched.svg'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Switch from '@mui/material/Switch';
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
            { id: 0, icon: Messagepuzzle, setname: "Assetchange" },
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
        const data2 = data.map((data) => {
            if (data.id % 2 == 0) {
                return <Grid container
                    direction="row"
                    alignItems="center"
                    height="11vh"
                    style={{ backgroundColor: "#242634" }}>

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

                    style={{ backgroundColor: "#35394C" }}>

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
                                <img src={HomeIcon} alt='' width="15%" style={{
                                    position: 'fixed',
                                    zIndex: 3,
                                    top: "72vh",
                                    left: 0,
                                }} />
                            </Link>
                        </Grid>
                        <Grid xs={8} >
                            <CssBaseline />
                            <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634", borderBottom: '1px solid black' }}>
                                <Toolbar>
                                    <Grid container xs={12} justifyContent='center' alignItems='center'>
                                    <Grid xs={2}>
                                        <Link to={`/MessageCenter`} style={{ position: 'relative', top: 3,right:10 }}>
                                            <img src={back} alt='' width="75%" />
                                        </Link>
                                    </Grid>
                                    <Grid xs={8}>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                    textAlign:'center'  }}>           Notice Setting
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2}></Grid>
                                </Grid>
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