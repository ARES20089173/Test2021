import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import datas from '../../../database'

export default function Opened() {
    const { Expireddata } = datas

    return (

        <Grid container xs={12} justifyContent='center' alignItems='center' style={{ textAlign: 'center' }}>{Expireddata.map((data) => (
            <Grid container xs={6} justifyContent='center' alignItems='center' style={{ textAlign: 'center' }}>
                <Grid xs={11} height="50vh" style={{ textAlign: 'center', border: '1px solid gray', marginTop: '1vh' }}>
                    <Grid xs={12} height="24vh" container justifyContent='center' alignItems='center'>
                        <img src={data.picture} width="100%" alt='' />
                    </Grid>
                    <Grid xs={12} height="24vh" container justifyContent='center' alignItems='center' marginTop='2vh'>
                        <Typography variant='body2'> {data.head}</Typography>
                        <Grid xs={12}  container >
                            <Typography  variant='body2'>Date of Redemption:<br />{data.DateOfRedemption}</Typography>
                        </Grid>
                        <Grid xs={12}container >
                            <Typography  variant='body2'>By:<br />{data.By}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
        )}
        </Grid>
    )
}