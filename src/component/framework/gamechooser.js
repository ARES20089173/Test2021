import React,{ useState } from 'react';
import "./css/cssFGamechooser.css"
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import GoGameLobby from '../../svgicon/Componenticon/GoGameLobby.svg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import database from '../database'
import SwiperCore, {
  Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Typography } from '@mui/material';
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const { Gamedata } = database;
export default function Gamechooser() {
  const [count, setCount] = useState(0);
  return (
    <Grid container xs={12}style={{ marginBottom: "1.5vh" }}>
      <Swiper
       
        pagination={{
          "type": "custom",
          el: '.swiper-pagination'
        }}
        onSlideChange={(index) => {
          console.log(index.realIndex)
          setCount(index.realIndex);
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

        {Gamedata.map((pic) => (
          <SwiperSlide >
           
          <Typography style={{textAlign:'center'}} color='white' paragraph variant='body2' >  <img key={pic.id}src={pic.src} alt="img1" />   {pic.name}<br/><Typography style={{textAlign:'center'}} color='white' paragraph variant='caption' >{pic.playing} Playing Now</Typography></Typography>
         
          </SwiperSlide>
        ))}
        <Link to={`multigameChooser/tournamentLobby/${count}`}>
           <img src={GoGameLobby} alt="GoGameLobbyicon" width='20%' style={{
              position: 'absolute',
              zIndex: 2,
              bottom: "15%",
              right: "20%",
           }} />
        </Link>
      </Swiper>



    </Grid>
  )
}





