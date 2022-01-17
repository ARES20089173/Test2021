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
export default function Policy() {
    const history = useHistory();
    const endbartype = 'Pure'
    const routeChange = () => {
        history.goBack()
    }
    return (

        <Box sx={{ flexGrow: 1 }} bgcolor="#242634" height="100%">

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
                                        PRIVACY POLICY
                                    </Typography>

                                </Toolbar>
                            </AppBar>
                        </Box>
                    </React.Fragment>
                    <Toolbar />
                </Grid>
                <Grid container item xs={12} justifyContent='center' style={{ paddingTop: '0vh' }} >
                    <Grid container justifyContent='center' alignItems='center' xs={12} height="3vh" style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}></Grid>
                    <Grid xs={11} color='white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Grid>
                </Grid>

                <Grid item xs={12} marginTop="0vh" >
                    <EndBar endbartype={endbartype} />

                </Grid>
            </Grid>
        </Box >

    )
}


