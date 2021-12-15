import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Button, Typography } from '@mui/material';
import Chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import benefit from '../../../svgicon/Shop/Hotpick/benefit.svg'
export default function Featurecourse() {
    const history = useHistory();
    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    const Hotpicdata = [
        { id: 0, picture: [benefit, benefit, benefit,benefit], description: "DANDELION POWER 1 bottle + MASCARA 1pcs xxxxxxxxxxxxxxxxxxxxxxxx",head:"BENEFIT COSMETICS", puzzleType: Chasepuzzle, puzzleNeed: '624', secondpuzzleNeed: '345' },
        { id: 1, picture: [benefit, benefit, benefit], description: "DANDELION POWER 1 bottle + MASCARA 1pcs xxxxxxxxxxxxxxxxxxxxxxxx",head:"BENEFIT COSMETICS", puzzleType: Chasepuzzle, puzzleNeed: '624', secondpuzzleNeed: '345' },
        { id: 2, picture: [benefit, benefit], description: "DANDELION POWER 1 bottle + MASCARA 1pcs xxxxxxxxxxxxxxxxxxxxxxxx", head:"BENEFIT COSMETICS",puzzleType: Chasepuzzle, puzzleNeed: '624', secondpuzzleNeed: '345' },
    ]
    const Hotdata = Hotpicdata.map((data, index) => {
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
                    <Button variant='outlined' onClick={routeChange} >Add to cart - {data.puzzleNeed}
                        <img src={data.puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: -1 }} />
                        or {data.secondpuzzleNeed} </Button>
                </Grid>
                {Hotpicdata.length == index + 1 ? "" : <hr />}
            </Grid>
        )
    });
    return (
        <Grid xs={11.5}>
            {Hotdata}
        </Grid>
    )
}

