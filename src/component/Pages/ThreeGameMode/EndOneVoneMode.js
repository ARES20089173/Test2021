import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import Typography from '@mui/material/Typography';
import Chasepuzzle from "../../../svgicon/Componenticon/Chasepuzzle.svg"
import PlayAgain from "../../../svgicon/BattleMode/PlayAgain.svg"
import FreeShare from "../../../svgicon/BattleMode/FreeShare.svg"
import left from '../../../svgicon/End1ON1Mode/4.svg';
import { Link } from 'react-router-dom';
import database from '../../database'
const { EndOneVoneModedata } = database;
const contentStyle = {
    background: '#242632',
    width: "90%",
    height: "82%",
    border: 'none'
};
export default class OneVoneMode extends Component {

    render() {
        return (
            EndOneVoneModedata.map((data, index) => (
                <Popup
                    trigger={
                        <div className="button">
                            <button onClick={this.handleClick}>
                                {data.max} Page Trigger
                            </button>
                           <Link to={'/multigameChooser/tournamentLobby/0/0/OneVoneMode'}> <button >
                               back
                            </button>
                            </Link>
                        </div>

                    }
                    modal
                    lockScroll
                    onClick
                    closeOnDocumentClick={false}
                    nested
                    {...{ contentStyle }}
                >
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>

                            </button>
                            <Grid xs={12} container justifyContent="center" alignItems='center' height="100vh" style={{ backgroundImage: `url(${data.background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundAttachment: 'cover' }}>
                                <Grid xs={12} item height="30%" >
                                    <Grid container xs={11} justifyContent='center' alignItems="center" height="20vh" textAlign='center'>
                                        <Typography textAlign='center' variant='h6'><img src={Chasepuzzle} alt='' width="20%" />x{data.quality}<br />{data.text}</Typography>
                                    </Grid>
                                </Grid>

                                {/* next half page */}
                                <Grid xs={12} item height="45%" >
                                    <Grid xs={12} container height="20%" style={{ textAlign: 'center' }} alignItems='center' justifyContent="center">
                                        <Grid xs={8} item height="35%" style={{ textAlign: 'center' }}>
                                            <Typography variant="body2" component="div" color='primary' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                                Don't miss out<br /> Try agian for double bouns!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container height="40%" style={{ textAlign: 'center' }} alignItems='center' justifyContent="center">
                                        <Grid xs={8} item height="22%" style={{ textAlign: 'center' }}>
                                            <Typography variant="body1" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                                <img src={PlayAgain} alt='' width="60%" />
                                            </Typography>
                                        </Grid>
                                        <Grid xs={12} container>
                                            <Grid xs={5.5} container height="24%" style={{ textAlign: 'center' }}>
                                                <Typography variant="body2" component="div" color='white' textAlign='center' >
                                                    <img src={FreeShare} alt='' width="95%" />
                                                </Typography>

                                            </Grid>
                                            <Grid xs={1} item height="22%" style={{ textAlign: 'center' }}>

                                            </Grid>
                                            <Grid xs={5.5} item height="22%">
                                                <Typography variant="caption" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                                <img src={left} alt='' width="95%" />
                                            
                                                </Typography>
                                            </Grid>


                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                </Popup>
              
            ))
        )
        
    }
}