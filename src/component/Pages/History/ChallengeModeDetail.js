import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
import "../../framework/css/cssModFLooby.css"
import Typography from '@mui/material/Typography';
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg';
import HisNavigationBar from './WithBackHisNavbar';
import database from '../../database'
const { HistoryChallengeModedata} = database;
const data=HistoryChallengeModedata
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
                        <EndBar endbartype={endbartype}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

        );
    }
}