import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import React,{ useState } from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Gicon1 from '../../../svgicon/Shop/Category/Gicon1.svg'
import Gicon2 from '../../../svgicon/Shop/Category/Gicon2.svg'
import Gicon3 from '../../../svgicon/Shop/Category/Gicon3.svg'
import Gicon4 from '../../../svgicon/Shop/Category/Gicon4.svg'
import Gicon5 from '../../../svgicon/Shop/Category/Gicon5.svg'
import Gicon6 from '../../../svgicon/Shop/Category/Gicon6.svg'
import Gicon7 from '../../../svgicon/Shop/Category/Gicon7.svg'
import Gicon8 from '../../../svgicon/Shop/Category/Gicon8.svg'
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
import { Typography } from '@mui/material';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const data = [
  { id: 0, src: Gicon1, category: "ANIME"},
  { id: 1, src: Gicon2, category: "BEAUTY"},
  { id: 2, src: Gicon3, category: "COURSE" },
  { id: 3, src: Gicon4, category: "DIGITAL"},
  { id: 4, src: Gicon5, category: "GOURMENT"},
  { id: 5, src: Gicon6, category: "HEALTH" },
  { id: 6, src: Gicon7, category: "GADGET"},
  { id: 7, src: Gicon8, category: "VIRTUAL"},
]
export default function Gamechooser() {
  const [count, setCount] = useState(0);
  const [swiper, setSwiper] = useState();
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

        {data.map((pic) => (
          <SwiperSlide >
           
          <Typography style={{textAlign:'center'}} color='white' paragraph variant='body2' ><Link to="#">  <img key={pic.id}src={pic.src} alt="img1" />  </Link> </Typography>
         
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

