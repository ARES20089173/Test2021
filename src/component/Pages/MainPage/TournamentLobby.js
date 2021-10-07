import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import backgroundEnd from "../../../reed_bg.svg"
import EndBar from '../../framework/endbarWithback';

import 'reactjs-popup/dist/index.css';
import "./styles.css"
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
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
// import { Link } from "react-router-dom"
import puzzle from "../../../puzzle.svg"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slide from '@mui/material/Slide';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
const contentStyle = {
    marginTop: '37%',
    background: '#cfcece',
    width: "99%",
    height: "50%",
    borderRadius: "5%",
};
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
    })
}));
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false};
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleExpandClick2 = this.handleExpandClick2.bind(this);
        this.handleExpandClick3 = this.handleExpandClick3.bind(this);
        //     this.state = { isToggleOn: true };
        //     this.Mode = 1;
    }
    handleExpandClick = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    };
    handleExpandClick2 = () => {
        this.setState(prevState => ({
            expanded2: !prevState.expanded2
        }))
    };
    handleExpandClick3 = () => {
        this.setState(prevState => ({
            expanded3: !prevState.expanded3
        }))
    };

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
        const Mode = [
            { id: 0, Modechoose: "oneVoneMode", embedId: "rokGy0huYEA", detail: "Chanllenger MODE is ......." },
            { id: 1, Modechoose: "challengerMode", embedId: "7HP8X7dadmM", detail: "1 ON 1 MODE is ......." },
            { id: 2, Modechoose: "BattleMode", embedId: "dWOm9KXJQLo", detail: "Battle MODE is ......." },
        ]
        const oneVoneMode = [
            { id: 0, entryFee: 88, MaxPrize: 120 },
            { id: 1, entryFee: 848, MaxPrize: 1200 },
            { id: 2, entryFee: 828, MaxPrize: 1200 },
        ]
        const challengerMode = [
            { id: 0, entryFee: 188, MaxPrize: 120 },
            { id: 1, entryFee: 1848, MaxPrize: 2500 },
            { id: 2, entryFee: 1828, MaxPrize: 3500 },
        ]
        const BattleMode = [
            { id: 0, entryFee: 88, MaxPrize: 3500 },
            { id: 1, entryFee: 848, MaxPrize: 2500 },
            { id: 2, entryFee: 828, MaxPrize: 3550 },
        ]

        const BattleModeItem = BattleMode.map((number) => {
            if (number.entryFee == 50) {
                return <div>{number.entryFee}</div>
            }
        });
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
        const backgroundImage = [
            { id: 1, src: '/img/testPic.png' },
            { id: 2, src: '/img/testPic1.png' },
            { id: 3, src: '/img/testPic2.png' },
        ]
        // if (this.props.match.params.id == 1) {
        //     oneVoneMode2[] = [
        //         { id: 1, entryFee: 388, MaxPrize: 300 },
        //     ]
        //     challengerMode[1] = [
        //         { id: 1, entryFee: 188, MaxPrize: 300 },
        //     ]
        //     BattleMode[0]=[
        //         { id: 3, entryFee: 828, MaxPrize: 3550 },
        //     ]
        // }



        // const StyledFab2 = styled(Fab)({
        //     position: 'fixed',
        //     bottom: "28%",
        //     left: "0%",

        // });
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
                                        CHOOSE YOUR FAVORITE MODE
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
                                    <Toolbar variant="dense">
                                        <Grid item xs={2} sx={{ marginTop: '1vh' }}>
                                            <img src={data[this.props.match.params.id].src} alt="gameicon" width="100%" />

                                        </Grid>
                                        <Grid item xs={8} sx={{ marginTop: '1vh' }}>
                                            <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', margin: 0, marginLeft: '2vh' }}>
                                                {data[this.props.match.params.id].name}
                                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                                                    CHOOSE TOURNAMENT AND PAID TO PLAY
                                                </Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={0} >
                                            {/* <IconButton
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
                                            </Typography> */}
                                        </Grid>
                                        <Grid item xs={0} >
                                            {/* <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/gametutorial`}>
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
                                            </Typography> */}
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
                    height="100%"
                    style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}
                >
                    <Grid item xs={12} marginLeft="2vh" marginTop="22vh">
                        <Popup
                            trigger={<div className="button"> <div onClick={this.oneVoneModehandleClick}><Typography color="primary"> 1 ON 1 Mode(?) </Typography></div></div>}
                            modal
                            lockScroll
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
                                        <Typography variant="h6" component="div" color='primary' textAlign='center'>
                                            How to play
                                        </Typography>
                                        <Typography variant="caption" component="div" color='primary' textAlign='center'>
                                            {Mode[0].Modechoose}
                                        </Typography>
                                        <Grid item xs={12} height="30vh">
                                            <div className="video-responsive">

                                                <iframe
                                                    src={`https://www.youtube.com/embed/${Mode[0].embedId}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded youtube"
                                                />
                                            </div>
                                        </Grid>
                                        <Typography variant="h4" component="div" color='primary' textAlign='center'>
                                            POWERED BY R<KeyboardArrowDown />
                                        </Typography>
                                    </Grid>
                                </div>
                            )}
                        </Popup>
                    </Grid>
                    <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='15vh'>
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }}>
                                    <img src={puzzle} alt="gameicon" width="30%" />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        {oneVoneMode[0].MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} height='15vh' style={{ border: "1px solid grey" }}>
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 60,
                                        fontSize: 20,
                                        marginTop: 55
                                    }} color='primary'>
                                        Entry fee:{oneVoneMode[0].entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>

                                    <Button style={{
                                        position: 'absolute',
                                        right: 0,
                                        marginTop: 65

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                    <Link to={`/`}><img src={pic1} width="100%" height='100%' /></Link>
                                </Grid>

                            </Grid>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    {oneVoneMode.filter(content=> content.id>0).map((content) => (
                        <>
                            <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='15vh'>
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }}>
                                    <img src={puzzle} alt="gameicon" width="30%" />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        {content.MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} height='15vh' style={{ border: "1px solid grey" }}>
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 60,
                                        fontSize: 20,
                                        marginTop: 55
                                    }} color='primary'>
                                        Entry fee:{content.entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>

                                    <Button style={{
                                        position: 'absolute',
                                        right: 0,
                                        marginTop: 65

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                    <Link to={`/`}><img src={pic1} width="100%" height='100%' /></Link>
                                </Grid>

                            </Grid></>
                    ))}
                      </Collapse>

                    <Grid item xs={12} marginLeft="2vh" style={{ textAlign: 'center' }}>
                    <ExpandMore
                        expand={this.state.expanded}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="show more"
                        color="success"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    </Grid>

                    <Grid item xs={12} marginLeft="2vh">
                        <Popup
                            trigger={<div className="button"> <div onClick={this.challengerModehandleClick}> <Typography color="primary"> challengerMode(?)</Typography>  </div></div>}
                            modal
                            lockScroll
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
                                        <Typography variant="h4" component="div" color='primary' textAlign='center'>
                                            POWERED BY R<KeyboardArrowDown />
                                        </Typography>
                                    </Grid>
                                </div>
                            )}
                        </Popup>
                    </Grid>

                    <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='19vh'>
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }}>
                                    <img src={puzzle} alt="gameicon" width="50%" />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        {challengerMode[0].MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} height='19vh' style={{ border: "1px solid grey" }}>
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 60,
                                        fontSize: 20,
                                        marginTop: 80
                                    }} color='primary'>
                                        Entry fee:{challengerMode[0].entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>

                                    <Button style={{
                                        position: 'absolute',
                                        right: 0,
                                        marginTop: 90

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                    <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${challengerMode[0].id}/ChallengerModeGo`}><img src={pic1} width="100%" height='100%' /></Link>
                                </Grid>
                            </Grid>
                    <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
                    {challengerMode.filter(content=> content.id>0).map((content) => (
                        <>
                            <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='19vh'>
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }}>
                                    <img src={puzzle} alt="gameicon" width="50%" />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        {content.MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} height='19vh' style={{ border: "1px solid grey" }}>
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 60,
                                        fontSize: 20,
                                        marginTop: 80
                                    }} color='primary'>
                                        Entry fee:{content.entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>

                                    <Button style={{
                                        position: 'absolute',
                                        right: 0,
                                        marginTop:90

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                    <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${content.id}/ChallengerModeGO`}><img src={pic1} width="100%" height='100%' /></Link>
                                </Grid>
                            </Grid>
                        </>
                    ))}
                    </Collapse>

                    <Grid item xs={12} marginLeft="2vh" style={{ textAlign: 'center' }}>
                    <ExpandMore
                        expand={this.state.expanded2}
                        onClick={this.handleExpandClick2}
                        aria-expanded={this.state.expanded2}
                        aria-label="show more"
                        color="success"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    </Grid>

                    <Grid item xs={12} marginLeft="2vh">
                        <Popup
                            trigger={<div className="button"> <div onClick={this.BattleModehandleClick}><Typography color="primary"> Battle Mode(?) </Typography></div></div>}
                            modal
                            lockScroll
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
                                        <Typography variant="h6" component="div" color='primary' textAlign='center'>
                                            How to play
                                        </Typography>
                                        <Typography variant="caption" component="div" color='primary' textAlign='center'>
                                            {Mode[2].Modechoose}
                                        </Typography>
                                        <Grid item xs={12} height="30vh">
                                            <div className="video-responsive">

                                                <iframe
                                                    src={`https://www.youtube.com/embed/${Mode[2].embedId}`}
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
                    </Grid>
                    <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='19vh'>
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }}>
                                    <img src={puzzle} alt="gameicon" width="50%" />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        {BattleMode[0].MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} height='19vh' style={{ border: "1px solid grey" }}>
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 60,
                                        fontSize: 20,
                                        marginTop: 80
                                    }} color='primary'>
                                        Entry fee:{BattleMode[0].entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>

                                    <Button style={{
                                        position: 'absolute',
                                        right: 0,
                                        marginTop: 90

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                    <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${BattleMode[0].id}/BattleModeJoin`}><img src={pic1} width="100%" height='100%' /></Link>
                                </Grid>

                            </Grid>
                    <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit>
                    {BattleMode.filter(content=> content.id>0).map((content) => (
                        <>
                            <Grid item xs={12} marginTop="5vh">
                            </Grid>

                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='19vh'>

                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }} >
                                    <img src={puzzle} alt="gameicon" width="65%" style={{ marginTop: '2vh' }} />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        {content.MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} style={{ border: "1px solid grey", backgroundImage: `url(${backgroundImage[2].src})`, backgroundSize: '100% 100%' }} >
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 50,
                                        fontSize: 20,
                                        marginTop: 80
                                    }} color='primary'>
                                        Entry fee:{content.entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>
                                    <Button style={{
                                        position: 'absolute',
                                        right: 0,
                                        marginTop: 90

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                    <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${content.id}/BattleModeJoin`}><img src={pic1} width="100%" height='100%' /></Link>

                                </Grid>
                            </Grid>
                        </>
                    ))}
                    </Collapse>
                     <Grid item xs={12} marginLeft="2vh" style={{ textAlign: 'center' }}>
                    <ExpandMore
                        expand={this.state.expanded3}
                        onClick={this.handleExpandClick3}
                        aria-expanded={this.state.expanded3}
                        aria-label="show more"
                        color="success"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    </Grid>
                    <Grid item xs={12} marginTop="0vh" >
                        <EndBar />
                    </Grid>

                </Grid>
                <Box
                    sx={{
                        color: 'blue',
                        position: 'fixed',
                        top: "71%",
                        left: '80%',
                    }}
                >
                    <Typography variant="h5" component="div" sx={{ textalign: 'center' }}>
                        18/20
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ textalign: 'center' }}>
                        players
                    </Typography>
                </Box>
                {/* <Link to='/multigamechooser'>
                    <StyledFab2 size="small" color="secondary" aria-label="add">
                        <ArrowBackIcon />
                    </StyledFab2>
                </Link> */}
                <div id="popup-root" />
            </Box>

        );
    }
}