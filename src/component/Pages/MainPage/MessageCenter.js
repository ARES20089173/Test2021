import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFMessage.css"
import Popup from 'reactjs-popup';
import Toolbar from '@mui/material/Toolbar';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoodIcon from '@mui/icons-material/Mood';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import SettingsIcon from '@mui/icons-material/Settings';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
            { id: 0, icon: NotificationsActiveIcon, title: "Notification", detail: "layers, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice" },
            { id: 1, icon: WhatsAppIcon, title: "Live Chat", detail: "Players, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice" },
            { id: 2, icon: MoodIcon, title: "REES Community Notify", detail: "Players, Assets, Finance, Function, Mission,Game News, Game Mode, Related Notice" },
        ];
        const data2 = data.map((message) => {
            if (message.id % 2 == 0) {
                return  <Link to="" style={{ textDecoration: 'none', color: '#FFF' }}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        height="20vh"
                        style={{ backgroundColor: '#707070'}}>

                        <Grid item xs={2} style={{ textAlign: 'center' }}><message.icon fontSize="large" /></Grid>
                        <Grid item xs={10}>
                            <Typography variant="h6">{message.title}</Typography>
                            <Typography variant="caption" style={{ overflowWrap: 'break-word' }} display="inline">{message.detail}</Typography>
                        </Grid>
                    </Grid>
                </Link>
            } else {
                return <Link to="" style={{ textDecoration: 'none', color: '#FFF' }}>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    height="20vh"
                    style={{ backgroundColor: "#8e8b91"}}>

                    <Grid item xs={2} style={{ textAlign: 'center' }}><message.icon fontSize="large" /></Grid>
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

            <Box sx={{ flexGrow: 1 }}>
                <React.Fragment>
                    <Box sx={{ flexGrow: 1 }} >
                        <Link to='/'>
                            <StyledFab size="small" color="secondary" aria-label="add">
                                <HomeIcon />
                            </StyledFab>
                        </Link>
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0 }}>
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{}}>
                                    <Link to='/'>
                                        <StyledFab2 size="small" color="secondary" aria-label="add">
                                            <ArrowBackIcon />
                                        </StyledFab2>
                                    </Link>
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                    Message Center
                                </Typography>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <Popup
                                        className="content2"
                                        trigger={<div className="button" style={{ marginTop: '1vh', color: 'blue' }}> <div onClick={this.BattleModehandleClick}>
                                            <LayersClearIcon /></div></div>}
                                        modal
                                        closeOnDocumentClick={false}
                                        lockScroll
                                        nested
                                        {...{ contentStyle}}
                                    >
                                        {close => (
                                            <div className="modal2">
                                                <button className="close" onClick={close}>
                                                    <div className="close" onClick={this.handleClick}>
                                                        &times;
                                                    </div>
                                                </button>
                                                <Grid xs={12} marginTop="7vh">
                                                    <Typography variant="h4" component="div" color='primary' textAlign='center' >
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
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                    >
                                        <SettingsIcon />
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