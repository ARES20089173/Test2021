import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/HistoryEndBar';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import backgroundEnd from "../../../reed_bg.svg"
import Typography from '@mui/material/Typography';
import Rmoney from '../../../svgicon/Componenticon/Rmoneyicon.svg';
import Fab from '@mui/material/Fab';
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg';
import HisNavigationBar from './WithBackHisNavbar';
import Grand from '../../../svgicon/Historyicon/Grand.svg';
import Epic from '../../../svgicon/Historyicon/Epic.svg';
import Hero from '../../../svgicon/Historyicon/Hero.svg';
import KeepUp from '../../../svgicon/Historyicon/KeepUp.svg';
import Bouns from '../../../svgicon/Historyicon/Bouns.svg';
const data = [
    { id: 0, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "50", min: 15, max: 50, year: 23 },
    { id: 1, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney,text:'CONGRATULATIONSGRAND PRIZES',min: '', max: 'Grand',background:Grand, year: 23 },
    { id: 2, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney,text:'YOU ARE EPIC', min: '', max: 'Epic',background:Epic, year: 23 },
    { id: 3, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney,text:'WOW, keep it up!', min: '', max: 'WoW',background:KeepUp, year: 23 },
    { id: 4, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney,text:'YOU ARE THE HERO', min: '', max: 'Hero',background:Hero, year: 23 },
    { id: 5, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, text:'BOUNS,Try Again',min: '', max: 'Bouns',background:Bouns, year: 23 },
    { id: 6, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney,text:'WOW, keep it up!', min: '', max: 'WoW',background:KeepUp, year: 23 },
    { id: 7, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "-", slash: '/', Mode: 'Rank', quality: "50", unit: Rmoney, min: 13, max: 50, year: 23 },
    { id: 8, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "-", slash: '', Mode: '', quality: "50", WinorLoss: "Win", min: '', max: 'U Win', year: 23 },
    { id: 9, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "150", unit: Rmoney, min: 16, max: 50, year: 23 },
    { id: 10, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "5500", unit: Rmoney, min: 17, max: 50, year: 23 },
    { id: 11, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "1750", unit: Rmoney, min: 18, max: 50, year: 23 },
    { id: 12, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "-", slash: '/', Mode: 'Rank', quality: "3750", unit: Rmoney, min: 15, max: 50, year: 23 }]
   
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
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container height="100%" style={{ backgroundColor: "#707070" }}>
                    <HisNavigationBar />
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                    >
                        <Grid container xs={12} height="4vh" bgcolor='#8e8b91' justifyContent='center' alignItems='center' >
                            <Typography variant="body2" textAlign='center'>
                               ChallengeMode
                            </Typography>
                        </Grid>
                        <Grid contaier justifyContent='center' alignItems="center" xs={12} height="58vh" style={{ backgroundImage: `url(${data[this.props.match.params.id].background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundAttachment: 'cover' }}>
                            <Grid container xs={11} justifyContent='center' alignItems="center" height="38vh">
                            <Typography textAlign='center' variant='h6'><img src={chasepuzzle} alt='' width="20%" />x{data[this.props.match.params.id].quality}<br/>{data[this.props.match.params.id].text}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} marginTop="10vh" display={this.state.isToggleOn ? 'block' : 'none'}>
                            <EndBar />
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

        );
    }
}