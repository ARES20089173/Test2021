import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
import "../../framework/css/cssModFLooby.css"
import Typography from '@mui/material/Typography';
import Rmoney from '../../../svgicon/Componenticon/Rmoneyicon.svg';
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg';
import HisNavigationBar from './WithBackHisNavbar';
import Congraduation from '../../../svgicon/Historyicon/Congraduation.svg';
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
                { id: 0, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`},
                { id: 1, linkName: "Chase Puzzles", linkMODE: `ChallengeModeDetail` },
                { id: 2, linkName: "Chase Puzzles",  linkMODE: `ChallengeModeDetail`},
                { id: 3, linkName: "Chase Puzzles",  linkMODE: `ChallengeModeDetail`},
                { id: 4, linkName: "Chase Puzzles", linkMODE: `ChallengeModeDetail`},
                { id: 5, linkName: "Chase Puzzles",linkMODE: `ChallengeModeDetail`},
                { id: 6, linkName: "Chase Puzzles", linkMODE: `ChallengeModeDetail`},
                { id: 7, linkName: "Silver Puzzles",linkMODE: `BattleModeDetail`},
                { id: 8, linkName: "Silver Puzzles", linkMODE: `OneVOneModeDetail`, addorReduce: "-", slash: '', Mode: '', quality: "50", WinorLoss: "Win", min: '', max: 'U Win', year: 23  ,date:"Sep 2"},
                { id: 9, linkName: "Chase Puzzles",  linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "150", unit: Rmoney, min: 16, max: 50, year: 23 ,date:"Sep 1" },
                { id: 10, linkName: "Silver Puzzles",  linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "5500", unit: Rmoney, min: 17, max: 50, year: 23  ,date:"Sep 13"},
                { id: 11, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "1750", unit: Rmoney, min: 18, max: 50, year: 23  ,date:"Sep 5"},
                { id: 12, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, addorReduce: "-", slash: '/', Mode: 'Rank', quality: "3750", unit: Rmoney, min: 15, max: 50, year: 23  ,date:"Sep 29"}]
    


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
                                1 ON 1 Mode
                            </Typography>
                        </Grid>
                        <Grid contaier justifyContent='center' alignItems="center" xs={12} height="58vh" style={{ backgroundImage: `url(${data[this.props.match.params.id].WinorLoss === 'Win' ? Congraduation : ''})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundAttachment: 'cover' }}>
                            <Grid container xs={12} justifyContent='center' alignItems="center" height="38vh">
                            <Typography textAlign='center' variant='h4'><img src={chasepuzzle} alt='' width="20%" />x{data[this.props.match.params.id].quality}<br/>Congraduations</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} marginTop="10vh" display={this.state.isToggleOn ? 'block' : 'none'}>
                        <EndBar endbartype={endbartype}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

        );
    }
}