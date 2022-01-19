import React from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Gicon1 from '../../../svgicon/Shop/Category/Gicon1.svg'
import Gicon2 from '../../../svgicon/Shop/Category/Gicon2.svg'
import Gicon3 from '../../../svgicon/Shop/Category/Gicon3.svg'
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import database from '../../database'
// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Typography } from '@mui/material';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

export default function Gamechooser() {

const { Categorydata } = database;
    return (
        <Grid container xs={12} style={{ marginBottom: "1vh" }} justifyContent='center' alignItems='center'>
            <Grid container xs={11} justifyContent='center' alignItems='center' >
                <Typography style={{ textAlign: 'center' }} color='black' paragraph variant='body2'  >Rees player love us so much,and we love them
                    as much as our parents, let's join our community and share love together</Typography>
            </Grid>
            <Swiper
                pagination={{
                    "type": "custom",
                    el: '.swiper-pagination'
                }}
                loop={true}
                navigation={false}
                centeredSlides
                slidesPerView={1.5}
                style={{ marginTop: 0 , marginBottom: "1vh" }}
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

                {Categorydata.map((pic) => (
                    <SwiperSlide >
                        <div style={{ backgroundColor: 'gray', width: '80%', height: '40vh' }}>
                            <Typography style={{ textAlign: 'center' }} paragraph variant='body2'  ><Link to="#">  <img key={pic.id} src={pic.src} alt="img1" style={{ width: '60%' }} />  </Link> </Typography>
                            <Typography style={{ textAlign: 'center' }} paragraph variant='body2' >
                                BENEFIT COSMETICS</Typography>
                            <Typography style={{ textAlign: 'center' ,wordWrap: 'break-word'}} paragraph variant='caption'  >BEASDLFKJASDLFJADSKFJASDLKFJASDLFADSLKFJSADLKFJASKDLFJASDLKFJAKLSDFJASDLKF;ASDF;KLADS;J;FKL</Typography>

                        </div>
                    </SwiperSlide>
                ))}
               
            </Swiper>
            <Grid xs={12} container justifyContent='center' alignItems='center'>
                <img src={Gicon1} alt='' width="20%" style={{ marginRight: '6vh' }} />
                <img src={Gicon2} alt='' width="20%" style={{ marginRight: '6vh' }} />
                <img src={Gicon3} alt='' width="20%"/>
            </Grid>


        </Grid>
    )
}

