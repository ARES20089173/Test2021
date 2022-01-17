import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EndBar from '../../framework/endbarWithback';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { useHistory } from "react-router";
import { Link } from "react-router-dom"
import Event1 from '../../../svgicon/Carousel/pic1.svg'
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import powerbyR from '../../../svgicon/PowerBy/PowerByR.svg'

const Event = [
    { id: 0, img: Event1, name: "PAID TO PLAY&EARN/CHALLENGER MODE", detail: "CHALLENGER MODE is .......xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
    { id: 1, img: Event1, name: "PAID TO PLAY&EARN/Battle MODE", detail: "Battle MODE is ......." },
    { id: 2, img: Event1, name: "PAID TO PLAY&EARN/1 ON 1 MODE", detail: "1 ON 1 MODE is ......." },
    { id: 3, img: Event1, name: "PAID TO PLAY&EARN/1 ON 1 MODE", detail: "1 ON 1 MODE is ......." },
];
export default function Events() {
    const endbartype='Pure'
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    }
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
                            <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634" }}>
                                <Toolbar>
                                    <Grid container xs={12} justifyContent='center' alignItems='center'>
                                    <Grid  container xs={2} justifyContent='center' alignItems='center'>
                                              <img src={back} alt='' width="75%" onClick={routeChange} />
                                       
                                        </Grid>
                                        <Grid xs={8}>
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                                textAlign: 'center'
                                            }}>     EVENTS
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
                <Grid container height="100vh" >
                    <Grid xs={12} container justifyContent='center' alignItems='center' bgcolor="#242634" >
                        {Event.map((Event) => (

                            <Grid container justifyContent='center' alignItems='center' xs={11} key={Event.id} height="33vh">

                                <Typography color="white" variant='body2'>{Event.name}</Typography>
                                <img src={Event.img} alt="Events" width="90%" />

                                <Typography variant="caption" color="white"  display="inline" style={{display: 'inline-block',wordBreak:'break-all'}} > {Event.detail}</Typography>
                            </Grid>
                        ))}

                        <Grid container justifyContent='center' alignItems='center' xs={12} height="25vh">
                            <img src={powerbyR} alt='' width='30%' />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={12} marginTop="0vh" >
                <EndBar endbartype={endbartype}/>
                </Grid>
            </Box>
        )
    }
