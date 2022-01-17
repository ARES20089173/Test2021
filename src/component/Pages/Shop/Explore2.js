import React from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import WaysToEarn from '../../../svgicon/Shop/word&button/WaysToEarn.svg'
import WaysToREDEEM from '../../../svgicon/Shop/word&button/WaysToREDEEM.svg'
export default function Explore2() {
    const history = useHistory();

    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    return (
        <Grid xs={11.5} container alignItems='center' justifyContent='center'>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <Typography variant='h6' color='white' textAlign='center'>How to Shop & Earn Puzzles  </Typography>
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <Typography variant='body2' color='white' textAlign='center'>Earn more Puzzles for different actions
                    ,and turn those Puzzles into awesome rewards! </Typography>
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <Grid xs={6} container alignItems='center' justifyContent='center' marginTop="1vh">
                    <img src={WaysToEarn} alt='' width="90%" onClick={routeChange}/>
                </Grid>
                <Grid xs={6} container alignItems='center' justifyContent='center' marginTop="1vh">
                    <img src={WaysToREDEEM} alt='' width="90%" onClick={routeChange}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

