import React from 'react';
import Grid from '@mui/material/Grid';
import adv1 from '../../../svgicon/Advertise/adv1.svg'
import referimg from '../../../svgicon/Advertise/Referfriend.svg'
import powerby from '../../../svgicon/PowerBy/PowerByR.svg'
import Typography from '@mui/material/Typography';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import Box from '@mui/material/Box';
import backgroundEnd from "../../../reed_bg.svg"
import GameChooser from '../../framework/gamechooser';
import Scrollbanner from '../../framework/scrollbanner';
import NavigationBar from '../../framework/navigationBar';
import Scrolltext from '../../framework/scrolltext';
import GameLobby from '../../../svgicon/Componenticon/GameLobby.svg'
import { Button } from '@mui/material';
import EndBar from '../../framework/endbarWithback';
import { Link } from "react-router-dom"

import { RWebShare } from "react-web-share";

const contentStyle = {
    marginTop: '20%',
    background: '#242634',
    border:'none',
    width: "90%",
    height: "60%",
    borderRadius: "5%",
};
export default function MainPage() {
    const endbartype='MainPlay'

    return (
        <Box sx={{ flexGrow: 1 }} height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover' }}>
            <Grid item xs={12}  >
                <NavigationBar />
            </Grid>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item xs={11} style={{ marginTop: -38 }} >
                    <div style={{ textAlign: 'center' }}>
                        <Scrollbanner />
                    </div>
                </Grid>
                <Grid item xs={11} height="5vh" style={{ marginTop: '1vh' }}>
                    <Scrolltext />
                </Grid>
                <Grid item xs={12} height="30vh">
                    <GameChooser />
                    <Link to='/multigameChooser'>
                        <img src={GameLobby} alt="Gamelobby" width="15%" style={{
                            position: 'absolute',
                            zIndex: 1,
                            bottom: "38vh",
                            left: 0,
                        }} />
                    </Link>
                </Grid>
                <Grid item xs={11} >
                    <div style={{ textAlign: 'center' }}>
                        <Popup
                            trigger={<div className="button"> <div ><a href><img src={adv1} width="100%" alt="inviteimage" /></a></div></div>}
                            modal
                            nested
                            {...{ contentStyle }}
                        >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close} >
                                       
                                    </button>
                                    <Grid xs={12}>
                                        <Typography variant="body2" component="div" color='primary' textAlign='center'>
                                            refer friends & earn up to $500 puzzles
                                        </Typography>
                                        <Typography variant="caption" component="div" color='primary' textAlign='center'>
                                            Referal Code
                                        </Typography>

                                        <Grid item xs={12} height="38vh">
                                            <div className="video-responsive">
                                                <Grid xs={12} textAlign='center'>
                                                    <RWebShare
                                                        data={{
                                                            text: '复制这段code ILOVEREESPUZZLES 进入我们的官网',
                                                            url: "https://puzzlegame2021.netlify.app/p",
                                                            title: "Share With your friends!",
                                                        }}
                                                        onClick={() => console.log("shared successfully!")}
                                                    >
                                                        <Button variant='outlined'>ILOVEREESPUZZLES</Button>
                                                    </RWebShare>
                                                </Grid>
                                                <Typography variant="body2" component="div" color='primary' textAlign='center'>

                                                    <img src={referimg} width="70%" alt="referimage" />
                                                    <img src={powerby} width="40%" alt=''/>
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Popup>
                    </div >
                </Grid>

                <Grid item xs={12} height="30vh">
                    <EndBar endbartype={endbartype}/>
                </Grid>
            </Grid>
        </Box>
    );
}