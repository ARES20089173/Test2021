import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import Typography from '@mui/material/Typography';
import puzzle from "../../../puzzle.svg"
import square1 from '../../framework/img/square1.jpeg'
const contentStyle = {
    background: '#cfcece',
    width: "100%",
    height: "70%",
    borderRadius: "5%",
};
const EndGameData = { Gamename: "2048", Gameicon: square1, GameScore: 66, GameRanking: 3, GamePuzzleRewards: 123 }
export default class TournamentLobby extends Component {

    render() {
        return (
            <Popup
                trigger={
                    <div className="button">
                        <button onClick={this.handleClick}>
                            BattleModeEnd Page Trigger
                        </button>
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
                            <div className="close" onClick={this.handleClick} >
                                &times;
                            </div>
                        </button>
                        <Grid xs={12} container justifyContent="center" alignItems='center' height="70vh">
                            <Grid xs={12} item height="50%" style={{ borderBottom: "1px solid grey", textAlign: 'center' }}>
                                <Grid xs={12} item height="50%" style={{ textAlign: 'center' }}>
                                    <Typography variant="h5" component="div" color='primary' textAlign='center'>
                                        {EndGameData.Gamename}
                                    </Typography>
                                    <Typography variant="h5" component="div" color='primary' textAlign='center'>
                                        BattleMode
                                    </Typography>
                                    <img src={EndGameData.Gameicon} alt="gameicon" width="13%" />
                                </Grid>
                                <Grid xs={12} item height="50%" style={{ textAlign: 'center' }}>
                                    <Typography variant="h6" component="div" color='primary' textAlign='center'>
                                        Your score: {EndGameData.GameScore}
                                    </Typography>
                                    <Typography variant="h6" component="div" color='primary' textAlign='center'>
                                        Your ranking: {EndGameData.GameRanking}
                                    </Typography>
                                    <Typography variant="h6" component="div" color='primary' textAlign='center'>
                                        puzzles REWARDS: {EndGameData.GamePuzzleRewards}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* next half page */}
                            <Grid xs={12} item height="50%" >
                                <Grid xs={12} container height="35%" style={{ textAlign: 'center' }} alignItems='center' justifyContent="center">
                                    <Grid xs={8} item height="35%" style={{ textAlign: 'center' }}>
                                        <Typography variant="body2" component="div" color='primary' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                            keep it up, someone is
                                            chasing you and going to
                                            take your ranking
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} container height="65%" style={{ textAlign: 'center' }} alignItems='center' justifyContent="center">
                                    <Grid xs={8} item height="22%" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                                        <Typography variant="body1" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                            Play Again Earn More
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} container>
                                        <Grid xs={5} container height="22%" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                                        <Grid xs={9} item height="22%" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                                Share to
                                                earn free
                                            </Typography>
                                        </Grid>
                                        <Grid xs={3} item height="22%" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                                        <img src={puzzle} alt="puzzleicon" width="100%"/>
                                        </Grid>

                                        </Grid>
                                        <Grid xs={2} item height="22%" style={{ textAlign: 'center', backgroundColor: 'black' }}>

                                        </Grid>
                                        <Grid xs={5} item height="22%" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                                            <Typography variant="body2" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
                                                GO accept other
                                                players'challenge
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