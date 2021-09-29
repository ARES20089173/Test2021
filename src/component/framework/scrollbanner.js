import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic from './img/300x100v2.jpeg'
import pic1 from './img/300x100.jpeg'
import pic2 from './img/300x100.jpeg'
class App extends Component {

    render() {
        return (
            <div style={{}}>
            <div className="carousel-wrapper"  height="80vh">
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
            </div>
        )
    }
}

export default App