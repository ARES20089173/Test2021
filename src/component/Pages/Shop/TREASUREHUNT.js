import React  from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import Redmachine from '../../../svgicon/Shop/MachinePic/Redmachine.svg'
import Yellowmachine from '../../../svgicon/Shop/MachinePic/Yellowmachine.svg'
import Bluemachine from '../../../svgicon/Shop/MachinePic/Bluemachine.svg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
  Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Typography } from '@mui/material';
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const data = [
  { id: 0, src: Redmachine,link:"/"},
  { id: 1, src: Yellowmachine,link:"#"},
  { id: 2, src: Bluemachine,link:"#" },
]
export default function Gamechooser() {
  return (
    <Grid container xs={12}style={{ marginBottom: "1.5vh" }}>
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

        {data.map((pic) => (
          <SwiperSlide >
           
          <Typography style={{textAlign:'center'}} color='white' paragraph variant='body2' ><Link to={pic.link}>  <img key={pic.id}src={pic.src} alt="" />  </Link> </Typography>
         
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

