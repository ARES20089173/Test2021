import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import Typography from '@mui/material/Typography';
import PlayAgain from "../../../svgicon/BattleMode/PlayAgain.svg"
import FreeShare from "../../../svgicon/BattleMode/FreeShare.svg"
import GoAccept from "../../../svgicon/EndBattleMode/Goaccept.svg"

import database from '../../database'
import { Link } from 'react-router-dom';
const contentStyle = {
    background: '#242632',
    width: "100%",
    height: "70%",
    borderRadius: "5%",
};
const { EndBattleModeGameData } = database;
const EndGameData=EndBattleModeGameData
export default class EndBattleMode extends Component {

    render() {
        return (
            
            <Popup
                trigger={
                    <div className="button">
                        <button onClick={this.handleClick}>
                            BattleModeEnd Page Trigger
                        </button>
                        <Link to={'/multigameChooser/tournamentLobby/0/0/BattleModeJoin'}> <button >
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
                        <Grid xs={12} container justifyContent="center" alignItems='center' height="70vh">
                            <Grid xs={12} item height="50%" style={{ borderBottom: "1px solid grey", textAlign: 'center' }}>
                                <Grid xs={12} item height="50%" style={{ textAlign: 'center' }}>
                                    <Typography variant="h5" component="div" color='white' textAlign='center'>
                                        {EndGameData.Gamename}
                                    </Typography>
                                    <Typography variant="h5" component="div" color='white' textAlign='center'>
                                        BattleMode
                                    </Typography>
                                    <img src={EndGameData.Gameicon} alt="gameicon" width="13%" />
                                </Grid>
                                <Grid xs={12} item height="50%" style={{ textAlign: 'center' }}>
                                    <Typography variant="h6" component="div" color='white' textAlign='center'>
                                        Your score: {EndGameData.GameScore}
                                    </Typography>
                                    <Typography variant="h6" component="div" color='white' textAlign='center'>
                                        Your ranking: {EndGameData.GameRanking}
                                    </Typography>
                                    <Typography variant="h6" component="div" color='white' textAlign='center'>
                                        puzzles REWARDS: {EndGameData.GamePuzzleRewards}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* next half page */}
                            <Grid xs={12} item height="50%" >
                                <Grid xs={12} container height="35%" style={{ textAlign: 'center' }} alignItems='center' justifyContent="center">
                                    <Grid xs={8} item height="35%" style={{ textAlign: 'center' }}>
                                        <Typography variant="body2" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                            keep it up, someone is
                                            chasing you and going to
                                            take your ranking
                                        </Typography>
                                        
                                    </Grid>
                                </Grid>
                                <Grid xs={12} container height="65%" style={{ textAlign: 'center' }} alignItems='center' justifyContent="center">
                                    <Grid xs={8} item height="22%" style={{ textAlign: 'center' }}>
                                        <Typography variant="body1" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                            <img src={PlayAgain} alt='' width="60%" />
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} container>
                                        <Grid xs={5.5} container height="22%" style={{ textAlign: 'center' }}>
                                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                                <img src={FreeShare} alt='' width="75%" />
                                            </Typography>

                                        </Grid>
                                        <Grid xs={1} item height="22%" style={{ textAlign: 'center' }}>

                                        </Grid>
                                        <Grid xs={5.5} item height="22%">
                                                <Typography variant="caption" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                                <img src={GoAccept} alt='' width="75%" />
                                            
                                                </Typography>
                                            </Grid>


                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </Popup>
             
        )
    }
}