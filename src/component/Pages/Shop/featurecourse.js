import React from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Button, Typography } from '@mui/material';
export default function Featurecourse(props) {
    const { Featurecourseproducts, onAdd } = props;
   
    const Featurecoursedata = Featurecourseproducts.map((data, index) => {
        return (
            <Grid xs={12}>
                <div className="carousel-wrapper" >
                    <Carousel infiniteLoop width={"100%"} showArrows={false} emulateTouch showStatus={false} autoPlay swipeable showThumbs={false} >

                        {data.picture.map((picdata) => {
                            return (
                                <div>
                                    <img src={picdata} alt="pic" />
                                </div>
                            )
                        })}

                    </Carousel>

                </div>
                <Grid xs={12} container alignItems='center' justifyContent='center'>
                    <Typography variant='h6' color='white' textAlign='center'>
                        {data.head}
                    </Typography>
                </Grid>
                <Grid xs={12} container alignItems='center' justifyContent='center'>
                    <Typography variant='caption' color='white' textAlign='center'>
                        {data.description}
                    </Typography>
                </Grid>
                <Grid xs={12} container alignItems='center' justifyContent='center' marginTop="1vh">
                    <Button variant='outlined'  onClick={() => onAdd(data)} >Add to cart - {data.puzzleNeed}
                        <img src={data.puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: -1 }} />
                        or {data.secondpuzzleNeed} </Button>
                </Grid>
                {Featurecourseproducts.length === index + 1 ? "" : <hr />}
            </Grid>
        )
    });
    return (
        <Grid xs={11.5}>
            {Featurecoursedata}
        </Grid>
    )
}

