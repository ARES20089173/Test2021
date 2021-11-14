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
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
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
            { id: 0, icon: Messagepuzzle, setname: "(puzzle icon)  assets related notification ", time: null },
            { id: 1, icon: m, setname: "(m icon) mission related notification", time: "sunday" },
            { id: 2, icon: gamepad, setname: "(gamepad  icon) 1ON1 mode related notification", time: "sunday" },
            { id: 3, icon: heart, setname: "(heart icon) players related, engagement notification", time: "sunday" },
            { id: 4, icon: money, setname: "(money icon)finance related notification", time: null },
            { id: 5, icon: game, setname: "(gamepad  icon) Battle mode NEW challenger related notification", time: null },
            { id: 6, icon: event, setname: "(event icon)events & discount  related notification", time: null },
            { id: 7, icon: r, setname: "(R icon) game news, rees team  related notification", time: null },
            { id: 8, icon: switched, setname: "Swith Off All Tutorials Button", time: null },

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
        const Newdata = data.map((data) => {
            if (data.time != null) {
                return <Grid container
                    direction="row"
                    alignItems="center"
                    height='15vh'
                    justifyContent='center'
                    alignItem='center'
                    style={{ backgroundColor: data.id % 2 == 0 ? '#242634' : '#35394C' }}>

                    <Grid item xs={2} style={{ textAlign: 'left', paddingLeft: '4vh' }} >
                        <img src={data.icon} width="100%" />
                    </Grid>
                    <Grid item xs={10} style={{ textAlign: 'left', paddingLeft: '1vh' }} >
                        <Typography variant="caption" color="#ffffff" style={{ overflowWrap: 'break-word' }} display="inline"> {data.setname}
                        </Typography>
                    </Grid>
                </Grid>
            }
        })
        const Olddata = data.map((data) => {
            if (data.time == null) {
                return <Grid container
                    direction="row"
                    alignItems="center"
                    height='15vh'
                    style={{ backgroundColor: data.id % 2 == 0 ? '#242634' : '#35394C' }}>
                    <Grid item xs={2} style={{ textAlign: 'left', paddingLeft: '4vh' }} >
                        <img src={data.icon} width="100%" />
                    </Grid>
                    <Grid item xs={10} style={{ textAlign: 'left', paddingLeft: '1vh' }} >
                        <Typography variant="caption" color="#ffffff" style={{ overflowWrap: 'break-word' }} display="inline"> {data.setname}
                        </Typography>
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
                                    <Link to={`/MessageCenter`}>
                                        <img src={back} alt='' width="40%" style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            top: 5,
                                            left: "-40%",
                                        }} />
                                    </Link>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                        position: 'relative',
                                        zIndex: 3,
                                        left: "-13%",
                                    }}>          Notification
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
                    alignItems="center">
                    <Grid item xs={12} height="4vh" style={{ backgroundColor: '#33363C', textAlign: 'center' }}>
                        <Typography variant="h6" color="#ffffff" >
                            NEW
                        </Typography>
                    </Grid>
                    {Newdata}
                    <Grid item xs={12} height="4vh" style={{ backgroundColor: '#33363C', textAlign: 'center' }}>
                        <Typography variant="h6" color="#ffffff" >
                            EARLIER
                        </Typography>
                    </Grid>
                    {Olddata}

                </Grid>
            </Box>
        );
    }


}