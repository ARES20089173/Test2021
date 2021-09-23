import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic from './img/testPic.png'
import pic1 from './img/testPic1.png'
import pic2 from './img/testPic2.png'
class App extends Component {

    render() {
        return (
            <div className="carousel-wrapper" style={{marginTop:10 }}>
                <Carousel infiniteLoop width={"100%"} emulateTouch showStatus={false} autoPlay swipeable showThumbs={false} > 
                    <div>
                        <img src={pic} alt="pic" />
                    </div>
                    <div>
                        <img src={pic1} alt="pic1" />
                    </div>
                    <div>
                        <img src={pic2} alt="pic2" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default App