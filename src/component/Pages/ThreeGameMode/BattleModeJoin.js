import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import backgroundEnd from "../../../reed_bg.svg"
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import IconButton from '@mui/material/IconButton';
import pic1 from "../../framework/img/300x100.jpeg"
import Toolbar from '@mui/material/Toolbar';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import ImgTournamentLobby from '../../framework/imgtournamentlobby';
import LobbyPopup from '../../framework/lobbypopup';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { Link } from "react-router-dom"
import puzzle from "../../../puzzle.svg"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
export default class TournamentLobby extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isToggleOn: true };
    //     this.Mode = 1;

    //     // This binding is necessary to make `this` work in the callback
    //     this.handleClick = this.handleClick.bind(this);
    //     this.oneVoneModehandleClick = this.oneVoneModehandleClick.bind(this);
    //     this.challengerModehandleClick = this.challengerModehandleClick.bind(this);
    //     this.BattleModehandleClick = this.BattleModehandleClick.bind(this);
    // }
    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    // oneVoneModehandleClick() {
    //     this.Mode = 0;
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    // challengerModehandleClick() {
    //     this.Mode = 1;
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    // BattleModehandleClick() {
    //     this.Mode = 2;
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    render() {
        const data = [
            { id: 0, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 },
            { id: 1, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848 },
            { id: 2, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828 },
            { id: 3, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 },
            { id: 4, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848 },
            { id: 5, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828 },
            { id: 6, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 },
            { id: 7, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848 },
            { id: 8, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828 },
            { id: 9, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 },
            { id: 10, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848 },
            { id: 11, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828 },
            { id: 12, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 },
            { id: 13, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848 },
            { id: 14, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828 },
            { id: 15, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 },
            { id: 16, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848 },
            { id: 17, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828 },
            { id: 18, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 }
        ]
        const BattleMode = [
            { id: 1, MaxPayOut: 88, MaxPrize: 3500 },
            { id: 2, MaxPayOut: 848, MaxPrize: 2500 },
            { id: 3, MaxPayout: 828, MaxPrize: 3550 },
        ]
        return (
            <Box sx={{ flexGrow: 1 }}>

                <Grid xs={12}  >
                    <React.Fragment>
                        <Box sx={{ flexGrow: 1, }}>
                            <CssBaseline />
                            <AppBar position='fixed' align='center' sx={{ top: 0, bottom: 'auto' }}>
                                <Toolbar>
                                    <Typography variant="h6" component="div" color='primary'>
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        BATTLE MODE
                                    {/* {BattleModeItem} */}
                                    </Typography>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{}}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Toolbar>

                                <div style={{ backgroundColor: "gray" }}>
                                    <Toolbar>
                                        <Grid item xs={2} sx={{ marginTop: '1vh' }}>
                                            <img src={data[this.props.match.params.id].src} alt="gameicon" width="100%" />

                                        </Grid>
                                        <Grid item xs={6} sx={{ marginTop: '1vh' }}>
                                            <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', marginLeft: '2vh' }}>
                                                {data[this.props.match.params.id].name}
                                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                                                    CHOOSE TOURNAMENT
                                            </Typography>
                                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                                                    AND PAID TO PLAY
                                            </Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <IconButton
                                                size="large"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{}}
                                            ><FileDownloadIcon />
                                            </IconButton>
                                            <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                Download/
                                        </Typography>
                                            <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                practice
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/gametutorial`}>
                                                <IconButton
                                                    size="large"
                                                    color="inherit"
                                                    aria-label="menu"
                                                    sx={{}}
                                                ><SportsEsportsIcon />
                                                </IconButton>
                                            </Link>


                                            <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                Game
                                        </Typography>
                                            <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                Tutorial
                                        </Typography>
                                        </Grid>

                                    </Toolbar>
                                </div>
                            </AppBar>
                        </Box>
                    </React.Fragment>
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent='center'
                    style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}
                >
                    <Grid item xs={12} marginLeft="2vh" marginTop="17vh">  </Grid>
                    <Grid item xs={12} container
                        justifyContent='center'
                        direction="row" padding="1vh">
                        <Grid item xs={5} style={{ border: "1px solid grey", textAlign: 'center' }} margin="1vh" borderRadius="20%">

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                Highest Price Out
                                    </Typography>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'Right' }} color='primary'>
                                {BattleMode[this.props.match.params.id].MaxPrize}  <img src={puzzle} alt="gameicon" width="30%" />
                            </Typography>

                        </Grid>
                        <Grid item xs={5} style={{ border: "1px solid grey", textAlign: 'center' }} margin="1vh" borderRadius="20%">

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                Max PayOut
                                    </Typography>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'Right' }} color='primary'>
                                {BattleMode[this.props.match.params.id].MaxPayOut}    <img src={puzzle} alt="gameicon" width="30%" />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container
                        justifyContent='center'
                        direction="row" padding="1vh" marginTop="1vh">
                        <Grid item xs={5} style={{ border: "1px solid grey", textAlign: 'center' }} margin="1vh" borderRadius="20%">
11232
                        </Grid>
                        <Grid item xs={5} style={{ border: "1px solid grey", textAlign: 'center' }} margin="1vh" borderRadius="20%">
123
                        </Grid>
                    </Grid>


                </Grid>
                <Grid item xs={12} marginTop="0vh" >
                    <EndBar />
                </Grid>
            </Box>
        )
    }
}