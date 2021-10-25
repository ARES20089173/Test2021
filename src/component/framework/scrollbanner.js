import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../../svgicon/Carousel/pic1.svg'
import GameTutorial from '../../svgicon/Componenticon/GameTutorial.svg';
class App extends Component {
    render() {
       
        return (

            <div  >
                <div className="carousel-wrapper" >
                <Link to='/gametutorial'>
                            <img src={GameTutorial} alt="gameTutorailicon" width="10%"  style={{
                                position: 'relative',
                                zIndex: 1,
                                top:50,
                                left:"44%",
                            }}/>
                    </Link>
                    <Carousel infiniteLoop width={"100%"} showArrows={false} emulateTouch showStatus={false} autoPlay swipeable showThumbs={false} >
                        <div>
                            <img src={pic1} alt="pic" />
                        </div>
                        <div>
                            <img src={pic1} alt="pic1" />
                        </div>
                        <div>
                            <img src={pic1} alt="pic2" />
                        </div>
                        
                    </Carousel>
                  
                </div>
            </div>
        )
    }
}

export default App