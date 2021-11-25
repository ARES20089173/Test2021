import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EndBar from '../../framework/pureEndbar';
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import face1 from '../../../face_1.svg'
import React, { Component } from "react";
import Messagepuzzle from '../../../svgicon/NotificationIcon/Messagepuzzle.svg'
import IconButton from '@mui/material/IconButton';
import "../../framework/css/cssModFMessage.css"
import Clear from "../../../svgicon/MessageCenter/Clear.svg"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
const contentStyle = {
    margin: 'auto',
    background: '#242634',
    width: "95%",
    height: "40%",
    padding: "5px",
    border:'none',
    borderRadius: "5%",
};


const userdata = [
    { id: 0, Sex: "Mr", FirstName: "Cheung", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
    { id: 1, Sex: "Mr", FirstName: "Cheung2", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
    { id: 2, Sex: "Mx", FirstName: "Cheung3", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
]
const styles = {
    root2: {
        background: "#242634"
    },
    root: {
        background: "#35394C"
    },
    input: {
        color: "white"
    }
};
function Profile(props) {

    const { classes } = props;
    const { id } = useParams();
    const [Sex, setSex] = React.useState(userdata[id].Sex);
    const [FirstName, setFirstName] = React.useState(userdata[id].FirstName);
    const [LastName, setLastName] = React.useState(userdata[id].LastName);
    const [NickName, setNickName] = React.useState(userdata[id].NickName);
    const [Birthday, setBirthday] = React.useState(userdata[id].Birthday);
    const [Contact, setContact] = React.useState(userdata[id].Contact);
    const [Flat, setFlat] = React.useState(userdata[id].Flat);
    const [Street, setStreet] = React.useState(userdata[id].Street);
    const [Area, setArea] = React.useState(userdata[id].Area);
    const [Builidng, setBuilindg] = React.useState(userdata[id].Builidng);

    const handleSexChange = (event) => {
        setSex(event.target.value)

    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleNickNameChange = (event) => {
        setNickName(event.target.value);
    };
    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    };
    const handleFlatChange = (event) => {
        setFlat(event.target.value);
    };
    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    };
    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };
    const handleBuildingChange = (event) => {
        setBuilindg(event.target.value);
    };
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
                                        <Link to={`/`} style={{ position: 'relative', top: 3, right: 10 }}>
                                            <img src={back} alt='' width="75%" />
                                        </Link>
                                    </Grid>
                                    <Grid xs={8}>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            textAlign: 'center'
                                        }}> PROFILE
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2}></Grid >
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Toolbar />
                </Box>
            </React.Fragment>
            <Grid container alignItems='center' justifyContent='center' height="100vh" >
                <Grid xs={12} height="2%" bgcolor="#8e8b91" >   </Grid>

                <Grid xs={12} container alignItems='center' justifyContent='center' height="20%" bgcolor="#242634" >
                    <Grid xs={7} height="100%" container alignItems='center' justifyContent='center'>
                        <Typography textAlign='center' color='white'>{userdata[0].NickName}<br />Rees Id: {userdata[0].ReesID}</Typography>

                    </Grid>
                    <Grid xs={5} height="100%" container alignItems='center' justifyContent='center' >
                        <img src={userdata[0].headicon} alt="headicon" width="50%" />
                        <Link to={`/${id}/Profile/SelectAvatar`} style={{ textDecoration: 'none', color: 'black', background: "black" }}><div button color='white'><Typography color="primary">Change Avatar</Typography></div></Link>
                    </Grid>
                </Grid>
                <Grid xs={12} container alignItems='center' justifyContent='center' height="63%" bgcolor="#242634" >
                    <Grid xs={4}  ><Button size='small' variant={Sex == "Mr" ? 'contained' : 'outlined'} value="Mr" onClick={handleSexChange} color='primary'>Mr</Button></Grid>
                    <Grid xs={4}  > <Button size='small' variant={Sex == "Ms" ? 'contained' : 'outlined'} value="Ms" onClick={handleSexChange}>Ms</Button></Grid>
                    <Grid xs={4}  > <Button size='small' variant={Sex == "Mx" ? 'contained' : 'outlined'} value="Mx" onClick={handleSexChange}>Mx</Button></Grid>
                    <TextField
                        id="outlined-basic"
                        type="date"
                        label="First Name"
                        multiline
                        maxRows={4}
                        value={FirstName}
                        onChange={handleFirstNameChange}
                        variant="filled"
                        size="small"
                        fullWidth={true}
                        className={classes.root}
                        InputLabelProps={{
                            style: { fontFamily: 'Arial', color: 'white'}
                        }}
                        inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                    />
                    <TextField
                        id="filled-multiline-flexible"
                        type="date"
                        size="small"
                        label="Last Name"
                        multiline
                        maxRows={4}
                        value={LastName}
                        onChange={handleLastNameChange}
                        variant="filled"
                        className={classes.root}
                        inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                        fullWidth={true}
                        InputLabelProps={{
                            style: { fontFamily: 'Arial', color: 'white'}
                        }}
                    />
                    <TextField
                        id="filled-multiline-flexible"
                        size="small"
                        label="Nickname"
                        multiline
                        maxRows={4}
                        value={NickName}
                        onChange={handleNickNameChange}
                        variant="filled"
                        className={classes.root}
                        inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                        fullWidth={true}
                        InputLabelProps={{
                            style: { fontFamily: 'Arial', color: 'white'}
                        }}
                    />
                    <Grid xs={12} container alignItems='center' bgcolor='#35394C'>
                        <Grid xs={2.5} color='white'>
                            <lable >Birthday:</lable></Grid>
                        <Grid xs={9.5}>
                            <TextField size="small" fullWidth={true} type="date" value={Birthday} onChange={handleBirthdayChange} widht='100%'     className={classes.root}
                         inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                         />
                        </Grid>
                    </Grid>
                    <Grid xs={12} container alignItems='center'>
                        <Grid xs={3} color='white'>
                            <lable>Contact No:</lable></Grid>
                        <Grid xs={9}>
                            <PhoneInput
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="HK"
                                value={Contact}
                                onChange={setContact} 
                             /> </Grid>
                    </Grid>
                    <Grid xs={12} container alignItems='center'>
                        <Grid xs={2.5} color='white'>
                            <lable>Deliver Address:</lable></Grid>
                        <Grid xs={2.5}>
                            <TextField
                                label="Flat"
                                multiline
                                maxRows={1}
                                value={Flat}
                                onChange={handleFlatChange}
                                variant="filled"
                                className={classes.root}
                                inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                                size="small"
                                InputLabelProps={{
                                    style: { fontFamily: 'Arial', color: 'white'}
                                }}
                            />
                        </Grid>
                        <Grid xs={7}>
                            <TextField
                                label="Street"
                                multiline
                                maxRows={1}
                                value={Street}
                                onChange={handleStreetChange}
                                variant="filled"
                                color="secondary" size="small"
                                className={classes.root}
                                inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                                InputLabelProps={{
                                    style: { fontFamily: 'Arial', color: 'white'}
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid xs={12} container alignItems='center'>
                        <Grid xs={2.5}>
                            <lable></lable></Grid>

                        <Grid xs={3.5}>
                            <TextField
                                label="Area"
                                multiline
                                maxRows={1}
                                value={Area}
                                onChange={handleAreaChange}
                                variant="filled"
                                className={classes.root}
                                inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                                InputLabelProps={{
                                    style: { fontFamily: 'Arial', color: 'white'}
                                }}
                         size="small"
                            />
                        </Grid>
                        <Grid xs={6}>
                            <TextField
                                label="Building"
                                multiline
                                maxRows={1}
                                value={Builidng}
                                onChange={handleBuildingChange}
                                variant="filled"
                                className={classes.root}
                                InputLabelProps={{
                                    className: classes.input,
                                }}
                                inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                                InputLabelProps={{
                                    style: { fontFamily: 'Arial', color: 'white'}
                                }}
                                 size="small"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} height="17%" container alignItems='center' justifyContent='center' bgcolor="#242634" >
                    <Grid xs={8} container alignItems='center' justifyContent='center' color='white' height="80%" style={{ borderRadius: "25%" }}>
                        <Popup
                            className="content2"
                            trigger={<Typography color="primary" style={{ color: 'red', backgroundColor: "white" }} >SAVE Profile</Typography>}
                            modal
                            lockScroll
                            nested
                            {...{ contentStyle }}
                        >
                            {close => (
                                <div className="modal2">
                                    <button className="close" onClick={close}>

                                    </button>
                                    <Grid xs={12} marginTop="7vh">
                                        <Typography variant="h4" component="div" color='primary' textAlign='center' >
                                            Profile save successfully
                                        </Typography>
                                    </Grid>
                                </div>
                            )}
                        </Popup>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={12} marginTop="0vh" >
                <EndBar />
            </Grid>
        </Box >

    )

}


export default withStyles(styles)(Profile);