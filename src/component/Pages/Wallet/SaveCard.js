import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom"
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import savecardbg from '../../../svgicon/Background/SaveCard.svg'
import Creditcard from '../../../svgicon/WalletTrans/Creditcard.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import Gicon1 from '../../../svgicon/Carousel/Bankcard.svg'
import Addicon from '../../../svgicon/BankCardicons/Addicon.svg'
import alipay from '../../../svgicon/BankCardicons/alipay.svg'
import ArrowPay from '../../../svgicon/BankCardicons/ArrowPay.svg'
import amapay from '../../../svgicon/BankCardicons/amapay.svg'
import mastercard from '../../../svgicon/BankCardicons/mastercard.svg'
import visa from '../../../svgicon/BankCardicons/visa.svg'
import paypal from '../../../svgicon/BankCardicons/paypal.svg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Checkbox } from '@mui/material';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const data = [
    { id: 0, src: Gicon1, name: "2048", number: 52, entryFee: 88 },
    { id: 1, src: Gicon1, name: "原神", number: 56, entryFee: 848 },
    { id: 2, src: Gicon1, name: "LoL", number: 55, entryFee: 828 },
]
export default function Savecard() {
    const endbartype='Wallet'
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
                                        <Link to='/wallet'>
                                            <img src={back} alt='' width="80%" style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                top: 5,
                                                left: "-40%",
                                            }} />
                                        </Link>
                                    </Grid>
                                    <Grid xs={8} >
                                        <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
                                            SAVE CARDS
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2} ></Grid>
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
                        Payment Methods
                    </Typography>
                </Grid>
                <Grid container xs={12} height="20vh" alignItems="center" style={{ marginBottom: "1.5vh" }}>
                    <Swiper
                        pagination={{
                            "type": "custom",
                            el: '.swiper-pagination'
                        }}
                        onSlideChange={(index) => {
                            console.log(index.realIndex)
                        }}
                        loop={true}
                        navigation={false}
                        centeredSlides
                        slidesPerView={1.5}
                        spaceBetween={30}
                        style={{ marginTop: 10 }}
                        effect={"coverflow"}
                        grabCursor={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -10,
                            depth: 400,
                            modifier: 1,
                            slideShadows: false
                        }}
                        className="mySwiper">

                        {data.map((pic) => (
                            <SwiperSlide >
                                <img key={pic.id} src={pic.src} alt="img1" width="100%" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>

                <Grid item xs={12} height="5vh" alignItems='center' justifyContent='center' textAlign='center' >
                    <Typography color='white' ><Checkbox  color='error'
                        sx={{
                            color: 'white',
                            '&.Mui-checked': {
                                color: 'white',
                            },
                        }} style={{ paddingTop: '0.5vh' }} />Default Payment</Typography>
                </Grid>

                <Grid container xs={11.5} alignItems='center' justifyContent='center' height="30vh" style={{ backgroundImage: `url(${savecardbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover' }}>
                    <Grid container xs={11} alignItems='center' justifyContent='center' height="10vh">
                        <Grid container xs={12} height="50%" alignItems='center' style={{ marginLeft: 52 }}>
                            <img src={Addicon} alt='' width="6%" /><img src={Creditcard} alt='' style={{ marginLeft: '2vh' }} width="12%" />
                            <Link to={`/Wallet/SaveCards/AddNewCards`} color='white' style={{ textDecoration: 'none', color: 'white' }}>
                                <Typography variant='body1' style={{
                                    position: 'relative',
                                    top: '15%',
                                    left: '10%',
                                }} >add new card </Typography>
                            </Link>
                        </Grid>
                        <Grid container xs={12} height="50%" marginTop="1vh" alignItems='center' justifyContent='center' >
                            <img src={visa} alt='' style={{ width: '15%' }} /><img src={mastercard} alt='' style={{ marginLeft: '2vh', width: '15%' }} /><img src={amapay} alt='' style={{ marginLeft: '2vh', width: '15%' }} />
                        </Grid>
                    </Grid>
                    <Grid container xs={11} height="10vh" marginBottom="1vh" alignItems='center' justifyContent='center'>
                        <Grid container xs={12} height="50%" alignItems='center' justifyContent='center'>
                            <img src={Addicon} alt='' width="5%" /><img src={Creditcard} alt='' style={{ marginLeft: '2vh' }} width="10%" />
                            <Link to={`/Wallet/SaveCards/AddNewCards`} color='white' style={{ textDecoration: 'none', color: 'white' }}>
                                <Typography variant='body1' style={{
                                    position: 'relative',
                                    top: '15%',
                                    left: '10%',
                                }} >add payment method</Typography>
                            </Link>
                        </Grid>
                        <Grid container xs={12} height="50%" marginTop="1vh" alignItems='center' justifyContent='center'>
                            <img src={alipay} alt='' style={{ width: '15%' }} /><img src={paypal} alt='' style={{ marginLeft: '2vh', width: '15%' }} /><img src={ArrowPay} alt='' style={{ marginLeft: '2vh', width: '15%' }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} marginTop="0vh" >
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    );
}


