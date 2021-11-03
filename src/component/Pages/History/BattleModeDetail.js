import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/HistoryEndBar';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import IconButton from '@mui/material/IconButton';
import backgroundEnd from "../../../reed_bg.svg"
import Typography from '@mui/material/Typography';
import Rmoney from '../../../svgicon/Componenticon/Rmoneyicon.svg';
import Fab from '@mui/material/Fab';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import chasepuzzle from '../../../svgicon/Missionicon/Dailymission.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
import BattleRank from '../../../svgicon/Historyicon/BattleRank.svg';
import HisNavigationBar from './WithBackHisNavbar';
import Badge from '@mui/material/Badge'

import Headicon from '../../../face_1.svg'
import Grand from '../../../svgicon/Historyicon/Grand.svg';
import Epic from '../../../svgicon/Historyicon/Epic.svg';
import Hero from '../../../svgicon/Historyicon/Hero.svg';
import KeepUp from '../../../svgicon/Historyicon/KeepUp.svg';
import Bouns from '../../../svgicon/Historyicon/Bouns.svg';
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
import pic1 from '../../framework/img/300x100.jpeg'
import puzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 18,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
}));
const HeadsvgData = [
    { id: 0, Headsvg: Headicon },
    { id: 1, Headsvg: Headicon },
    { id: 2, Headsvg: Headicon },
    { id: 3, Headsvg: Headicon },
    { id: 4, Headsvg: Headicon },
    { id: 5, Headsvg: Headicon },
    { id: 6, Headsvg: Headicon },
    { id: 7, Headsvg: Headicon },
    { id: 8, Headsvg: Headicon },
    { id: 9, Headsvg: Headicon },
    { id: 10, Headsvg: Headicon },
]
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false, isToggleOn: true, isOpen: false };
        this.handleClick = this.handleClick.bind(this);
        this.openhandleClick = this.openhandleClick.bind(this);
        this.handleOuser1 = this.handleOuser1.bind(this);
    }
    openhandleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    handleOuser1(){
        
    let path = `/History/${this.props.match.params.id}/BattleModeDetail/${this.props.match.params.id}/otherinfo`;
    this.props.history.push(path);
    }
    render() {
        const data = [
            { id: 0, icon: Gicon1, Score: 13, Rank: 15, reward: 200 },
            { id: 1, icon: Gicon2, Score: 13, Rank: 15, reward: 200 },
            { id: 2, icon: Gicon3, Score: 13, Rank: 15, reward: 200 },
            { id: 3, icon: Gicon4, Score: 13, Rank: 15, reward: 200 },
            { id: 4, icon: Gicon5, Score: 13, Rank: 15, reward: 200 },
            { id: 5, icon: Gicon6, Score: 13, Rank: 15, reward: 200 },
            { id: 6, icon: Gicon7, Score: 13, Rank: 15, reward: 200 },
            { id: 7, icon: Gicon8, Score: 13, Rank: 15, reward: 200 },
            { id: 8, icon: Gicon9, Score: 13, Rank: 15, reward: 200 },
            { id: 9, icon: Gicon10, Score: 13, Rank: 15, reward: 200 },
            { id: 10, icon: Gicon11, Score: 13, Rank: 15, reward: 200 },
            { id: 11, icon: Gicon12, Score: 13, Rank: 15, reward: 200 },
            { id: 12, icon: Gicon13, Score: 13, Rank: 15, reward: 200 }]

        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                    <HisNavigationBar />
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                    >
                        <Grid container xs={12} height="4vh" bgcolor='#8e8b91' justifyContent='center' alignItems='center' >
                            <Typography variant="body2" textAlign='center'>
                                BATTLE MODE
                            </Typography>
                        </Grid>
                        <Grid container xs={12} height="40vh"  justifyContent='center' alignItems='center' >
                            <Typography variant="body1" textAlign='center' color="white" >
                                2048<br/>
                                Battle Mode<br/>
                                <img src={Gicon1} alt='' width="40%" /><br/>
                                Your score:XX<br/>
                                Your ranking:xx<br/>
                                puzzles REWARDS:xxx
                            </Typography>
                        </Grid>
                        <Grid item xs={12} height="70vh"  >
                            <Grid xs={12} container style={{ border: "1px solid grey", textAlign: 'left' }} justifyContent="left" alignItems="center" >

                                <Grid item xs={2.8} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} onClick={this.handleOuser1} ><StyledBadge badgeContent={1} color="secondary"><img src={HeadsvgData[1].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={2.8} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={2} color="secondary"><img src={HeadsvgData[2].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={2.8} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={3} color="secondary"><img src={HeadsvgData[3].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={2.8} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={4} color="secondary"><img src={HeadsvgData[4].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={8.4} container>
                                    <Grid item xs={4} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={5} color="secondary"><img src={HeadsvgData[5].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                    <Grid item xs={4} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={6} color="secondary"><img src={HeadsvgData[6].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                    <Grid item xs={4} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={7} color="secondary"><img src={HeadsvgData[7].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                    <Grid item xs={4} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={8} color="secondary"><img src={HeadsvgData[8].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                    <Grid item xs={4} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={9} color="secondary"><img src={HeadsvgData[9].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                    <Grid item xs={4} height="19vh" style={{ border: "1px solid grey", textAlign: 'center' }} > <StyledBadge badgeContent={10} color="secondary"><img src={HeadsvgData[10].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                </Grid>
                                <Grid item xs={3.6} container alignItems='center' justifyContent='center'  >
                                    <Grid item xs={12} height="38vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                                        <img src={HeadsvgData[0].Headsvg} alt="Headicon" width="85%" /><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} marginTop="10vh" display={this.state.isToggleOn ? 'block' : 'none'}>
                            <EndBar />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        );
    }
}