import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useStopwatch } from 'react-timer-hook';
import { styled } from '@mui/material/styles'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import backgroundEnd from "../../../reed_bg.svg"
import Select from 'react-select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import pic1 from '../../framework/img/300x100.jpeg'
import IconButton from '@mui/material/IconButton';
import face0 from "../../../face_10.svg"
import face1 from "../../../face_1.svg"
import face2 from "../../../face_2.svg"
import face3 from "../../../face_3.svg"
import face4 from "../../../face_4.svg"
import face5 from "../../../face_5.svg"
import face6 from "../../../face_6.svg"
import face7 from "../../../face_7.svg"
import face8 from "../../../face_8.svg"
import face9 from "../../../face_9.svg"
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
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade } from "swiper";
SwiperCore.use([Autoplay, EffectFade]);
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
    left: "35%",
    bottom: "3vh"

});
const StyledFab3 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    left: "45%",

});
const contentStyle = {
    background: '#cfcece',
    width: "100%",
    height: "95%",
    borderRadius: "5%",
};
function MyStopwatch() {
    const {
        seconds,
        minutes,
        start
    } = useStopwatch({ autoStart: false });
    function Startplay() {
        start();

    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px' }}>
                <span>{minutes}</span>:<span>{seconds}</span>
                <button onClick={Startplay}>Start</button>
            </div>
        </div>
    );
}
export default class OneVoneModeGo extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.Mode = 1;
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
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
        const OneVoneMode = [
            { id: 0, MaxPayOut: 88, MaxPrize: 3500, entryFee: 88 },
            { id: 1, MaxPayOut: 81, MaxPrize: 3100, entryFee: 848 },
            { id: 2, MaxPayOut: 848, MaxPrize: 2500, entryFee: 828 },
        ]
        // const ScoreData = [
        //     { id: 0, Puzzle: 100, Score: 1000, ChallengeName: "GRAND" },
        //     { id: 1, Puzzle: 80, Score: 800, ChallengeName: "EPIC" },
        //     { id: 2, Puzzle: 60, Score: 600, ChallengeName: "HERO" },
        //     { id: 3, Puzzle: 40, Score: 400, ChallengeName: "WOW" },
        //     { id: 4, Puzzle: 20, Score: 200, ChallengeName: "BOUNS" },
        // ]   It is for use
        const RandomAvatarData = [
            { id: 0, src: "", name: "" },
            { id: 1, src: face1, name: "AbigGuy" },
            { id: 2, src: face2, name: "BoomMan" },
            { id: 3, src: face3, name: "CatMan" },
            { id: 4, src: face4, name: "DogMan" },
            { id: 5, src: face5, name: "EndMan" },
            { id: 6, src: face6, name: "FatherMan" },
            { id: 7, src: face7, name: "GirlMan" },
            { id: 8, src: face8, name: "HeroMan" },
            { id: 8, src: face9, name: "IconMan" },
        ]
        const user = { id: 0, src: face0, name: "Ka Po" }
        const RandomAvatar = RandomAvatarData.map((data) => {
            return (
                <SwiperSlide>
                    <Grid xs={12} container height="100%" justifyContent='center' alignItems="center" style={{ border: "1px solid grey", textAlign: 'center' }} >
                        <Grid xs={5} container justifyContent="center" alignItems="center" style={{ border: "1px solid grey", textAlign: 'center', height: "100%" }}>
                            <Typography variant="body2" component="div" color='primary' textAlign='center' >
                                {data.name}
                            </Typography>
                        </Grid>
                        <Grid xs={7} container justifyContent="center" alignItems="center" style={{ border: "1px solid grey", textAlign: 'center', height: "100%" }}>
                            <img src={data.src} alt="" width="100%" />
                        </Grid>
                    </Grid>
                </SwiperSlide>
            )
        })


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
                                            1 ON 1 MODE
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
                                                    trigger={<div className="button"> <div >
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
                            alignItems="center"
                            height="45vh"
                            style={{ border: "1px solid grey" }}>
                            <StyledFab3 size="large" color="secondary" aria-label="add">
                                <Typography variant="h4">VS</Typography>
                            </StyledFab3>
                            <Grid xs={3} item height="50%" style={{ border: "1px solid grey" }}>

                            </Grid>
                            <Grid xs={9} container item height="50%" justifyContent='center' alignItems="center" style={{ border: "1px solid grey", textAlign: 'center' }}>
                                <Swiper
                                    spaceBetween={30}
                                    allowTouchMove={false}
                                    effect={"fade"}
                                    fadeEffect={{
                                        crossFade: true,
                                    }}
                                    centeredSlides={true}
                                    stopOnLastSlide={true}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false
                                    }}

                                    className="mySwiper"
                                >

                                    {RandomAvatar}
                                </Swiper>
                            </Grid>
                            {/* next half page */}
                            <Grid xs={9} container height="50%" justifyContent='center' alignItems="center" style={{ border: "1px solid grey", textAlign: 'center' }}>
                            
                                        <Grid xs={12} container height="100%" justifyContent='center' alignItems="center" style={{ border: "1px solid grey", textAlign: 'center' }} >
                                            <Grid xs={7} container justifyContent="center" alignItems="center" style={{ border: "1px solid grey", textAlign: 'center', height: "100%" }}>
                                                <img src={user.src} alt="" width="80%" />
                                            </Grid>
                                            <Grid xs={5} container justifyContent="center" alignItems="center" style={{ border: "1px solid grey", textAlign: 'center', height: "100%" }}>
                                                <Typography variant="body1  " component="div" color='primary' textAlign='center' >
                                                    {user.name}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                            </Grid>
                            <Grid xs={3} item height="50%" style={{ border: "1px solid grey", textAlign: 'center', paddingTop: '15%' }}>
                            </Grid>
                        </Grid>

                        <Grid item xs={7} height="9vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                            <div>
                                <MyStopwatch />
                            </div>
                        </Grid>
                        <Grid item xs={5} height="9vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                            <Typography variant="body1"> entry fee</Typography>
                            <Typography variant="h6">{OneVoneMode[this.props.match.params.entryid].entryFee}<img src={puzzle} alt="icon" width="15%" />

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