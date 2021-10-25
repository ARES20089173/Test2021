import React, { Component } from "react";
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
import EndBar from '../../framework/pureEndbar';
import back from '../../../svgicon/Componenticon/Back.svg'
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Gicon1 from '../../../svgicon/GameIcon/Gicon1.svg'
import Gicon2 from '../../../svgicon/GameIcon/Gicon2.svg'
import Gicon3 from '../../../svgicon/GameIcon/Gicon3.svg'
import GoGameLobby from '../../../svgicon/Componenticon/GoGameLobby.svg'
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation, EffectCoverflow
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const data = [
  { id: 0, src: Gicon1, name: "2048", number: 52, entryFee: 88 },
  { id: 1, src: Gicon2, name: "原神", number: 56, entryFee: 848 },
  { id: 2, src: Gicon3, name: "LoL", number: 55, entryFee: 828 },
]
export default class MessageCenter extends Component {
   
    render() {

      


        return (

            <Box sx={{ flexGrow: 1 }} bgcolor='#242634'>
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
                                        <Grid xs={10} >
                                            <Typography variant="body1" component="div" sx={{ textAlign: 'center' }} style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                left: "-10%",
                                            }} >
                                                SAVE CARDS
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
                        Payment Methods
                        </Typography>
                    </Grid>

                </Grid>
                <Grid item xs={12} marginTop="0vh" >
                    <EndBar />
                </Grid>
            </Box>
        );
    }


}