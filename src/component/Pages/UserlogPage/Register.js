import React from "react";
import Box from '@mui/material/Box';
import backgroundEnd from "../../../reed_bg.svg"
import Grid from '@mui/material/Grid';
import { TextField, makeStyles } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import 'react-phone-number-input/style.css'
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import 'reactjs-popup/dist/index.css';
import Ricon from '../../../svgicon/Componenticon/Ricon.svg'
import face1 from '../../../svgicon/Headicon/face_1.svg'
import face2 from '../../../svgicon/Headicon/face_2.svg'
import face3 from '../../../svgicon/Headicon/face_3.svg'
import { Button, Checkbox, InputLabel } from "@mui/material";
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
const sexdata = [
    { id: 0, link: '/Register' },
    { id: 1, link: '/login/ForgotPW' },
    { id: 2, link: '/Register' },
    { id: 3, link: '/' },
]

const useStyles = makeStyles((theme) => ({
    input: {
        color: "#FFF",
        cssUnderline: {
            '&:after': {
                borderBottomColor: '#333333',
            },
            disableUnderline: true,
            underline: {
                "&&&:before": {
                    borderBottom: "none"
                }
            }
        },
    },
}));

export default function Register() {
    const classes = useStyles();
    const [count, setCount] = React.useState(0);
    const [Default, setDefault] = React.useState();
    const [face, setface] = React.useState(face1);
    const [Name, setName] = React.useState();
    const [MobileNumber, setMobileNumber] = React.useState();
    const [Email, setEmail] = React.useState();
    const [passWord, setpassWord] = React.useState();
    const [ConfirmpassWord, setConfirmpassWord] = React.useState();

    const handleNameChange = (event) => {
        setName(event.target.value)
    };
    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value)
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };
    const handlepassWordChange = (event) => {
        setpassWord(event.target.value)
    };
    const handleConfirmpassWordChange = (event) => {
        setConfirmpassWord(event.target.value)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container height="100vh" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                <Grid container
                    direction="row"
                    justifyContent='center'
                    alignItems="center"
                >
                    <Link to='/'>
                        <img src={HomeIcon} alt='' width="15%" style={{
                            position: 'fixed',
                            zIndex: 3,
                            top: "77vh",
                            left: 0,
                        }} />
                    </Link>
                    <Grid container height="5vh"><Grid xs={9}></Grid><Grid xs={3} container justifyContent='center' alignItems='center' textAlign='center' ><Link to='/login' style={{textDecoration:'none'}}><Typography variant='body2' color='white' style={{ float: 'right' }} >Log in</Typography></Link></Grid></Grid>
                    <Grid container height="95vh" >
                        <Grid xs={8} container height="70vh" justifyContent='center' alignItems="center">
                            <Typography variant="h6" color='white' textAlign='center'>Creat<br />Account!</Typography><br />
                            <Grid xs={11} container height="8vh" justifyContent='center' alignItems="center">
                                <Grid xs={4} container height="8vh" justifyContent='center' alignItems="center"><Button variant='outlined' onClick={() => setface(face1)}>Mr.</Button></Grid>
                                <Grid xs={4} container height="8vh" justifyContent='center' alignItems="center"><Button variant='outlined' onClick={() => setface(face2)}>Ms.</Button></Grid>
                                <Grid xs={4} container height="8vh" justifyContent='center' alignItems="center"><Button variant='outlined' onClick={() => setface(face3)}>Mx.</Button></Grid>
                            </Grid>
                            <Grid xs={11} justifyContent='center' alignItems="center">
                                <TextField
                                    id="filled-multiline-flexible"
                                    label="Name"
                                    multiline
                                    maxRows={4}
                                    value={Name}
                                    onChange={handleNameChange}
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}
                                    InputLabelProps={{
                                        className: classes.input,
                                    }}
                                    inputProps={{ className: classes.input }}
                                />
                                <TextField
                                    id="filled-multiline-flexible"
                                    type="number"
                                    label="Mobile Number"
                                    multiline
                                    maxRows={4}
                                    value={MobileNumber}
                                    onChange={handleMobileNumberChange}
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}
                                    InputLabelProps={{
                                        className: classes.input,
                                    }}
                                    inputProps={{ className: classes.input }}
                                />
                                <TextField
                                    id="filled-multiline-flexible"
                                    type="Email"
                                    label="Email"
                                    multiline
                                    maxRows={4}
                                    value={Email}
                                    onChange={handleEmailChange}
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}
                                    InputLabelProps={{
                                        className: classes.input,
                                    }}
                                    inputProps={{ className: classes.input }}
                                />
                                <TextField
                                    id="filled-multiline-flexible"
                                    type='password'
                                    label="Password"
                                    multiline
                                    maxRows={4}
                                    value={passWord}
                                    onChange={handlepassWordChange}
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}

                                    InputLabelProps={{
                                        className: classes.input,
                                    }}
                                    inputProps={{ className: classes.input }}
                                />
                                <TextField
                                    id="filled-multiline-flexible"
                                    type='password'
                                    label="Confirm Password"
                                    multiline
                                    maxRows={4}
                                    value={ConfirmpassWord}
                                    onChange={handleConfirmpassWordChange}
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}

                                    InputLabelProps={{
                                        className: classes.input,
                                    }}
                                    inputProps={{ className: classes.input }}
                                />
                                <InputLabel style={{ color: 'red', display: ConfirmpassWord == passWord ? 'none' : 'block' }} >Password not same!</InputLabel>
                                <Grid xs={10} container height="10vh" justifyContent='center' alignItems="center" >
                                    <Link to='/Register/Info' style={{minWidth: '100%',marginLeft:'50%',marginTop:'5%' ,textDecoration:'none'}}><Button variant='outlined' style={{  backgroundColor: 'purple', color: 'white', borderColor: 'white' }}>Register</Button></Link>
                                    <Typography color='white' ><Checkbox onChange={() => { setDefault(count); }} color='error'
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }} style={{ paddingTop: '0.5vh' }} />ACCEPT T&C</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={4} container height="70vh" justifyContent='center' style={{ paddingTop: '5vh' }}>
                            <Grid style={{ textAlign: 'center' }}><img src={face} alt='' width='100%' /></Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Box>

    )





}