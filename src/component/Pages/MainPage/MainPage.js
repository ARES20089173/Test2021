import React from 'react';
import Grid from '@mui/material/Grid';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import pic1 from '../../framework/img/testPic1.png'
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
import InviteImage from '../../framework/inviteimage';
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
    marginTop: '20%',
    background: '#cfcece',
    width: "95%",
    height: "60%",
    borderRadius: "5%",
};
export default function MainPage() {

    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
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
                <Grid item xs={11} height="3vh">
                    <Scrolltext />
                    {/* <Grid xs={1}></Grid>
                    <Grid xs={10}><Scrolltext /></Grid>
                    <Grid xs={1}></Grid> */}
                </Grid>
                <Grid item xs={12} height="28vh">
                    <GameChooser />
                    <Link to='/multigameChooser'>
                        <StyledFab2 size="small" color="secondary" aria-label="add">
                            <ReadMoreIcon />
                        </StyledFab2>
                    </Link>
                </Grid>
                <Grid item xs={11} >
                    <div style={{ textAlign: 'center' }}>
                        <Popup
                            trigger={<div className="button"> <div ><a href><img src={pic1} width="100%" height="65vh" alt="inviteimage" /></a></div></div>}
                            modal
                            closeOnDocumentClick={false}
                            lockScroll
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
                                        <Grid item xs={12} height="35vh">
                                            <div className="video-responsive">
                                            <img src={pic1} width="100%"  alt="inviteimage" />
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