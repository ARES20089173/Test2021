import React from "react";
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import back from '../../../svgicon/Componenticon/Back.svg'
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import { useHistory } from "react-router";
import EndBar from '../../framework/endbarWithback';

export default function SupportGuide() {
    const history = useHistory();
    const endbartype = 'Pure'
    const routeChange = () => {
        history.goBack()
    }
    const data = [
        { id: 0, embedId: "rokGy0huYEA", name: "PAID TO PLAY&EARN/CHALLENGER MODE", detail: "The detail is ......." },
    ];
    return (

        <Box sx={{ flexGrow: 1 }} bgcolor="#242634" height="100vh">

            <Link to='/'>
                <img src={HomeIcon} alt='' width="15%" style={{
                    position: 'fixed',
                    zIndex: 3,
                    top: "72vh",
                    left: 0,
                }} />
            </Link>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item xs={12} >
                    <React.Fragment>
                        <Box sx={{ flexGrow: 1 }}>
                            <CssBaseline />
                            <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634" }}>
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{}}>
                                        <img src={back} alt='' width="40%" onClick={routeChange} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            top: 5,
                                            left: "-40%",
                                        }} />
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                        position: 'relative',
                                        zIndex: 3,
                                        left: "-16%",
                                    }}>
                                        PLAYER SUPPORT GUIDE
                                    </Typography>

                                </Toolbar>
                            </AppBar>
                        </Box>
                    </React.Fragment>
                    <Toolbar />
                </Grid>
                <Grid container item xs={12} justifyContent='center' style={{ paddingTop: '2vh' }} >
                    <Grid item xs={11}><Typography color="white" variant="h6" >How to check your Reward Status?</Typography></Grid>
                    {data.map((video) => (

                        <Grid item xs={11} key={video.id} height="50vh">
                            <div className="video-responsive">

                                <iframe
                                    src={`https://www.youtube.com/embed/${video.embedId}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>

                            <Typography color="white" variant='body1'>Missing your rewards?
                                <Typography color="white" variant='caption'><br />{video.detail}</Typography></Typography>

                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12} marginTop="0vh" >
                    <EndBar endbartype={endbartype} />

                </Grid>
            </Grid>
        </Box >

    )
}


