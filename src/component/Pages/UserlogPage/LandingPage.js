import React from "react";
import Box from '@mui/material/Box';
import backgroundEnd from "../../../reed_bg.svg"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import 'react-phone-number-input/style.css'
import 'reactjs-popup/dist/index.css';
import Player from '../../../svgicon/EndBaricon/PlayerLink.svg'
import Shop from '../../../svgicon/EndBaricon/ShopLink.svg'
import { useHistory } from "react-router";
export default function LandingPage() {
    const history= useHistory();
    const routeChange = (value) => {
        console.log("textmessage")
        let path = `/${value}`;
        history.push(path);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                <Grid container
                    height="50vh"
                    xs={12}
                >
                    <Grid container xs={6} />
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                        height="50vh"
                        xs={6}
                    >
                        <img src={Shop} alt=''  onClick={()=>routeChange("Shop")} />
                    </Grid>
                </Grid>

                <Grid container
                                          justifyContent='center'
                                          alignItems="right"
                    height="50vh"
                    xs={6}
                >
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                        xs={6}
                        
                    >
                        <img src={Player} alt='' onClick={()=>routeChange("")} />
                    </Grid>
                </Grid>
                <Grid container xs={6} />

            </Grid>
        </Box>

    )





}