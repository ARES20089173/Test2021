import React from 'react';
import '../../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Typography } from '@mui/material';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

export default function Typechooser(props) {

    const { picture } = props;
    console.log(picture)
    return (
        <Grid container xs={12} style={{ marginBottom: "1.5vh" }}>
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
                style={{ marginTop: 0 }}
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

                {picture.map((pic) => (
                    <SwiperSlide >

                        <Typography style={{ textAlign: 'center' }} color='white' paragraph variant='body2' ><Link to="#">  <img key={pic.id} src={pic.picture[1]!== "s" ?pic.picture[1]:pic.picture} alt="img1" />  </Link> </Typography>

                    </SwiperSlide>
                ))}
                {/* <Link to={`multigameChooser/tournamentLobby/${count}`}> */}
                {/* <Link to="#">
           <img src={GoGameLobby} alt="GoGameLobbyicon" width='20%' style={{
              position: 'absolute',
              zIndex: 2,
              bottom: "15%",
              right: "20%",
           }} />
        </Link> */}
            </Swiper>



        </Grid>
    )
}

