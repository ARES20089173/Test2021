import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import React,{ useState } from 'react';
import "./css/cssFGamechooser.css"
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Gicon1 from '../../svgicon/GameIcon/Gicon1.svg'
import Gicon2 from '../../svgicon/GameIcon/Gicon2.svg'
import Gicon3 from '../../svgicon/GameIcon/Gicon3.svg'
import GoGameLobby from '../../svgicon/Componenticon/GoGameLobby.svg'
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
export default function Gamechooser() {
  const [count, setCount] = useState(0);
  return (
    <Grid container xs={12} alignItems="center" style={{ marginBottom: "1.5vh" }}>
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
            <img key={pic.id}src={pic.src} alt="img1" width="50%" />
          </SwiperSlide>
        ))}
        <Link to={`multigameChooser/tournamentLobby/${count}`}>
           <img src={GoGameLobby} alt="GoGameLobbyicon" width='20%' style={{
              position: 'absolute',
              zIndex: 2,
              bottom: "-8%",
              right: "20%",
           }} />
        </Link>
      </Swiper>



    </Grid>
  )
}










// import React from 'react';
// import { makeStyles } from '@material-ui/styles';
// import GridList from '@material-ui/core/ImageList';
// import GridListTile from '@material-ui/core/ImageListItem';
// import GridListTileBar from '@material-ui/core/ImageListItemBar';
// import pic1 from './component/framework/img/1.JPG'
// import pic2 from './component/framework/img/2.JPG'
// import pic3 from './component/framework/img/3.JPG'
// import $ from 'jquery';
// import "./App.css"
// class Application extends React.Component {
//   constructor(){
//     super()
//     this.scroll = this.scroll.bind(this)
//   }


//   scroll(direction){
//     let far = $( '.image-container' ).width()/2*direction;
//     let pos = $('.image-container').scrollLeft() + far;
//     $('.image-container').animate( { scrollLeft: pos }, 1000)
//   }

//   render() {
//     return <div className="main">
//       <div className="wrapper">
//         <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
//         <div className="image-container">
//           <div className="image">1</div>
//           <div className="image">2</div>
//           <div className="image">3</div>
//           <div className="image">4</div>
//           <div className="image">5</div>
//           <div className="image">6</div>
//           <div className="image">7</div>
//           <div className="image">8</div>
//           <div className="image">9</div>
//           <div className="image">10</div>
//         </div>
//         <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
//       </div>
//     </div>;
//   }
// }

// export default Application;