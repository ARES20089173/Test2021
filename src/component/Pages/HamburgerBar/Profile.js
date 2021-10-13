import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EndBar from '../../framework/pureEndbar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home'
import face1 from '../../../face_1.svg'
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


const userdata = [
    { id: 0, name: "Ka Po", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
]

export default function Profile() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
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
                                    Profile
                                </Typography>
                                <Grid xs={1}></Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Toolbar />
                </Box>
            </React.Fragment>
            <Grid container alignItems='center' justifyContent='center' height="83vh" >
                <Grid xs={12} height="2%" bgcolor="#8e8b91" >   </Grid>

                <Grid xs={12} container alignItems='center' justifyContent='center' height="20%" bgcolor="#707070" >
                    <Grid xs={7} height="100%" container alignItems='center' justifyContent='center'>
                        <Typography textAlign='center'>{userdata[0].name}<br />Rees Id:{userdata[0].ReesID}</Typography>

                    </Grid>
                    <Grid xs={5} height="100%" container alignItems='center' justifyContent='center' >
                        <img src={userdata[0].headicon} alt="headicon" width="50%" />
                        <Link to={"/"} style={{ textDecoration: 'none', color: 'black', background: "black" }}><div button color='white'><Typography color="primary">Change Avatar</Typography></div></Link>
                    </Grid>
                </Grid>
                <Grid xs={12} height="63%" bgcolor="#8e8b91" >
                    <TextField
                        id="filled-multiline-flexible"
                        label="First Name"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        variant="filled"
                        color="secondary"
                        fullWidth={true}

                        type="date"

                    />
                </Grid>
                <Grid xs={12} height="15%" container alignItems='center' justifyContent='center' bgcolor="#707070" >
                    <Grid xs={8} container alignItems='center' justifyContent='center' color='white' bgcolor='red' height="80%" style={{ border: "1px solid grey", borderRadius: "25%", background: "black" }}>                    <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }} width="80%"><Typography width="100%" color="primary">SAVE Profile</Typography></Link></Grid>

                </Grid>
            </Grid>
            <Grid item xs={12} marginTop="0vh" >
                <EndBar />
            </Grid>
        </Box >

    )

}