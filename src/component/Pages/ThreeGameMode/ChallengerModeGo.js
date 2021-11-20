import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import backgroundEnd from "../../../reed_bg.svg"
import Forward from '../../../svgicon/Componenticon/Forward.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import IconButton from '@mui/material/IconButton';
import PoweredByR from '../../../svgicon/PowerBy/PowerByR.svg'
import Headicon from '../../../face_1.svg'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';

import back from '../../../svgicon/Componenticon/Back.svg'
import Badge from '@mui/material/Badge'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';
import Logout from '../../../logout.svg'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Hamburgicon from "../../../svgicon/Componenticon/Hamburgicon.svg";
import Chasepuzzle from "../../../svgicon/Componenticon/Chasepuzzle.svg"
import GameTutorial from "../../../svgicon/BattleMode/GameTutorial.svg"
import Download from "../../../svgicon/BattleMode/Download.svg"
import Close from '../../../svgicon/Componenticon/Close.svg'
import GrandBar from "../../../svgicon/ChallengeMode/GrandBar.svg"
import EpicBar from "../../../svgicon/ChallengeMode/EpicBar.svg"
import HeroBar from "../../../svgicon/ChallengeMode/HeroBar.svg"
import WowBar from "../../../svgicon/ChallengeMode/WowBar.svg"
import BounsBar from "../../../svgicon/ChallengeMode/BounsBar.svg"
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
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 12,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
}));

const contentStyle = {
    background: '#242623',
    width: "98%",
    height: "90%",
    borderRadius: "5%",
};

const userdata = [
    { id: 0, level: 'Lv1', ReesID: 1, nickname: 'Jay' },
]
const Toplinkdata = [
    { id: 0, linkName: "PROFILE", link: `/${userdata[0].ReesID}/Profile` },
    { id: 1, linkName: "SETTING", link: `/${userdata[0].ReesID}/Setting` },
    { id: 2, linkName: "EVENTS", link: "/Events" },
    { id: 3, linkName: "BUY PUZZLES", link: "/" }
]
const Bottomlinkdata = [
    { id: 0, linkName: "About REES", link: "/" },
    { id: 1, linkName: "FAQ", link: "/" },
    { id: 2, linkName: "PRESS", link: "/" },
    { id: 3, linkName: "LOGOUT", link: "/" },
]
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, isOpen: false };
        this.Mode = 1;
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.openhandleClick = this.openhandleClick.bind(this);
        //     this.oneVoneModehandleClick = this.oneVoneModehandleClick.bind(this);
        //     this.challengerModehandleClick = this.challengerModehandleClick.bind(this);
        //     this.BattleModehandleClick = this.BattleModehandleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    openhandleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
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
        const { selectedOption } = this.state;
        const Mode = [
            { id: 0, Modechoose: "oneVoneMode", embedId: "rokGy0huYEA", detail: "Chanllenger MODE is ......." },
            { id: 1, Modechoose: "challengerMode", embedId: "7HP8X7dadmM", detail: "1 ON 1 MODE is ......." },
            { id: 2, Modechoose: "BattleMode", embedId: "dWOm9KXJQLo", detail: "Battle MODE is ......." },
        ]
        const data = [
            { id: 0, src: Gicon1, name: "Onmyoji Arena", number: 52, entryFee: 88, GameRules: "2048是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 1, src: Gicon2, name: "TOM & JERRY: CHASE", number: 56, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 2, src: Gicon3, name: "Super Mecha Champions", number: 55, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 3, src: Gicon4, name: "Side Force Don't Fall", number: 53, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 4, src: Gicon5, name: "Seven Squids", number: 54, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 5, src: Gicon6, name: "Punch Box", number: 51, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 6, src: Gicon7, name: "Iron Space", number: 52, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 7, src: Gicon8, name: "Candy Robber", number: 58, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 8, src: Gicon9, name: "Fruit Matching", number: 88, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 9, src: Gicon10, name: "Falling Cubes", number: 25, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 10, src: Gicon11, name: "Box Tower ", number: 95, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 11, src: Gicon12, name: "Jumper Frog", number: 85, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 12, src: Gicon13, name: "2048", number: 75, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 13, src: Gicon14, name: "HEXTRIS", number: 65, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 14, src: Gicon15, name: "FISHING FRENZY", number: 55, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
        ]
        const ChallengerMode = [
            { id: 0, MaxPayOut: 88, MaxPrize: 3500, entryFee: 188 },
            { id: 1, MaxPayOut: 81, MaxPrize: 3100, entryFee: 1848 },
            { id: 2, MaxPayOut: 848, MaxPrize: 2500, entryFee: 1828 },
            { id: 3, MaxPayOut: 882, MaxPrize: 3500, entryFee: 1881 },
            { id: 4, MaxPayOut: 831, MaxPrize: 3100, entryFee: 118 },
            { id: 5, MaxPayOut: 8418, MaxPrize: 2500, entryFee: 112 },
            { id: 6, MaxPayOut: 882, MaxPrize: 3500, entryFee: 451 },
            { id: 7, MaxPayOut: 813, MaxPrize: 3100, entryFee: 121 },
            { id: 8, MaxPayOut: 8448, MaxPrize: 2500, entryFee: 131 },
        ]
        const ScoreData = [
            { id: 0, Puzzle: 100, Score: 1000, ChallengeName: "GRAND" },
            { id: 1, Puzzle: 80, Score: 800, ChallengeName: "EPIC" },
            { id: 2, Puzzle: 60, Score: 600, ChallengeName: "HERO" },
            { id: 3, Puzzle: 40, Score: 400, ChallengeName: "WOW" },
            { id: 4, Puzzle: 20, Score: 200, ChallengeName: "BOUNS" },
        ]

        const options = [
            {
                value: ChallengerMode[0].entryFee, label: <Typography variant="body1"> entry fee:<br /> {ChallengerMode[0].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[1].entryFee, label: <Typography variant="body1"> entry fee:<br /> {ChallengerMode[1].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[2].entryFee, label: <Typography variant="body1"> entry fee: <br />{ChallengerMode[2].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[3].entryFee, label: <Typography variant="body1"> entry fee: <br />{ChallengerMode[3].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[4].entryFee, label: <Typography variant="body1"> entry fee:<br /> {ChallengerMode[4].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[5].entryFee, label: <Typography variant="body1"> entry fee:<br /> {ChallengerMode[5].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[6].entryFee, label: <Typography variant="body1"> entry fee:<br /> {ChallengerMode[6].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[7].entryFee, label: <Typography variant="body1"> entry fee:<br /> {ChallengerMode[7].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[8].entryFee, label: <Typography variant="body1"> entry fee: <br />{ChallengerMode[8].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
        ];
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                    <Grid xs={12}  >
                        <React.Fragment>
                            <Box sx={{ flexGrow: 1, }}>
                                <CssBaseline />
                                <AppBar position={this.state.isToggleOn ? 'fixed' : 'relative'} align='center' sx={{ top: 0, bottom: 'auto' }} >
                                    <Toolbar style={{ backgroundColor: '#242634' }} >
                                        <Typography variant="h6" component="div" sx={{}}>
                                            <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}`}>
                                                <img src={back} alt='' width="40%" style={{
                                                    position: 'relative',
                                                    zIndex: 3,
                                                    top: 5,
                                                    left: "-35%",
                                                }} />
                                            </Link>
                                        </Typography>
                                        <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-13%",
                                        }}>
                                            CHALLENGER MODE
                                        </Typography>
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"

                                            onClick={this.openhandleClick}
                                        >
                                            <img src={Hamburgicon} alt="" width="110%" style={{
                                                position: 'absolute',

                                                left: 0,
                                                margin: '0 60%',
                                            }} />
                                        </IconButton>
                                        {/* drawer */}
                                        <Drawer
                                            anchor={"right"}
                                            open={this.state.isOpen}
                                            onClose={this.openhandleClick}
                                        >
                                            <Box
                                                sx={{ width: 280, height: "100%", backgroundColor: "#242634" }}
                                                role="presentation"
                                            >
                                                <List sx={{ height: "50%" }}>

                                                    <IconButton
                                                        size="large"
                                                        edge="start"
                                                        color="inherit"
                                                        aria-label="menu"
                                                        onClick={this.openhandleClick}
                                                        sx={{ left: "50%", bottom: 5 }}
                                                    >
                                                        <img src={Close} alt='hamburgericon' width='40%' style={{ position: 'relative', left: 60 }} />
                                                    </IconButton>
                                                    <ListItemText style={{ textAlign: "center" }}  ><Grid container justifyContent='center' alignItems="center"><Typography color='white'>Play to Earn PUZZLES</Typography><img src={Chasepuzzle} /></Grid></ListItemText>

                                                    {Toplinkdata.map((text, index) => (
                                                        <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                                                            <ListItem button key={text.id}>
                                                                <ListItemText >
                                                                    {text.linkName}
                                                                </ListItemText>
                                                                <KeyboardArrowRightIcon />
                                                            </ListItem>
                                                        </Link>
                                                    ))}
                                                    <ListItem >
                                                        <ListItemText style={{ fontSize: '0.7em' }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'flex-end', fontSize: '0.7em', color: 'white' }}>

                                                                CODE REDEEM :
                                                                <TextField id="input-with-sx" variant="standard" />

                                                                <img src={coderedeem} alt="coderedeem" />
                                                            </Box>
                                                        </ListItemText>
                                                    </ListItem>
                                                </List>
                                                <List style={{ top: "10%", textDecoration: 'none', color: 'white' }} sx={{ height: "40%" }} >
                                                    {Bottomlinkdata.slice(0, 3).map((text, index) => (
                                                        <ListItem button key={text.id}>
                                                            <ListItemText >
                                                                <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>{text.linkName}  </Link>
                                                            </ListItemText>
                                                        </ListItem>
                                                    ))}
                                                    <ListItem >
                                                        <ListItemText >
                                                            <Link to={Bottomlinkdata[3].link} style={{ textDecoration: 'none', color: 'white' }}>{Bottomlinkdata[3].linkName}   <img src={Logout} alt="logout" /></Link>
                                                        </ListItemText>
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Drawer>
                                    </Toolbar>

                                    <div style={{ backgroundColor: "#707070" }}>
                                        <Toolbar variant="dense">
                                            <Grid item xs={2} sx={{ marginTop: '1vh' }}>
                                                <img src={data[this.props.match.params.id].src} alt="gameicon" width="100%" />

                                            </Grid>
                                            <Grid item xs={9} sx={{ marginTop: '1vh' }}>
                                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'left', marginLeft: '2vh' }}>
                                                    {data[this.props.match.params.id].name}<br />
                                                    CHOOSE TOURNAMENT AND PLAY
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} >

                                                <Popup
                                                    trigger={
                                                        <div className="button">
                                                            <div >
                                                                <IconButton
                                                                    size="small"
                                                                    color="inherit"
                                                                    aria-label="menu"
                                                                    sx={{}}
                                                                ><img src={Download} alt="" width="80%" />
                                                                </IconButton>
                                                            </div>
                                                        </div>

                                                    }
                                                    modal
                                                    lockScroll
                                                    onClick
                                                    closeOnDocumentClick={false}
                                                    nested
                                                    onClose={this.handleClick}
                                                    {...{ contentStyle }}
                                                >
                                                    {close => (
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>

                                                            </button>
                                                            <Grid xs={12} >

                                                                <Typography variant="h3" inline color='white'>
                                                                    Game Rule
                                                                </Typography>
                                                                <Typography variant="h4" inline color='white'>
                                                                    {data[this.props.match.params.id].GameRules}
                                                                </Typography>
                                                            </Grid>
                                                        </div>
                                                    )}
                                                </Popup>

                                            </Grid>
                                            <Grid item xs={2} >
                                                <Popup
                                                    trigger={<div className="button"> <div >
                                                        <IconButton
                                                            size="small"
                                                            color="inherit"
                                                            aria-label="menu"
                                                            sx={{}}
                                                        ><img src={GameTutorial} alt="" width="120%" />
                                                        </IconButton></div></div>}
                                                    modal
                                                    lockScroll
                                                    nested
                                                >
                                                    {close => (
                                                        <div className="modal" >
                                                            <button className="close" onClick={close}  >

                                                            </button>
                                                            <Grid xs={12} >
                                                                <Typography variant="h6" component="div" color='primary' textAlign='center'>
                                                                    How to play
                                                                </Typography>
                                                                <Typography variant="caption" component="div" color='primary' textAlign='center'>
                                                                    {Mode[1].Modechoose}
                                                                </Typography>
                                                                <Grid item xs={12} height="30vh">
                                                                    <div className="video-responsive">

                                                                        <iframe
                                                                            src={`https://www.youtube.com/embed/${Mode[1].embedId}`}
                                                                            frameBorder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowFullScreen
                                                                            title="Embedded youtube"
                                                                        />
                                                                    </div>
                                                                </Grid>
                                                                <Grid xs={12} positon='fixed'>
                                                                    <Typography variant="h4" component="div" color='primary' textAlign='center'>
                                                                        <img src={PoweredByR} alt='' />
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    )}
                                                </Popup>
                                            </Grid>

                                        </Toolbar>
                                    </div>
                                </AppBar>
                                <Toolbar />

                                <Toolbar />
                            </Box>
                        </React.Fragment>
                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent='center'
                    >
                        <Grid item xs={12} container
                            justifyContent='center'
                            direction="row"
                            height="30vh"
                            marginTop="3vh"
                        >
                            {/* 1 */}
                            <Grid item xs={0.5} height="9.9vh" borderBottom='3px solid black' backgroundColor="white"></Grid>
                            <Grid item xs={11.5} container borderBottom='3px solid black' height="9.9vh" backgroundColor="white" justifyContent='center' alignItems="center" style={{ backgroundImage: `url(${GrandBar})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                <Grid item xs={4} container justifyContent='center' alignItems="center">
                                    <Grid item xs={12} >
                                        <div style={{ textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[0].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[0].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} style={{ textAlign: 'center' }}></Grid>
                            </Grid>
                            {/* 2 */}
                            <Grid item xs={0.5} height="9.9vh" borderBottom='3px solid black' backgroundColor="white"></Grid>
                            <Grid item xs={11.5} container height="9.9vh" borderBottom='3px solid black' backgroundColor="white" justifyContent='center' alignItems="center" style={{ backgroundImage: `url(${EpicBar})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                <Grid item xs={4} container justifyContent='center' alignItems="center">
                                    <Grid item xs={12} >
                                        <div style={{ textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[0].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[0].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} style={{ textAlign: 'center' }}></Grid>
                            </Grid>
                            {/* 3 */}
                            <Grid item xs={0.5} height="9.9vh" borderBottom='3px solid black' backgroundColor="white"></Grid>
                            <Grid item xs={11.5} container height="9.9vh" borderBottom='3px solid black' backgroundColor="white" justifyContent='center' alignItems="center" style={{ backgroundImage: `url(${HeroBar})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                <Grid item xs={4} container justifyContent='center' alignItems="center">
                                    <Grid item xs={12} >
                                        <div style={{ textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[0].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[0].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} style={{ textAlign: 'center' }}></Grid>
                            </Grid>
                            {/* 4 */}
                            <Grid item xs={0.5} height="9.9vh" backgroundColor="white" borderBottom='3px solid black'></Grid>
                            <Grid item xs={11.5} container height="9.9vh" backgroundColor="white" borderBottom='3px solid black' justifyContent='center' alignItems="center" style={{ backgroundImage: `url(${WowBar})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                <Grid item xs={4} container justifyContent='center' alignItems="center">
                                    <Grid item xs={12} >
                                        <div style={{ textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[0].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[0].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} style={{ textAlign: 'center' }}></Grid>
                            </Grid>
                            {/* 5 */}
                            <Grid item xs={0.5} height="9.9vh" backgroundColor="white" borderBottom='3px solid black'></Grid>
                            <Grid item xs={11.5} container height="9.9vh" backgroundColor="white" borderBottom='3px solid black' justifyContent='center' alignItems="center" style={{ backgroundImage: `url(${BounsBar})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                <Grid item xs={4} container justifyContent='center' alignItems="center">
                                    <Grid item xs={12} >
                                        <div style={{ textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[0].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[0].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} style={{ textAlign: 'center' }}></Grid>
                            </Grid>
                            <Grid item xs={3} height="5vh" />
                            <Grid item xs={7} height="5vh" style={{ textAlign: 'center', position: 'relative', zindex: 2 }} >

                                <Typography variant="h6" style={{ textAlign: 'center', position: 'relative', zindex: 2 }} >
                                    <Select
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        options={options}
                                        isSearchable={false}
                                        defaultValue={{ value: ChallengerMode[this.props.match.params.entryid].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[this.props.match.params.entryid].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography> }}
                                        menuPlacement="top"
                                        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                        styles={{ backgroundColor: 'red' }}
                                    />

                                </Typography>
                                {/* <Link to='/'> */}
                                {/* </Link> */}
                            </Grid>
                            <Grid item xs={1} height="5vh" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }} >
                                <Popup
                                    trigger={
                                        <div className="button">
                                            <div onClick={this.handleClick}>
                                                <img src={Forward} alt='' zIndex='1' width="150%" style={{
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    left: "0%",

                                                }} />
                                            </div>
                                        </div>
                                    }
                                    modal
                                    lockScroll
                                    closeOnDocumentClick={false}
                                    nested
                                    onClose={this.handleClick}
                                    {...{ contentStyle }}
                                >
                                    {close => (
                                        <div className="modal" >
                                            <button className="close" onClick={close}>

                                            </button>
                                            <Grid xs={12} >
                                                Game Content
                                                <Link to={'/EndChallengeMode'}> <button >
                                                 Go to check end
                                                </button>
                                                </Link>
                                            </Grid>
                                            
                                        </div>
                                    )}
                                </Popup>
                            </Grid>


                        </Grid>


                    </Grid>

                    <Grid item xs={12} display={this.state.isToggleOn ? 'block' : 'none'} >
                        <EndBar />

                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        height="20vh"
                    >
                    </Grid>
                </Grid>
            </Box >
        )
    }
}