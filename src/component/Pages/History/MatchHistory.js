import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
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
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
import BattleRank from '../../../svgicon/Historyicon/BattleRank.svg';
import HisNavigationBar from './HisNavigation';

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
const contentStyle = {
    background: '#cfcece',
    width: "95%",
    height: "95%",
    borderRadius: "5%",
};
const StyledFab2 = styled(Fab)({
    position: 'relative',
    zIndex: 0,
    left: "0%",
    bottom: "0"

});
const endbartype='History'
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false, isToggleOn: true, isOpen: false };
        this.handleClick = this.handleClick.bind(this);
        this.openhandleClick = this.openhandleClick.bind(this);
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
    render() {
        const data = [
            { id: 0, linkName:chasepuzzle, icon: Gicon1, linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "50", min: 15, max: 50, year: 23, date: "Sep 18" },
            { id: 1, linkName:silverpuzzle, icon: Gicon2, linkMODE: `ChallengeModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'Grand', background: Grand, year: 23, date: "Sep 27" },
            { id: 2, linkName:Rmoney, icon: Gicon3, linkMODE: `ChallengeModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'Epic', background: Epic, year: 23, date: "Sep 15" },
            { id: 3, linkName: chasepuzzle, icon: Gicon4, linkMODE: `ChallengeModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'WoW', background: KeepUp, year: 23, date: "Jan 17" },
            { id: 4, linkName: chasepuzzle, icon: Gicon5, linkMODE: `ChallengeModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'Hero', background: Hero, year: 23, date: "Oct 17" },
            { id: 5, linkName: chasepuzzle, icon: Gicon6, linkMODE: `ChallengeModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'Bouns', background: Bouns, year: 23, date: "Sep 13" },
            { id: 6, linkName: chasepuzzle, icon: Gicon7, linkMODE: `ChallengeModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'WoW', background: KeepUp, year: 23, date: "Sep 32" },
            { id: 7, linkName: chasepuzzle, icon: Gicon8, linkMODE: `BattleModeDetail`, addorReduce: "-", slash: '/', Mode: 'Rank', quality: "50", unit: Rmoney, min: 13, max: 50, year: 23, date: "June 27" },
            { id: 8, linkName: chasepuzzle, icon: Gicon9, linkMODE: `OneVOneModeDetail`, addorReduce: "-", slash: '', Mode: '', quality: "50", WinorLoss: "Win", min: '', max: 'U Win', year: 23, date: "Sep 2" },
            { id: 9, linkName: chasepuzzle, icon: Gicon10, linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "150", unit: Rmoney, min: 16, max: 50, year: 23, date: "Sep 1" },
            { id: 10, linkName:chasepuzzle, icon: Gicon11, linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "5500", unit: Rmoney, min: 17, max: 50, year: 23, date: "Sep 13" },
            { id: 11, linkName:silverpuzzle, icon: Gicon12, linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "1750", unit: Rmoney, min: 18, max: 50, year: 23, date: "Sep 5" },
            { id: 12, linkName: Rmoney, icon: Gicon13, linkMODE: `BattleModeDetail`, addorReduce: "-", slash: '/', Mode: 'Rank', quality: "3750", unit: Rmoney, min: 15, max: 50, year: 23, date: "Sep 29" }]

        const data2 = data.map((text) => {
            if (text.id % 2 == 0) {
                return <Link to={`/History/${text.id}/${text.linkMODE}`} style={{ textDecoration: 'none', color: 'white' }}>
                    <Grid xs={12} container1 alignItems="center" >

                        <ListItem button key={text.id} style={{ backgroundColor: '#242634' }}>
                            <Grid xs={7} container alignItems="center" >
                                <ListItemText  >
                                    <Grid xs={12} container alignItems="center" ><img src={text.icon} alt="" width="16%" style={{ marginRight: '1vh' }} />  <Typography variant="caption">{text.addorReduce} {text.quality} </Typography> <img src={text.linkName} alt='' width='8%' /></Grid>
                                </ListItemText>
                            </Grid>
                            <Grid xs={5} container >
                                <Grid xs={4.5} container justifyContent='center' alignItems='center' style={{  marginRight: '4px' }}  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}><Typography variant='body2'>{text.date}</Typography></Typography >
                                </Grid>
                                <Grid xs={7} container justifyContent='center' alignItems='center'  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}> {text.Mode} <Typography variant='body2'>{text.min}{text.slash}{text.max}</Typography></Typography >
                                </Grid>

                            </Grid>
                        </ListItem>
                    </Grid>
                </Link>
            }
            else {
                return <Link to={`/History/${text.id}/${text.linkMODE}`} style={{ textDecoration: 'none', color: 'white' }}>
                    <Grid xs={12} container1 alignItems="center" >

                        <ListItem button key={text.id} style={{ backgroundColor: '#35394C' }}>
                            <Grid xs={7} container alignItems="center" >

                                <ListItemText  >
                                    <Grid xs={12} container alignItems="center" ><img src={text.icon} alt="" width="16%" style={{ marginRight: '1vh' }} />  <Typography variant="caption">{text.addorReduce} {text.quality} </Typography><img src={text.linkName} alt='' width='8%' /></Grid>
                                </ListItemText>
                            </Grid>
                            <Grid xs={5} container >
                                <Grid xs={4.5} container justifyContent='center' alignItems='center' style={{ marginRight: '4px' }}  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}><Typography variant='body2'>{text.date}</Typography></Typography >
                                </Grid>
                                <Grid xs={7} container justifyContent='center' alignItems='center'  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}> {text.Mode} <Typography variant='body2'>{text.min}{text.slash}{text.max}</Typography></Typography >
                                </Grid>

                            </Grid>
                        </ListItem>
                    </Grid>
                </Link>
            }
        })

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
                            <Typography variant="body2" textAlign='center'>      &gt;&gt;&gt;&gt;&gt;  Click to Check Results Detail
                                &gt;&gt;&gt;&gt;&gt;
                            </Typography>
                        </Grid>
                        <Grid item xs={12} bgcolor='#8e8b91' >

                            {data2}
                        </Grid>
                        <Grid item xs={12} marginTop="10vh" display={this.state.isToggleOn ? 'block' : 'none'}>
                        <EndBar endbartype={endbartype}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        );
    }
}