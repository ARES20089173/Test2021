import * as React from 'react';
import { styled } from '@mui/material/styles';
import Popup from 'reactjs-popup';
import SwieprConent from './swiperContentsmall';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline';
import Badge from '@mui/material/Badge'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import backgroundEnd from "../../rees_bg2.svg"
import { Link } from 'react-router-dom';
import LinkBarWithback from './linkbarwithback';

import Notification from '../../svgicon/Componenticon/Notification.svg'
import Ricon from '../../svgicon/Componenticon/Ricon.svg'
import Rmoneyicon from '../../svgicon/Componenticon/Rmoneyicon.svg'
import SilverPuzzle from '../../svgicon/Componenticon/SilverPuzzle.svg'
import Chasepuzzle from '../../svgicon/Componenticon/Chasepuzzle.svg'
import addicon from '../../svgicon/Componenticon/addicon.svg'
import Endbarbg from '../../svgicon/Componenticon/Endbarbg.svg'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 7,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
        zIndex: 2,   backgroundColor: "red",
        color:'white'
    },
}));
const contentStyle = {
    marginTop: '43%',
    border:'none',
    background: '#242634',
    width: "90%",
    height: "62%",
    borderRadius: "5%",
};

const Amout = [{ Chasepuzzle: 18.6, SilverPuzzle: 20.5, money: 1000,notification:30 }]
export default function BottomAppBar() {
    return (
        <React.Fragment>

            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <AppBar color="transparent" elevation={0} position="fixed" align='center' sx={{ top: 'auto', bottom: 0 ,zIndex:0}} style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: "fixed", backgroundRepeat: 'no-repeat', backgroundAttachment: 'cover', heigth: "15vh" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"

                    >
                        <Grid item xs={12} align='center' >
                            <Toolbar variant="dense">
                                <LinkBarWithback />
                            </Toolbar>
                            <div style={{ backgroundColor: "#242634", borderTop: "1px solid #8e8b91" }}>
                                <Toolbar variant="dense">
                                <img src={Ricon} alt="ricon" width="10%" />
                                    <Grid xs={12} container>
                                        <Grid xs={4} variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} >
                                            <div style={{ backgroundImage: `url(${Endbarbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}>
                                                <Popup
                                                    trigger={<Grid  container justifyContent='center' alignItems='center' className="button" style={{ color: "white" }}>  <img src={Chasepuzzle} className="App-logo" alt="logo" width="20%"style={{position:'relative',float:'left'}}  /><Typography style={{float:'right'}}>{Amout[0].Chasepuzzle}k<img src={addicon} style={{ width: 20,marginLeft:2,}} /></Typography></Grid>}
                                                    modal
                                                    lockScroll
                                                    nested
                                                    {...{ contentStyle }}
                                                >
                                                    {close => (
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>
                                                             
                                                            </button>
                                                            <SwieprConent />
                                                        </div>

                                                    )}
                                                </Popup>
                                            </div>
                                        </Grid>
                                        <Grid xs={4} variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                            <div style={{ backgroundImage: `url(${Endbarbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}>
                                                <Popup
                                                    trigger={<Grid  container justifyContent='center' alignItems='center' className="button" style={{ color: "white" }}>  <img src={SilverPuzzle} className="App-logo" alt="logo" width="20%"style={{position:'relative',float:'left'}}  /><Typography style={{float:'right'}}>{Amout[0].Chasepuzzle}k<img src={addicon} style={{ width: 20,marginLeft:2}} /></Typography></Grid>}
                                                    modal
                                                    lockScroll
                                                    nested
                                                    {...{ contentStyle }}
                                                >
                                                    {close => (
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>
                                                               
                                                            </button>
                                                            <div>
                                                                <SwieprConent />
                                                            </div  >
                                                        </div>

                                                    )}
                                                </Popup>
                                            </div>
                                        </Grid>
                                        <Grid xs={4} variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                            <div style={{ height: '100%', backgroundImage: `url(${Endbarbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}>
                                                <div className="button" style={{ color: "white",paddingTop:4 }}>
                                                    <img src={Rmoneyicon} className="App-logo" alt="logo" width="20%" style={{  float: 'left',position:'relative',top:2 }} />
                                                    {Amout[0].money}
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Link to="/MessageCenter">
                                    <div style={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            top: -30,
                                            left: 0,
                                            right: 0,
                                            margin: '0 82%',
                                        }}>
                                            <StyledBadge badgeContent={Amout[0].notification}  >
                                                <img src={Notification} />
                                            </StyledBadge>
                                        </div>
                                    </Link>
                                </Toolbar>

                            </div>
                        </Grid>
                    </Grid>

                </AppBar>
                <Toolbar sx={{
                    height: "20vh",
                }} />
            </Box>
        </React.Fragment>
    );
}
