import React, { useRef } from "react";
import Box from '@mui/material/Box';
import backgroundEnd from "../../../reed_bg.svg"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import 'react-phone-number-input/style.css'
import { Link } from "react-router-dom"
import 'reactjs-popup/dist/index.css';
import Gift from '../../../svgicon/RegisterSvg/Gift.svg';
import Morepuzzle from '../../../svgicon/RegisterSvg/Morepuzzle.svg';
import Movie from '../../../svgicon/RegisterSvg/Movie.svg';
import GoRight from '../../../svgicon/RegisterSvg/GoRight.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import powerbyR from '../../../svgicon/PowerBy/PowerByR.svg';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);

export default function SignIn() {

    const swiperRef = useRef(null);
    const nextSlide = () => {
        console.log("click next", swiperRef.current);
        swiperRef.current?.swiper.slideNext();
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                <Grid container
                    direction="row"
                    justifyContent='center'
                    alignItems="center"
                >
                    <Grid container height="5vh"><Grid xs={9}></Grid><Grid xs={3} container alignItems='center' justifyContent='center' textAlign='center' ><Link to='/Register/Info/Finish' style={{textDecoration:'none'}}><Typography variant='body2' color='white' style={{ float: 'right' }} >Skip</Typography></Link></Grid></Grid>
                    <Grid container height="95vh" >
                        <Grid xs={12} container height="95vh" justifyContent='center' alignItems="center" >
                            <Swiper ref={swiperRef} pagination={true} className="mySwiper" allowTouchMove={false}>
                                <SwiperSlide>
                                    <Grid xs={12} container justifyContent='center' alignItems="center">
                                        <Grid xs={12} height="35vh">
                                            <img src={Morepuzzle} alt="inviteimage" />
                                        </Grid>
                                        <Grid item xs={7} height="35vh">
                                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                                Compete in your favourite
                                                games. Scores high
                                                to earn puzzles. Go
                                                shopping with
                                                Puzzles
                                            </Typography>
                                            <Typography variant="caption" component="div" color='white' textAlign='center' >
                                                Make Design Workflow Faster with Our Auto-Plugins
                                            </Typography>
                                        </Grid>

                                        <Grid xs={4} height="30vh">
                                            <img src={GoRight} alt="inviteimage" onClick={nextSlide} />
                                        </Grid>
                                        <Grid xs={12} height="22vh">

                                            <Typography variant="body2" component="div" color='white' textAlign='center' marginTop="1vh">
                                                <img src={powerbyR} alt="inviteimage" />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Grid xs={12} container justifyContent='center' alignItems="center">
                                        <Grid xs={12} height="35vh">
                                            <img src={Gift} alt="inviteimage" />
                                        </Grid>
                                        <Grid item xs={7} height="35vh">
                                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                                Compete a few missions to
                                                receive coins and
                                                puzzles. Select your
                                                favourite game.
                                                Go play. And if you
                                                still don't have enough
                                                puzzles, you can purchase
                                                a puzzle package
                                            </Typography>
                                            <Typography variant="caption" component="div" color='white' textAlign='center' >
                                                Make Design Workflow Faster with Our Auto-Plugins
                                            </Typography>
                                        </Grid>

                                        <Grid xs={4} height="30vh">
                                            <img src={GoRight} alt="inviteimage" onClick={nextSlide} />
                                        </Grid>
                                        <Grid xs={12} height="22vh">

                                            <Typography variant="body2" component="div" color='white' textAlign='center' marginTop="1vh">
                                                <img src={powerbyR} alt="inviteimage" />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <Grid xs={12} container justifyContent='center' alignItems="center">
                                        <Grid xs={12} height="35vh">
                                            <img src={Movie} alt="inviteimage" />
                                        </Grid>
                                        <Grid item xs={7} height="35vh">
                                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                                If you are still unsure,
                                                our homepage has
                                                the tutorials to
                                                answer all your questions
                                            </Typography>
                                            <Typography variant="caption" component="div" color='white' textAlign='center' >
                                                Make Design Workflow Faster with Our Auto-Plugins
                                            </Typography>
                                        </Grid>

                                        <Grid xs={4} height="30vh">
                                            <Link to="/Register/Info/Finish" style={{textDecoration:'none'}}><img src={GoRight} alt="inviteimage" onClick={nextSlide} /></Link>
                                        </Grid>
                                        <Grid xs={12} height="22vh">

                                            <Typography variant="body2" component="div" color='white' textAlign='center' marginTop="1vh">
                                                <img src={powerbyR} alt="inviteimage" />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SwiperSlide>
                            </Swiper>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Box >

    )





}