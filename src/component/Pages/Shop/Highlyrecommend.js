import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SHOPINDETAILS from '../../../svgicon/Shop/word&button/SHOPINDETAILS.svg'
import { Button, Typography } from '@mui/material';
import Chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import benefit from '../../../svgicon/Shop/Hotpick/benefit.svg'
export default function Highlyrecommend(props) {
    const history = useHistory();
    const { Recommendproducts, onAdd } = props;
    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    const Recommenddata = Recommendproducts.map((data, index) => {
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
                <Grid xs={12} container alignItems='center' justifyContent='center' marginTop="1vh">
                        <img  onClick={() => onAdd(data)} src={SHOPINDETAILS} width='50%' alt=''  />              
                </Grid>
                {Recommendproducts.length == index + 1 ? "" : <hr />}
            </Grid>
        )
    });
    return (
        <Grid xs={11.5}>
            {Recommenddata}
        </Grid>
    )
}

