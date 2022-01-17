import React from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
export default function Hotpic(props) {
    const { Hotpicproducts, onAdd } = props;
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
            {Hotpicproducts.length===index+1?"" :  <hr />}
        </Grid>
        )
    });
    return (
        <Grid xs={11.5}>
            {Hotdata}
        </Grid>
    )
}

