import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EndBar from '../../framework/pureEndbar';
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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
    { id: 0, Sex:"Mr",FirstName: "Cheung", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
    { id: 1, Sex:"Mr",FirstName: "Cheung2", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
    { id: 2, Sex:"Mx",FirstName: "Cheung3", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
]

export default function Profile() {

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
                            <StyledFab size="small" color="secondary" aria-label="add">
                                <HomeIcon />
                            </StyledFab>
                        </Link>
                    </Grid>
                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0 }}>
                            <Toolbar>
                                <Link to={`/`}>
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
            <Grid container alignItems='center' justifyContent='center' height="100vh" >
                <Grid xs={12} height="2%" bgcolor="#8e8b91" >   </Grid>

                <Grid xs={12} container alignItems='center' justifyContent='center' height="20%" bgcolor="#707070" >
                    <Grid xs={7} height="100%" container alignItems='center' justifyContent='center'>
                        <Typography textAlign='center'>{userdata[0].NickName}<br />Rees Id: {userdata[0].ReesID}</Typography>

                    </Grid>
                    <Grid xs={5} height="100%" container alignItems='center' justifyContent='center' >
                        <img src={userdata[0].headicon} alt="headicon" width="50%" />
                        <Link to={`/${id}/Profile/SelectAvatar`} style={{ textDecoration: 'none', color: 'black', background: "black" }}><div button color='white'><Typography color="primary">Change Avatar</Typography></div></Link>
                    </Grid>
                </Grid>
                <Grid xs={12}  container alignItems='center' justifyContent='center' height="63%" bgcolor="#8e8b91" >
                <Grid xs={4}  ><Button size='small' variant={Sex =="Mr"? 'contained':'outlined'} value="Mr" onClick={handleSexChange}>Mr</Button></Grid>
                <Grid xs={4}  > <Button size='small'variant={Sex =="Ms"? 'contained':'outlined'} value="Ms" onClick={handleSexChange}>Ms</Button></Grid>
                <Grid xs={4}  > <Button size='small'variant={Sex =="Mx"? 'contained':'outlined'} value="Mx" onClick={handleSexChange}>Mx</Button></Grid>
                    <TextField
                        id="filled-multiline-flexible"
                        type="date"
                        label="First Name"
                        multiline
                        maxRows={4}
                        value={FirstName}
                        onChange={handleFirstNameChange}
                        variant="filled"
                        size="small"
                        color="secondary"
                        fullWidth={true}
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
                        color="secondary"
                        fullWidth={true}
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
                        color="secondary"
                        fullWidth={true}
                    />
                    <Grid xs={12} container alignItems='center'>
                        <Grid xs={2.5}>
                            <lable>Birthday:</lable></Grid>
                        <Grid xs={9.5}>
                            <TextField size="small" fullWidth={true} type="date" value={Birthday} onChange={handleBirthdayChange} widht='100%' />
                        </Grid>
                    </Grid>
                    <Grid xs={12} container alignItems='center'>
                        <Grid xs={3}>
                            <lable>Contact No:</lable></Grid>
                        <Grid xs={9}>
                            <PhoneInput
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="HK"
                                value={Contact}
                                onChange={setContact} /> </Grid>
                    </Grid>
                    <Grid xs={12} container alignItems='center'>
                        <Grid xs={2.5}>
                            <lable>Deliver Address:</lable></Grid>
                        <Grid xs={2.5}>
                            <TextField
                                label="Flat"
                                multiline
                                maxRows={1}
                                value={Flat}
                                onChange={handleFlatChange}
                                variant="filled"
                                color="secondary" size="small"
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
                                color="secondary" size="small"
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
                                color="secondary" size="small"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} height="15%" container alignItems='center' justifyContent='center' bgcolor="#707070" >
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
                                        <div className="close" >
                                            &times;
                                        </div>
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