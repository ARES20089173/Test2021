import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';

import EndBar from '../../framework/pureEndbar';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Switch from '@mui/material/Switch';
import HomeIcon from '@mui/icons-material/Home'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
const linkdata = [
    { id: 0, linkName: "Language selection", link: "/" },
    { id: 1, linkName: "Password Setting", link: "/" },
    { id: 2, linkName: "Account Safety", link: "/" },
    { id: 3, linkName: "", link: "" },
    { id: 4, linkName: "", link: "" },
    { id: 5, linkName: "", link: "" },
    { id: 6, linkName: "", link: "" },
    { id: 7, linkName: "", link: "" },
    { id: 8, linkName: "", link: "" },


]
export default class Setting extends Component {
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
                                        Setting
                                    </Typography>
                                    <Grid xs={1}></Grid>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                        <Toolbar />
                    </Box>
                </React.Fragment>

                <List style={{ bottom: 10, textDecoration: 'none', color: '#FFF' }} >
                    {linkdata.slice(0, 3).map((text, index) => (
                        <Link to={text.link} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button key={text.id} style={{ backgroundColor: index % 2 === 0 ? '#707070' : '#8e8b91', height: "10vh" }}>
                                <ListItemText >
                                    {text.linkName}
                                </ListItemText>
                                <KeyboardArrowRightIcon />
                            </ListItem>
                        </Link>
                    ))}
                    {linkdata.slice(3, 9).map((text, index) => (
                        <ListItem key={text.id} style={{ backgroundColor: index % 2 === 0 ? '#8e8b91' :'#707070' , height: "10.3vh" }}>
                            <ListItemText >
                                {text.linkName}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Grid item xs={12} marginTop="0vh" >
                    <EndBar />
                </Grid>
            </Box>
        )
    }
}