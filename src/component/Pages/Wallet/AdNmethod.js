import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'

import { withStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
// Import Swiper React components
import Addnewpayment from '../../../svgicon/Componenticon/Addnewpayment.svg';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Gicon1 from '../../../svgicon/Carousel/Bankcard.svg'
import Addicon from '../../../svgicon/BankCardicons/Addicon.svg'
import alipay from '../../../svgicon/BankCardicons/alipay.svg'
import amapay from '../../../svgicon/BankCardicons/amapay.svg'
import card from '../../../svgicon/BankCardicons/card.svg'
import mastercard from '../../../svgicon/BankCardicons/mastercard.svg'
import visa from '../../../svgicon/BankCardicons/visa.svg'
import paypal from '../../../svgicon/BankCardicons/paypal.svg'
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import { Button } from '@material-ui/core';
// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Checkbox } from '@mui/material';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const styles = {
    root: {
        background: "transparent"
    },
    input: {
        color: "white"
    }
};
function AdNmethod(props) {
    const endbartype='Wallet'
    const [choose, setChoose] = React.useState(1);
    const [Loginname, setLoginname] = React.useState();
    const [Password, setPassword] = React.useState();
    const handleLoginnameChange = (event) => {
        setLoginname(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handlechooseChange  = (e) => {
        setChoose(e)
    };
    const { classes } = props;
    return (

        <Box sx={{ flexGrow: 1 }} bgcolor='#242634' height="100vh">
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >

                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0, backgroundColor: "#242634" }}>
                            <Toolbar >
                                <Grid xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid xs={2} >
                                        <Link to='/wallet/SaveCards'>
                                            <img src={back} alt='' width="80%" style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                top: 5,
                                                left: "-40%",
                                            }} />
                                        </Link>
                                    </Grid>
                                    <Grid xs={10} >
                                        <Typography variant="body1" component="div" sx={{ textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-10%",
                                        }} >
                                                 ADD NEW Method
                                        </Typography>
                                    </Grid>
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
                alignItems="center">
                <Grid item xs={12} height="3vh" style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}>
                    <Typography variant="body1" color="#ffffff" >
                        New Payment Method
                    </Typography>
                </Grid> 

                <Grid container justifyContent="center" alignItems="center" xs={12} height="59vh" style={{ textAlign: 'center' }}>

                    <Grid item xs={11} height="17%" >
                        <Typography variant="body2" color="#ffffff" paragraph>
                            To abide by local regulation, we need to
                            verify your identity before you can
                            use CheDiPay. All information will
                            remain confidential and secure
                        </Typography>
                    </Grid>
                    <Grid item xs={11} height="43%" >
                    <img src={alipay} alt=''  value={1} onClick={()=> handlechooseChange(1)} style={{marginLeft:'0vh',background:choose==1?'red':'' ,width:'15%'}}></img><img src={mastercard} alt='' onClick={()=> handlechooseChange(2)}  style={{marginLeft:'10vh',background:choose==2?'red':'',width:'15%' }}/><img src={amapay} alt='' onClick={() => handlechooseChange(3)} style={{marginLeft:'10vh',background:choose==3?'red':'' ,width:'15%'}}/>
             
                        <TextField
                            id="outlined-basic"
                            label="Loginname"
                            multiline
                            maxRows={4}
                            value={Loginname}
                            onChange={handleLoginnameChange}
                            variant="filled"
                            size="small"
                            colorSecondary
                            fullWidth={true}  required
                            InputLabelProps={{
                                style: { fontFamily: 'Arial', color: 'white'}
                            }}
                            className={classes.root}
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                        />
                         <TextField
                            id="outlined-basic"
                            label="Password"
                            multiline
                            maxRows={4}
                            value={Password}
                            onChange={handlePasswordChange}
                            variant="filled"
                            size="small"
                            colorSecondary
                            fullWidth={true}  required
                            className={classes.root}
                            InputLabelProps={{
                                style: { fontFamily: 'Arial', color: 'white'}
                            }}
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                        />
                    </Grid>
                    <Grid item xs={12} container alignItems='center' justifyContent='center'>
                        <img src={Addnewpayment} alt='' width="50%"/>
                    </Grid>
                </Grid>
             
            </Grid> 
            <Grid item xs={12} marginTop="0%" >
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    );
}




export default withStyles(styles)(AdNmethod);