import square from './img/square.jpeg'
import square1 from './img/square1.jpeg'
import square2 from './img/square2.jpeg'
import React from "react";
import "./css/cssFGamechooser.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export default () => {
  return (
    <Swiper 
    
    pagination={{
      "type": "custom"
    }} 
    navigation={false }
    centeredSlides
    slidesPerView={2}
    spaceBetween={30}
    style={{marginTop:10}}
    className="mySwiper">
      <SwiperSlide ><img src={square} alt="img1"  /></SwiperSlide>
      <SwiperSlide ><img src={square1} alt="img1"  /></SwiperSlide>
      <SwiperSlide ><img src={square2} alt="img1"  /></SwiperSlide>
    </Swiper>
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