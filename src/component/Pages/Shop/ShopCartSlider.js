import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { Typography } from '@mui/material';
import Chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'

import { useHistory } from "react-router-dom";
import Showme from '../../../svgicon/Shop/word&button/Showme.svg'
import { Link } from 'react-router-dom';
const minDistance = 20000;

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#FF00FF',
    height: 3,
    padding: '13px 0',

    '& .MuiSlider-track': {
        height: 10,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#22466E',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 12,
    },
}));
const PrettoSlider = styled(Slider)({
    color: '#bfbfbf',
    height: 8,
    '& .MuiSlider-track': {
        height: 10,
    },
    '& .MuiSlider-rail': {
        color: '#bfbfbf',
        height: 12,
        opacity: 1
    },
    '& .MuiSlider-thumb': {
        height: 22,
        width: 20,
        backgroundColor: '#FF00FF',

    },

});
function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
};
export default function Shopcartslider() {
    const history = useHistory();
    const routeChange = () => {

        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    const [value1, setValue1] = React.useState([0]);

    const handleChange1 = (event, newValue, activeThumb) => {
            setValue1(newValue); 
    };
    return (
        <Grid xs={9}>
            <Grid xs={12} container alignItems='left' justifyContent='left'><Typography>Play with how you want yo pay  </Typography></Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'> <Typography variant='caption'>
                Combine your hard earned puzzles with cash to reduce
                your cost of purchase. You can decide your final mix before the checkout

            </Typography></Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={1}
                    min={0} max={100}
                    value={value1}
                    onChange={handleChange1}
                />
                <Grid xs={6} container alignItems='center'  ><Typography >CASH</Typography></Grid>
                <Grid xs={6} container alignItems='center' justifyContent='right' ><Typography >Puzzle</Typography></Grid>

                <Grid xs={6} container alignItems='center'  ><Typography  variant='body2' >HKD {10*value1}</Typography></Grid>
                <Grid xs={6} container alignItems='center' justifyContent='right' ><img src={Chasepuzzle} alt='' width="15%" style={{ position: 'relative', top: -2 }} /><Typography variant='body2' >{10*(100-value1)}</Typography></Grid>
            </Grid>
     
        </Grid>
    )
}

