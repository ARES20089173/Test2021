import React from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import JoinNow from '../../../svgicon/Shop/word&button/JoinNow.svg'
import { useHistory } from "react-router-dom";
export default function Explore() {
    const history = useHistory();

    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    return (
        <Grid xs={11.5}>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <Typography variant='h6' color='white'  textAlign='center'>Explore a world of offer with Puzzles  </Typography>
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <Typography variant='body2' color='white' textAlign='center'>Find out ways to earn exciting rewards and perks to 
                enrich your shopping experience </Typography>
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center' marginTop="1vh">
                <img src={JoinNow} alt='' width="45%" onClick={routeChange}/>
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <Typography variant='body2' color='white' textAlign='center' >Already have an account?<text style={{color:'#FF00FF'}} onClick={routeChange}> Sign In</text></Typography>
            </Grid>

        </Grid>
    )
}

