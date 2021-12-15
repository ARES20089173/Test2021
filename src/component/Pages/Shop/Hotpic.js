import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { Button, Typography } from '@mui/material';
import Chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import JoinNow from '../../../svgicon/Shop/word&button/JoinNow.svg'
import { useHistory } from "react-router-dom";
import benefit from '../../../svgicon/Shop/Hotpick/benefit.svg'
export default function Hotpic() {
    const history = useHistory();

    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    const Hotpicdata = [
        { id: 0, picture: benefit, description: "DANDELION POWER 1 bottle + MASCARA 1pcs",head:"BENEFIT COSMETICS", puzzleType: Chasepuzzle, puzzleNeed: '624', secondpuzzleNeed: '345' },
        { id: 1, picture: benefit, description: "DANDELION POWER 1 bottle + MASCARA 1pcs",head:"BENEFIT COSMETICS", puzzleType: Chasepuzzle, puzzleNeed: '624', secondpuzzleNeed: '345' },
        { id: 2, picture: benefit, description: "DANDELION POWER 1 bottle + MASCARA 1pcs",head:"BENEFIT COSMETICS", puzzleType: Chasepuzzle, puzzleNeed: '624', secondpuzzleNeed: '345' },
    ]
    const Hotdata = Hotpicdata.map((data,index) => {
        return(
        <Grid xs={12}>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <img src={data.picture} alt='' width="100%" />
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                    <Typography variant='h6' color='white' textAlign='center'>
                        {data.head}
                    </Typography>
                </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <Typography variant='body2' color='white' textAlign='center'>
                    {data.description}
                </Typography>
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center' marginTop="1vh">
                <Button variant='outlined' onClick={routeChange} >Add to cart - {data.puzzleNeed}
                    <img src={data.puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: -1 }} />
                    or {data.secondpuzzleNeed} </Button>
            </Grid>
            {Hotpicdata.length==index+1?"" :  <hr />}
        </Grid>
        )
    });
    return (
        <Grid xs={11.5}>
            {Hotdata}
        </Grid>
    )
}

