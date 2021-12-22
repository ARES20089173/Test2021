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
export default function Hotpic(props) {
    const history = useHistory();

    const { Hotpicproducts, onAdd } = props;
    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    const Hotdata = Hotpicproducts.map((data,index) => {
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
                <Button variant='outlined' onClick={() => onAdd(data)} >Add to cart - {data.puzzleNeed}
                    <img src={data.puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: -1 }} />
                    or {data.secondpuzzleNeed} </Button>
            </Grid>
            {Hotpicproducts.length==index+1?"" :  <hr />}
        </Grid>
        )
    });
    return (
        <Grid xs={11.5}>
            {Hotdata}
        </Grid>
    )
}

