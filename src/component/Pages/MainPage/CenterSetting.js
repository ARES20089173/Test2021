import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom"
import Switch from '@mui/material/Switch';
import database from '../../database'
export default class MessageCenter extends Component {
    render() {

        const {centerSettingdata} = database;
        const data=centerSettingdata
        const handleChange = (event) => {
            // for swith
        };
        const data2 = data.map((data) => {
            if (data.id % 2 === 0) {
                return <Grid container
                    direction="row"
                    alignItems="center"
                    height="11vh"
                    style={{ backgroundColor: "#242634" }}>

                    <Grid item xs={9} style={{ textAlign: 'left', paddingLeft: '6vh' }} >
                        <img src={data.icon} width="9%" alt=''/>
                        <Typography variant="caption" color="#ffffff" style={{ overflowWrap: 'break-word' }} display="inline"> {data.setname}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={2}>
                        <Switch
                            defaultChecked
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Grid>
                </Grid>
            } else {
                return <Grid container
                    direction="row"
                    alignItems="center"
                    height="11vh"

                    style={{ backgroundColor: "#35394C" }}>

                    <Grid item xs={9} style={{ textAlign: 'left', paddingLeft: '6vh' }} >
                        <img src={data.icon} width="9%" alt=''/>
                        <Typography variant="caption" color="#ffffff" style={{ overflowWrap: 'break-word' }} display="inline"> {data.setname}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={2}>
                        <Switch
                            defaultChecked
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
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
                                        <Link to={`/MessageCenter`} style={{ position: 'relative', top: 3,right:10 }}>
                                            <img src={back} alt='' width="75%" />
                                        </Link>
                                    </Grid>
                                    <Grid xs={8}>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                    textAlign:'center'  }}>           Notice Setting
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