import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import backgroundEnd from "../../../reed_bg.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import pic1 from '../../framework/img/300x100.jpeg'
import IconButton from '@mui/material/IconButton';
import Headicon from '../../../headicon.svg'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import puzzle from "../../../puzzle.svg"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Badge from '@mui/material/Badge'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Fab from '@mui/material/Fab';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 12,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
}));
const StyledFab2 = styled(Fab)({
    position: 'relative',
    zIndex: 1,
    left: "25%"

});
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
            { id: 0, MaxPayOut: 88, MaxPrize: 3500 , entryFee: 88},
            { id: 1, MaxPayOut: 81, MaxPrize: 3100 , entryFee: 848},
            { id: 2, MaxPayOut: 848, MaxPrize: 2500 , entryFee: 828},
        ]
        const TabledData = [
            { id: 1, MyPuzzle: 88, MyScore: 35, MyRacking: 6 },
            { id: 2, MyPuzzle: 81, MyScore: 43, MyRacking: 7 },
            { id: 3, MyPuzzle: 28, MyScore: 32, MyRacking: 8 },
        ]

        const TableData = TabledData.map((Tdata) => {
            return < Grid item xs={12} container height="5vh" textAlign="center" >
                <Grid item xs={4} height="5vh" >
                    {Tdata.MyPuzzle}
                </Grid>
                <Grid item xs={4} height="5vh">
                    {Tdata.MyScore}
                </Grid>
                <Grid item xs={4} height="5vh">
                    {Tdata.MyRacking}
                </Grid>
            </Grid >
        });

        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container height="100vh" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                    <Grid xs={12}  >
                        <React.Fragment>
                            <Box sx={{ flexGrow: 1, }}>
                                <CssBaseline />
                                <AppBar position='relative' align='center' sx={{ top: 0, bottom: 'auto' }}>
                                    <Toolbar variant="dense">
                                        <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                            BATTLE MODE
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
                                        <Toolbar variant="dense">
                                            <Grid item xs={2} sx={{ marginTop: '1vh' }}>
                                                <img src={data[this.props.match.params.id].src} alt="gameicon" width="100%" />

                                            </Grid>
                                            <Grid item xs={7} sx={{ marginTop: '1vh' }}>
                                                <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', marginLeft: '2vh' }}>
                                                    {data[this.props.match.params.id].name}
                                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                                                        CHOOSE TOURNAMENT AND PAID TO PLAY
                                                    </Typography>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} >
                                                <IconButton
                                                    size="small"
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
                                                <Link to={`/gametutorial`}>
                                                    <IconButton
                                                        size="small"
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
                        alignItems="center"

                    >
                        <Grid item xs={12} container
                            justifyContent='center'
                            direction="row" padding="1vh"
                            height="10vh">
                            <Grid item xs={5.5} style={{ border: "1px solid grey", textAlign: 'center' }} borderRadius="20%" >

                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                    Highest Price Out
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                    {BattleMode[this.props.match.params.entryid].MaxPrize}  <img src={puzzle} alt="gameicon" width="15%" />
                                </Typography>
                            </Grid>
                            <Grid item xs={5.5} style={{ border: "1px solid grey", textAlign: 'center' }} marginLeft="1vh" borderRadius="20%">

                                <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                    Max PayOut
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                    {BattleMode[this.props.match.params.entryid].MaxPayOut}  <img src={puzzle} alt="gameicon" width="15%" />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container
                            justifyContent='center'

                            direction="row">
                            <Grid item xs={7.5} style={{ textAlign: 'left' }} height="0vh" paddingTop="3vh" borderRadius="20%">
                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center', backgroundColor: 'white' }} color='primary'>
                                    current PUZZLECHASE Ranking
                                </Typography>
                            </Grid>
                            <Grid item xs={3.5} style={{ textAlign: 'center' }} borderRadius="20%" paddingTop="1.2vh" >
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                    18/50
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container style={{ border: "1px solid grey", textAlign: 'left', overflow: 'scroll' }} justifyContent="left" alignItems="center" height="28vh">

                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={1} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={2} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={3} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={4} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={8.4} container>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={5} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={6} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={7} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={8} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={9} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} > <StyledBadge badgeContent={10} color="secondary"><img src={Headicon} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            </Grid>
                            <Grid item xs={3.6} container alignItems='center' justifyContent='center'  >
                                <Grid item xs={12} height="30vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                                    <img src={Headicon} alt="Headicon" width="65%" /><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography>
                                    <Grid item xs={12} height="9vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><img src={pic1} alt="button" width="80%" /> share link</Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} container container height="25vh" alignItems="center" justifyContent="center">
                                <Grid item xs={12} container height="5vh" style={{ textAlign: 'center' }}>
                                    <Grid item xs={4} height="5vh">
                                        <img src={pic1} alt="button" width="80%" />
                                    </Grid>
                                    <Grid item xs={4} height="5vh">
                                        <img src={pic1} alt="button" width="80%" />
                                    </Grid>
                                    <Grid item xs={4} height="5vh">
                                        <img src={pic1} alt="button" width="80%" />
                                    </Grid>
                                </Grid>

                                {TableData}
                            </Grid>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={4.5} height="9vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                            <Typography variant="body1"> share to earn </Typography>
                            <Typography variant="h5">Free!</Typography>
                        </Grid>
                        <Grid item xs={4.5} height="9vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                            <Typography variant="body1"> entry fee</Typography>
                            <Typography variant="h5">{BattleMode[this.props.match.params.entryid].entryFee}
                                        <StyledFab2 size="small" color="secondary" aria-label="add">
                                            <KeyboardArrowRightIcon/>
                                        </StyledFab2></Typography>
                            {/* <Link to='/'> */}
                                    {/* </Link> */}
                        </Grid>

                    </Grid>
                    <Grid item xs={12} marginTop="0vh" >
                        <EndBar />
                    </Grid>
                </Grid>
            </Box >
        )
    }
}