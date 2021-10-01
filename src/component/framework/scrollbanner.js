import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic from './img/300x100v2.jpeg'
import pic1 from './img/300x100.jpeg'
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ExploreIcon from '@mui/icons-material/Explore';
class App extends Component {
    render() {
        const StyledFab2 = styled(Fab)({
            position: 'relative',
            zIndex: 3,
            top: 45,
            left:"42%"
        });
        return (

            <div style={{}}>
                <div className="carousel-wrapper" >
                <Link to='/gametutorial'>
                        <StyledFab2 size="small" color="secondary" aria-label="add">
                            <ExploreIcon/>
                        </StyledFab2>
                    </Link>
                    <Carousel infiniteLoop width={"100%"} emulateTouch showStatus={false} autoPlay swipeable showThumbs={false} >
                        <div>
                            <img src={pic} alt="pic" />
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