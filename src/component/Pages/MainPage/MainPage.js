import React from 'react';
import Grid from '@mui/material/Grid';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import adv1 from '../../../svgicon/Advertise/adv1.svg'
import Typography from '@mui/material/Typography';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import Box from '@mui/material/Box';
import backgroundEnd from "../../../reed_bg.svg"
import puzzle from '../../../puzzle.svg'
import GameChooser from '../../framework/gamechooser';
import Scrollbanner from '../../framework/scrollbanner';
import NavigationBar from '../../framework/navigationBar';
import Scrolltext from '../../framework/scrolltext';
import GameLobby from '../../../svgicon/Componenticon/GameLobby.svg'

import EndBar from '../../framework/endbar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from "react-router-dom"

const StyledFab2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    bottom: "42vh",
    left: 0,
});
const contentStyle = {
    marginTop: '17%',
    background: '#cfcece',
    width: "90%",
    height: "60%",
    borderRadius: "5%",
};
export default function MainPage() {

    return (
        <Box sx={{ flexGrow: 1 }}  height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
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
                <Grid item xs={11} height="5vh" style={{ marginTop: '1vh'}}>
                    <Scrolltext />
                    {/* <Grid xs={1}></Grid>
                    <Grid xs={10}><Scrolltext /></Grid>
                    <Grid xs={1}></Grid> */}
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
                            trigger={<div className="button"> <div ><a href><img src={adv1} width="100%"  alt="inviteimage" /></a></div></div>}
                            modal
                            nested
                            {...{ contentStyle }}
                        >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        <div className="close" >
                                            &times;
                                        </div>
                                    </button>
                                    <Grid xs={12}>
                                        <Typography variant="h4" component="div" color='primary' textAlign='center'>
                                            Want HK$300<img src={puzzle} alt="puzzle"/>？
                                        </Typography>
                                        <Typography variant="caption" component="div" color='primary' textAlign='center'>
                                            For a limited time, earn HK$300 for every
                                            10 friends who becomes a paying
                                            PUZZLECHASE member.
                                            Offer ends Dec31,2021. T&Cs apply
                                        </Typography>

                                        <Grid item xs={12} height="33vh">
                                            <div className="video-responsive">
                                        <Grid xs={12} >
                                        <div style={{ border: '1px solid black', height: '100%' }}>   
                                        <Typography variant="body2" component="div" color='primary' textAlign='center'>
                                        ILOVEREESPUZZLES
                                        </Typography>
                                        <Typography variant="caption" component="div" color='primary' textAlign='center'>
                                        referral code
                                        </Typography>
                                        </div></Grid>
                                            <img src={adv1} width="100%"  alt="inviteimage" />
                                            </div>
                                        </Grid>
                                        <Typography variant="body2" component="div" color='primary' textAlign='center'>
                                            REES | Puzzle
                                            Chase              
                                            <KeyboardArrowDown />
                                            300<img src={puzzle} />
                                        </Typography>
                                    </Grid>
                                </div>
                            )}
                        </Popup>
                    </div >
                </Grid>

                <Grid item xs={12} height="30vh">
                    <EndBar />
                </Grid>
            </Grid>
        </Box>
    );
}