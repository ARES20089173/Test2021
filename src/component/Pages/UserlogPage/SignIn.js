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
import face1 from '../../../face_1.svg'
import Ricon from '../../../svgicon/Componenticon/Ricon.svg'
import FaceBook from '../../../svgicon/SocialMedia/Facebook.svg'
import Google from '../../../svgicon/SocialMedia/Google.svg'
import LoginRight from '../../../svgicon/LoginComp/LoginRight.svg'
import Loginimg from '../../../svgicon/LoginComp/Loginimg.svg'
import { Checkbox } from "@mui/material";
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
const linkdata = [
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


export default function SignIn() {

    const classes = useStyles();

    const [count, setCount] = React.useState(0);
    const [Default, setDefault] = React.useState();
    const [userName, setuserName] = React.useState();
    const [passWord, setpassWord] = React.useState();
    const handleuserNameChange = (event) => {
        setuserName(event.target.value)
    };
    const handlepassWordChange = (event) => {
        setpassWord(event.target.value)
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
                    <Grid container height="5vh"><Grid xs={9}></Grid><Grid xs={3} container alignItems='center' justifyContent='center' textAlign='center' ><Link to={linkdata[0].link} style={{textDecoration:'none'}}><Typography variant='body2' color='white' style={{ float: 'right' }} >Sign up</Typography></Link></Grid></Grid>
                    <Grid container height="85vh" >
                        <Grid xs={6} container height="70vh" justifyContent='center' textAlign='center' >
                            <Grid xs={12} container height="40vh" justifyContent='center' alignItems="center">
                                <Typography variant="h6" color='white' textAlign='center'>Welcome<br />Back!</Typography>
                                <TextField
                                    id="filled-multiline-flexible"
                                    type="date"
                                    label="Username"
                                    multiline
                                    maxRows={4}
                                    value={userName}
                                    onChange={handleuserNameChange}
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

                                <Grid item xs={12} height="5vh" alignItems='center' justifyContent='center' textAlign='center' >
                                    <Typography color='white' ><Checkbox onChange={() => { setDefault(count); }} color='error'
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }} style={{ paddingTop: '0.5vh' }} />Remember Me</Typography>
                                </Grid>

                                <Grid item xs={12} height="5vh" alignItems='center' justifyContent='center' textAlign='center' >
                                    <Typography color='white' variant="body2" marginBottom='3vh'>use social media to log in</Typography>
                                    <Grid item xs={12} height="5vh" marginBottom='3vh' ><img src={FaceBook} alt='' />   <img src={Google} alt='' /><br /></Grid>
                                    <Link to={linkdata[3].link} style={{textDecoration:'none'}}> <img src={LoginRight} alt='' width='100%' /></Link>
                                </Grid>
                            </Grid>




                        </Grid>

                        <Grid xs={6} container height="70vh">
                            <Grid marginTop='5vh'><img src={Loginimg} alt='' width='100%' /></Grid>
                        </Grid>

                   

                    </Grid>
                        <Grid xs={12} container height="10vh">
                    <Grid xs={4.5} container height="10vh" justifyContent='center' alignItems="center" >
                            <Link to={linkdata[1].link} style={{textDecoration:'none'}}><Typography color='white' variant="caption"> Forgot password</Typography> </Link>
                        </Grid>
                        <Grid xs={7.5} container height="10vh" justifyContent='center' alignItems="center" >
                            <Link to={linkdata[2].link} style={{textDecoration:'none'}}><Typography color='white' variant="caption">Don't have account?/ Sign Up Here</Typography> </Link>
                        </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Box>

    )





}