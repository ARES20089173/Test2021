import React  from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import ANIME from '../../../svgicon/Shop/Category/Type/ANIME.svg'
import BEAUTY from '../../../svgicon/Shop/Category/Type/BEAUTY.svg'
import COURSE from '../../../svgicon/Shop/Category/Type/COURSE.svg'
import DIGITAL from '../../../svgicon/Shop/Category/Type/DIGITAL.svg'
import GADET from '../../../svgicon/Shop/Category/Type/GADET.svg'
import GOURMENT from '../../../svgicon/Shop/Category/Type/GOURMENT.svg'
import TOY from '../../../svgicon/Shop/Category/Type/TOY.svg'
import VIRTUAL from '../../../svgicon/Shop/Category/Type/VIRTUAL.svg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
  Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Typography } from '@mui/material';
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const data = [
  { id: 0, src: ANIME,link:"/Shop/Category/ANIME",category: "ANIME" },
  { id: 1, src: BEAUTY,link:"/Shop/Category/BEAUTY", category: "BEAUTY" },
  { id: 2, src: COURSE ,link:"/Shop/Category/COURSE", category: "COURSE" },
  { id: 3, src: DIGITAL ,link:"/Shop/Category/DIGITAL" , category: "DIGITAL"},
  { id: 4, src: GADET,link:"/Shop/Category/GADET", category: "GADET" },
  { id: 5, src: GOURMENT,link:"/Shop/Category/GOURMENT", category: "GOURMENT"} ,
  { id: 6, src: TOY,link:"/Shop/Category/TOY" , category: "TOY"},
  { id: 7, src: VIRTUAL ,link:"/Shop/Category/VIRTUAL" , category: "VIRTUAL"},
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
           
          <Typography style={{textAlign:'center'}} color='white' paragraph variant='body2' ><Link to={pic.link}>  <img key={pic.id}src={pic.src} alt="img1" />  </Link> </Typography>
         
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

