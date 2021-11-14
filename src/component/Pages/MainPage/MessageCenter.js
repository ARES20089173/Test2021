import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFMessage.css"
import Popup from 'reactjs-popup';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Notification from "../../../svgicon/MessageCenter/Notification.svg";
import Set from "../../../svgicon/MessageCenter/Set.svg"
import Clear from "../../../svgicon/MessageCenter/Clear.svg"
import Discord from "../../../svgicon/MessageCenter/Discord.svg"
import Whatsapp from "../../../svgicon/MessageCenter/Whatsapp.svg"
const contentStyle = {
    margin: 'auto',
    background: '#242634',
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
            { id: 0, icon: Notification, title: "Notification", detail: "layers, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice", link: "/MessageCenter/Notification" },
            { id: 1, icon: Whatsapp, title: "Live Chat", detail: "Players, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice", link: "/" },
            { id: 2, icon: Discord, title: "REES Community Notify", detail: "Players, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice", link: "/" },
        ];
        const data2 = data.map((message) => {
            if (message.id % 2 == 0) {
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

            <Box sx={{ flexGrow: 1 }} height="100vh" style={{backgroundColor:'#242634'}}> 
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
                        <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634" ,borderBottom:'1px solid black'}}>
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{}}>
                                    <Link to={`/`}>
                                        <img src={back} alt='' width="40%" style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            top: 5,
                                            left: "-40%",
                                        }} />
                                    </Link>
                                </Typography>
                                <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-5%",
                                        }}>
                                    Message Center
                                </Typography>
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <Popup
                                        className="content2"
                                        trigger={<div className="button" style={{ marginTop: '1vh', color: 'blue' }}> <div onClick={this.BattleModehandleClick}>
                                            <img src={Clear} alt='' width='50%' /></div></div>}
                                        modal
                                        lockScroll
                                        nested
                                        {...{ contentStyle }}
                                    >
                                        {close => (
                                            <div className="modal2">
                                                <button className="close" onClick={close}>
                                                    <div className="close" onClick={this.handleClick}>
                                                        &times;
                                                    </div>
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
                                </IconButton>
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