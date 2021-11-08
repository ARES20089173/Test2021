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
import LoginDesign from '../../../svgicon/LoginComp/LoginDesign.svg'
import { Button } from "@mui/material";
import Key from '../../../svgicon/RegisterSvg/Key.svg';
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';


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


const userdata = [
    { id: 0, Sex: "Mr", FirstName: "Cheung", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
    { id: 1, Sex: "Mr", FirstName: "Cheung2", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
    { id: 2, Sex: "Mx", FirstName: "Cheung3", LastName: "kit", NickName: "Jay", Birthday: "2011-10-29", Contact: "+852", Flat: "1502", Street: "King road", Area: "Island", Builidng: "HealthyGarden", level: 'Lv1', ReesID: 1121321231, headicon: face1 },
]

export default function ForgotPW() {

    const [Email, setEmail] = React.useState();
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container height="100vh" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                <Grid container
                    direction="row"
                    justifyContent='center'
                    alignItems="center"
                >
                    <Grid container height="5vh"><Grid xs={2} container alignItems='center' justifyContent='center' textAlign='center'><Link to='/login'><Typography variant='body2' color='white' style={{ float: 'right' }} >   &lt; Back  </Typography></Link></Grid><Grid xs={10} ></Grid></Grid>
                    <Grid container justifyContent='center' alignItems="center" height="95vh" >
                        <Grid xs={10} container height="18vh" justifyContent='center' alignItems="center">
                            <Typography variant="h6" color='white' textAlign='center'> Email has been sent!</Typography>
                            <Typography variant="caption" color='white' textAlign='center'>Make Design Workflow Faster with Our Auto-Plugins with Our Auto-Plugins</Typography>
                        </Grid>
                        <Grid xs={12} container height="27vh" justifyContent='center' alignItems="center" style={{ paddingLeft: '5vh' }}>
                            <img src={Key} alt='' width='50%' />
                        </Grid>
                        <Grid xs={12} container height="35vh" justifyContent='center' alignItems="center" >
                       
                            <Grid xs={10} container height="10vh" justifyContent='center' alignItems="center" >
                                <Link to='/login' style={{width:'100%',marginLeft:'20%',textDecoration:'none'}}><Button variant='outlined' style={{ minWidth: '80%', backgroundColor: 'purple', color: 'white', borderColor: 'white' }}>Login</Button></Link>
                            </Grid>
                            <Grid xs={10} container height="10vh" justifyContent='center' alignItems="center" >
                                
                            <Link to='/login' style={{textDecoration:'none'}}> <Typography color='white'>Remember Passwrd? Login</Typography></Link>
                            </Grid>
                            <Grid xs={10} container height="15vh" justifyContent='center' alignItems="center">

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Box>

    )





}