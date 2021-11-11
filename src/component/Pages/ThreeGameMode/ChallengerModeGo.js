import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import backgroundEnd from "../../../reed_bg.svg"
import Select from 'react-select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import "../../framework/css/cssFChallenge.css"
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
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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
    left: "45%",
    bottom: "3vh"

});
const contentStyle = {
    background: '#cfcece',
    width: "100%",
    height: "95%",
    borderRadius: "5%",
};
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
            { id: 0, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88, GameRules: "2048是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 1, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848, GameRules: "原神是一款智力向游戏可以锻炼人的逻辑能力" },
            { id: 2, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828, GameRules: "LOL是一款智力向游戏可以锻炼人的逻辑能力" },
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
                value: ChallengerMode[0].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[0].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[1].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[1].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[2].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[2].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[3].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[3].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[4].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[4].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[5].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[5].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[6].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[6].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[7].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[7].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[8].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[8].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography>
            },
        ];
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
                                            CHALLENGER MODE
                                        </Typography>
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{}}
                                            onClick={this.openhandleClick}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        {/* drawer */}
                                        <Drawer
                                            anchor={"right"}
                                            open={this.state.isOpen}
                                            onClose={this.openhandleClick}
                                        >
                                            <Box
                                                sx={{ width: 280, height: "100vh", backgroundColor: "white" }}
                                                role="presentation"
                                            >
                                                <List >

                                                    <IconButton
                                                        size="large"
                                                        edge="start"
                                                        color="inherit"
                                                        aria-label="menu"
                                                        onClick={this.openhandleClick}
                                                        sx={{ left: "90%", bottom: 20 }}
                                                    >
                                                        <MenuIcon />
                                                    </IconButton>
                                                    <ListItem>
                                                        <ListItemText primary={"close"} sx={{ float: "right" }} />
                                                    </ListItem>
                                                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                                                        <ListItem button key={text}>
                                                            <ListItemText primary={text} sx={{ float: "right" }} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                                <Divider />
                                                <List >
                                                    {["All mail", "Trash", "Spam"].map((text, index) => (
                                                        <ListItem button key={text}>
                                                            <ListItemIcon>
                                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                                            </ListItemIcon>
                                                            <ListItemText primary={text} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        </Drawer>
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

                                                <Popup
                                                    trigger={
                                                        <div className="button">
                                                            <div onClick={this.handleClick}>
                                                                <IconButton
                                                                    size="small"
                                                                    color="inherit"
                                                                    aria-label="menu"
                                                                    sx={{}}
                                                                ><FileDownloadIcon />
                                                                </IconButton>
                                                            </div>
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
                                                            <Grid xs={12} >

                                                                <Typography variant="h3" inline>
                                                                    Game Rule
                                                                </Typography>
                                                                <Typography variant="h4" inline>
                                                                    {data[this.props.match.params.id].GameRules}
                                                                </Typography>
                                                            </Grid>
                                                        </div>
                                                    )}
                                                </Popup>

                                                <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                    Game
                                                </Typography>
                                                <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                    Rules
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2} >
                                                <Popup
                                                    trigger={
                                                            <div className="button"> <div >
                                                            <IconButton
                                                                size="small"
                                                                color="inherit"
                                                                aria-label="menu"
                                                                sx={{}}
                                                            ><SportsEsportsIcon />
                                                            </IconButton></div></div>}
                                                    modal
                                                    lockScroll
                                                    nested
                                                >
                                                    {close => (
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>
                                                                <div className="close" >
                                                                    &times;
                                                                </div>
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
                                                                        POWERED BY R<KeyboardArrowDown />
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    )}
                                                </Popup>


                                                <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                    Mode
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
                            direction="row"
                            height="45vh">
                            {/* 1 */}
                            <Grid item xs={12} container height="8vh" backgroundColor="white" justifyContent='center' alignItems="center" >
                                <Grid item xs={6} container justifyContent='center' alignItems="center">
                                    <Grid item xs={8} >
                                        <div style={{ border: "1px solid grey", textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[0].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[0].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'center' }}>
                                    <Typography>GRAND</Typography>
                                </Grid>
                            </Grid>
                            {/* 2 */}
                            <Grid item xs={12} container height="8vh" backgroundColor="white" justifyContent='center' alignItems="center" >
                                <Grid item xs={6} container justifyContent='center' alignItems="center">
                                    <Grid item xs={8} >
                                        <div style={{ border: "1px solid grey", textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[1].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[1].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'center' }}>
                                    <Typography>EPIC</Typography>
                                </Grid>
                            </Grid>
                            {/* 3 */}
                            <Grid item xs={12} container height="8vh" backgroundColor="white" justifyContent='center' alignItems="center" >
                                <Grid item xs={6} container justifyContent='center' alignItems="center">
                                    <Grid item xs={8} >
                                        <div style={{ border: "1px solid grey", textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[2].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[2].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'center' }}>
                                    <Typography>HERO</Typography>
                                </Grid>
                            </Grid>
                            {/* 4 */}
                            <Grid item xs={12} container height="8vh" backgroundColor="white" justifyContent='center' alignItems="center" >
                                <Grid item xs={6} container justifyContent='center' alignItems="center">
                                    <Grid item xs={8} >
                                        <div style={{ border: "1px solid grey", textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[3].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[3].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'center' }}>
                                    <Typography>WOW</Typography>
                                </Grid>
                            </Grid>
                            {/* 5 */}
                            <Grid item xs={12} container height="8vh" backgroundColor="white" justifyContent='center' alignItems="center" >
                                <Grid item xs={6} container justifyContent='center' alignItems="center">
                                    <Grid item xs={8} >
                                        <div style={{ border: "1px solid grey", textAlign: 'center', height: "8vh" }}>
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[4].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[4].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'center' }}>
                                    <Typography>BOUNS</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} />
                        <Grid item xs={6} height="7vh" style={{ textAlign: 'center' }} >

                            <Typography variant="h6">
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                    isSearchable={false}
                                    defaultValue={{ value: ChallengerMode[this.props.match.params.entryid].entryFee, label: <Typography variant="body1"> entry fee: {ChallengerMode[this.props.match.params.entryid].entryFee}<img src={puzzle} alt="icon" width="15%" /></Typography> }}
                                    menuPlacement="top"
                                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                />
                                <Popup
                                    trigger={
                                        <div className="button">
                                            <div onClick={this.handleClick}>

                                                <StyledFab2 size="small" color="secondary" aria-label="add">
                                                    <KeyboardArrowRightIcon />
                                                </StyledFab2>
                                            </div>
                                        </div>
                                    }
                                    modal
                                    lockScroll
                                    closeOnDocumentClick={false}
                                    nested
                                    {...{ contentStyle }}
                                >
                                    {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                                <div className="close" onClick={this.handleClick}>
                                                    &times;
                                                </div>
                                            </button>
                                            <Grid xs={12} >
                                                Game Content
                                            </Grid>
                                        </div>
                                    )}
                                </Popup>
                            </Typography>

                            {/* <Link to='/'> */}
                            {/* </Link> */}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} marginTop="0vh" display={this.state.isToggleOn ? 'block' : 'none'} >
                        <EndBar />
                    </Grid>
                </Grid>
            </Box >
        )
    }
}