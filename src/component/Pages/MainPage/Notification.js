import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Messagepuzzle from '../../../svgicon/NotificationIcon/Messagepuzzle.svg'
import IconButton from '@mui/material/IconButton';
import m from '../../../svgicon/NotificationIcon/m.svg'
import gamepad from '../../../svgicon/NotificationIcon/gamepad.svg'
import heart from '../../../svgicon/NotificationIcon/heart.svg'
import money from '../../../svgicon/NotificationIcon/money.svg'
import game from '../../../svgicon/NotificationIcon/game.svg'
import event from '../../../svgicon/NotificationIcon/event.svg'
import r from '../../../svgicon/NotificationIcon/r.svg'
import switched from '../../../svgicon/NotificationIcon/switched.svg'
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFMessage.css"
import Popup from 'reactjs-popup';
import Clear from "../../../svgicon/MessageCenter/Clear.svg"
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
    background: '#242634',
    width: "100%",
    height: "40%",
    padding: "5px",
    borderRadius: "5%",
};
export default class MessageCenter extends Component {
    render() {
        const New = [
            { id: 0, icon: m, setname: "(m icon) mission related notification", time: "sunday" },
            { id: 1, icon: gamepad, setname: "(gamepad  icon) 1ON1 mode related notification", time: "sunday" },
            { id: 2, icon: heart, setname: "(heart icon) players related, engagement notification", time: "sunday" }

        ];
        const Old = [
            { id: 0, icon: Messagepuzzle, setname: "(puzzle icon)  assets related notification ", time: null },
            { id: 1, icon: money, setname: "(money icon)finance related notification", time: null },
            { id: 2, icon: game, setname: "(gamepad  icon) Battle mode NEW challenger related notification", time: null },
            { id: 3, icon: event, setname: "(event icon)events & discount  related notification", time: null },
            { id: 4, icon: r, setname: "(R icon) game news, rees team  related notification", time: null },
            { id: 5, icon: switched, setname: "Swith Off All Tutorials Button", time: null },

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
        const Newdata = New.map((data) => {
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
        const Olddata = Old.map((data) => {
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
                                    <Grid container xs={12} justifyContent='center' alignItems='center'>
                                        <Grid xs={2}>
                                            <Link to={`/MessageCenter`} style={{ position: 'relative', top: 3 , right: 10}}>
                                                <img src={back} alt='' width="75%" />
                                            </Link>
                                        </Grid>
                                        <Grid xs={8}>
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                                textAlign: 'center'
                                            }}>          Notification
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2}>  <IconButton
                                            size="small"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                        >
                                            <Popup
                                                className="content2"
                                                trigger={<div className="button" style={{ marginTop: '1vh', color: 'blue' }}> <div onClick={this.BattleModehandleClick}>
                                                    <img src={Clear} alt='' width='83%' /></div></div>}
                                                modal
                                                lockScroll
                                                nested
                                                {...{ contentStyle }}
                                            >
                                                {close => (
                                                    <div className="modal2">
                                                        <button className="close" onClick={close}>

                                                        </button>
                                                        <Grid xs={12} marginTop="7vh">
                                                            <Typography variant="h4" component="div" color='white' textAlign='center' >
                                                                the message was successfully
                                                                marked as read
                                                            </Typography>
                                                        </Grid>
                                                    </div>
                                                )}
                                            </Popup>
                                        </IconButton></Grid>
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