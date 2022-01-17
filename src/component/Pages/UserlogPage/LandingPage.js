import React from "react";
import Box from '@mui/material/Box';
import backgroundEnd from "../../../svgicon/Landingicon/LandingBg.svg"
import Grid from '@mui/material/Grid';
import 'react-phone-number-input/style.css'
import 'reactjs-popup/dist/index.css';
import Player from '../../../svgicon/Landingicon/PlayerLink.svg'
import Shop from '../../../svgicon/Landingicon/ShopLink.svg'
import PuzzleChase from '../../../svgicon/EndBaricon/PuzzleChase.svg'
import { useHistory } from "react-router";
export default function LandingPage() {
    const history = useHistory();
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
                        height="45vh"
                        xs={6}
                    >
                        <img src={Shop} alt='' onClick={() => routeChange("Shop")} width='50%' />
                    </Grid>
                </Grid>
                <Grid container
                    justifyContent='center'
                    alignItems="right"
                    height="10vh"
                    xs={12}
                >
                    <img src={PuzzleChase} className="App-logo" alt="logo" width="30%" />
                </Grid>
                <Grid container
                    justifyContent='center'
                    alignItems="right"
                    height="45vh"
                    xs={6}
                >
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                        xs={6}

                    >
                        <img src={Player} alt='' onClick={() => routeChange("")} width='100%' />
                    </Grid>
                </Grid>
                <Grid container xs={6} />

            </Grid>
        </Box>

    )





}