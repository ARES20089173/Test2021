import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom"
import Notification from "../../../svgicon/MessageCenter/Notification.svg";
import Set from "../../../svgicon/MessageCenter/Set.svg"
import Discord from "../../../svgicon/MessageCenter/Discord.svg"
import Whatsapp from "../../../svgicon/MessageCenter/Whatsapp.svg"

export default class MessageCenter extends Component {
    render() {
        const data = [
            { id: 0, icon: Notification, title: "Notification", detail: "layers, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice", link: "/MessageCenter/Notification" },
            { id: 1, icon: Whatsapp, title: "Live Chat", detail: "Players, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice", link: "/" },
            { id: 2, icon: Discord, title: "REES Community Notify", detail: "Players, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice", link: "/" },
        ];
        const data2 = data.map((message) => {
            if (message.id % 2 === 0) {
                return <Link to={message.link} style={{ textDecoration: 'none', color: '#FFF' }}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        height="20vh"
                        style={{ backgroundColor: '#242634' }}>

                        <Grid item xs={2} style={{ textAlign: 'center' }}>  <img src={message.icon} alt='' width='50%' /></Grid>
                        <Grid item xs={10}>
                            <Typography variant="h6">{message.title}</Typography>
                            <Typography variant="caption" style={{ overflowWrap: 'break-word' }} display="inline">{message.detail}</Typography>
                        </Grid>
                    </Grid>
                </Link>
            } else {
                return <Link to={message.link} style={{ textDecoration: 'none', color: '#FFF' }}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        height="20vh"
                        style={{ backgroundColor: "#35394C" }}>

                        <Grid item xs={2} style={{ textAlign: 'center' }}><img src={message.icon} alt='' width='50%' /></Grid>
                        <Grid item xs={10}>
                            <Typography variant="h6">{message.title}</Typography>
                            <Typography variant="caption" style={{ overflowWrap: 'break-word' }} display="inline">{message.detail}</Typography>
                        </Grid>
                    </Grid>
                </Link>
            }
        }
        );
        return (

            <Box sx={{ flexGrow: 1 }} height="100vh" style={{ backgroundColor: '#242634' }}>
                <React.Fragment>
                    <Box sx={{ flexGrow: 1 }} >
                        <Link to='/'>
                            <img src={HomeIcon} alt='' width="15%" style={{
                                position: 'fixed',
                                zIndex: 3,
                                top: "72vh",
                                left: 0,
                            }} />
                        </Link>
                        <CssBaseline />
                        <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634", borderBottom: '1px solid black' }}>
                            <Toolbar>
                                <Grid container xs={12} justifyContent='center' alignItems='center'>
                                    <Grid xs={2}>
                                        <Link to={`/`} style={{ position: 'relative', top: 3, right: 10 }}>
                                            <img src={back} alt='' width="75%" />
                                        </Link>
                                    </Grid>
                                    <Grid xs={8}>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            textAlign: 'center'
                                        }}>
                                            Message Center
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2}>
                                        <Link to="/MessageCenter/CenterSetting">
                                            <IconButton
                                                size="small"
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                            >
                                                <img src={Set} alt='' width='50%' />
                                            </IconButton>
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Toolbar>
                        </AppBar>
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