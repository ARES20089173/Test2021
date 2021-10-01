import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import SettingsIcon from '@mui/icons-material/Settings';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home'
const StyledFab = styled(Fab)({
    position: 'relative',
    zIndex: 3,
    top: "80%",
    left: "0%",

});
const StyledFab2 = styled(Fab)({
    position: 'relative',
    zIndex: 3,
    top: 0,
    left: "0%",

});
export default class MessageCenter extends Component {
    render() {
        return (
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
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
                            <Link to="">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <LayersClearIcon />
                                </IconButton>
                            </Link>
                            <Link to="">
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
        );
    }


}