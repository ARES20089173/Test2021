import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import Typography from '@mui/material/Typography';
import puzzle from "../../../puzzle.svg"

import Gicon1 from '../../../svgicon/GameIcon/Gicon1.svg'
import Gicon2 from '../../../svgicon/GameIcon/Gicon2.svg'
import Gicon3 from '../../../svgicon/GameIcon/Gicon3.svg'
import Gicon4 from '../../../svgicon/GameIcon/Gicon4.svg'
import Gicon5 from '../../../svgicon/GameIcon/Gicon5.svg'
import Gicon6 from '../../../svgicon/GameIcon/Gicon6.svg'
import Gicon7 from '../../../svgicon/GameIcon/Gicon7.svg'
import Gicon8 from '../../../svgicon/GameIcon/Gicon8.svg'
import Gicon9 from '../../../svgicon/GameIcon/Gicon9.svg'
import Gicon10 from '../../../svgicon/GameIcon/Gicon10.svg'
import Gicon11 from '../../../svgicon/GameIcon/Gicon11.svg'
import Gicon12 from '../../../svgicon/GameIcon/Gicon12.svg'
import Gicon13 from '../../../svgicon/GameIcon/Gicon13.svg'
import Gicon14 from '../../../svgicon/GameIcon/Gicon14.svg'
import Gicon15 from '../../../svgicon/GameIcon/Gicon15.svg'
import PlayAgain from "../../../svgicon/BattleMode/PlayAgain.svg"
import FreeShare from "../../../svgicon/BattleMode/FreeShare.svg"
import GoAccept from "../../../svgicon/BattleMode/GoAccept.svg"
import { Link } from 'react-router-dom';
const contentStyle = {
    background: '#242632',
    width: "100%",
    height: "70%",
    borderRadius: "5%",
};
const EndGameData = { Gamename: "2048", Gameicon: Gicon1, GameScore: 66, GameRanking: 3, GamePuzzleRewards: 123 }
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
                                        <Grid xs={5.5} item height="25%" style={{ textAlign: 'center', backgroundImage: `url(${GoAccept})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>
                                            <Typography variant="caption" component="div" color='white' textAlign='center' style={{ overflowWrap: 'break-word' }} display="inline">
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