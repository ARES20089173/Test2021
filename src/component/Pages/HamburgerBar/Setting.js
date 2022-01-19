import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import EndBar from '../../framework/endbarWithback';
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import database from '../../database'
const {  Settingdata } = database;
const endbartype='Pure'
export default class Setting extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }} style={{backgroundColor:'#242634'}}>
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
                                        <Link to={`/`} style={{ position: 'relative', top: 3, right: 10 }}>
                                            <img src={back} alt='' width="75%" />
                                        </Link>
                                    </Grid>
                                    <Grid xs={8}>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            textAlign: 'center'
                                        }}>     SETTING
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
                <Grid xs={12} height="2vh" bgcolor="#8e8b91" >   </Grid>

                <List style={{ bottom: 10, textDecoration: 'none', color: '#FFF' }} >
                    {Settingdata.slice(0, 3).map((text, index) => (
                        <Link to={text.link} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button key={text.id} style={{ backgroundColor: index % 2 === 0 ? '#242634' : '#35394C', height: "10vh" }}>
                                <ListItemText >
                                    {text.linkName}
                                </ListItemText>
                                <KeyboardArrowRightIcon />
                            </ListItem>
                        </Link>
                    ))}
                    {Settingdata.slice(3, 9).map((text, index) => (
                        <ListItem key={text.id} style={{ backgroundColor: index % 2 === 0 ? '#35394C' :'#242634' , height: "10.3vh" }}>
                            <ListItemText >
                                {text.linkName}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Grid item xs={12} marginTop="0vh" >
                <EndBar endbartype={endbartype}/>
                </Grid>
            </Box>
        )
    }
}