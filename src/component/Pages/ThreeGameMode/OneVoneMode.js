import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useStopwatch } from 'react-timer-hook';
import backgroundEnd from "../../../reed_bg.svg"
import Forward from '../../../svgicon/Componenticon/Forward.svg'
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import IconButton from '@mui/material/IconButton';
import face1 from "../../../face_1.svg"
import face2 from "../../../face_2.svg"
import face3 from "../../../face_3.svg"
import face4 from "../../../face_4.svg"
import back from '../../../svgicon/Componenticon/Back.svg'
import face5 from "../../../face_5.svg"
import face6 from "../../../face_6.svg"
import face7 from "../../../face_7.svg"
import face8 from "../../../face_8.svg"
import face9 from "../../../face_9.svg"
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
import BgBlack from "../../../svgicon/OVOmode/BgBlack.svg"
import Bgpink from "../../../svgicon/OVOmode/BgPink.svg"
import Vs from "../../../svgicon/OVOmode/Vs.svg"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from "swiper/react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';
import Logout from '../../../logout.svg'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Hamburgicon from "../../../svgicon/Componenticon/Hamburgicon.svg";
import Chasepuzzle from "../../../svgicon/Componenticon/Chasepuzzle.svg"
import Close from '../../../svgicon/Componenticon/Close.svg'
import GameTutorial from "../../../svgicon/BattleMode/GameTutorial.svg"
import Download from "../../../svgicon/BattleMode/Download.svg"
import PoweredByR from '../../../svgicon/PowerBy/PowerByR.svg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { withRouter } from 'react-router-dom';
import SwiperCore, { Autoplay, EffectFade } from "swiper";
SwiperCore.use([Autoplay, EffectFade]);
const contentStyle = {
    background: '#242632',
    width: "95%",
    height: "95%",
    borderRadius: "5%",
};

const userdata = [
    { id: 0, level: 'Lv1', ReesID: 1, nickname: 'Jay' },
]

const Toplinkdata = [
    { id: 0, linkName: "PROFILE", link: `/${userdata[0].ReesID}/Profile` },
    { id: 1, linkName: "SETTING", link: `/${userdata[0].ReesID}/Setting` },
    { id: 2, linkName: "EVENTS", link: "/Events" },
    { id: 3, linkName: "BUY PUZZLES", link: "/Wallet/PuzzlePackage" },
    { id: 4, linkName: "Reward Status", link: `/MissionMain/RewardStatus` },
    { id: 5, linkName: "Player Support Guide", link: `/MissionMain/SupportGuide` },
    { id: 6, linkName: "General FAQ", link: "/MissionMain/FAQ" },
    { id: 7, linkName: "Privacy Policy", link: "/MissionMain/Policy" },
    { id: 8, linkName: "Terms of Service", link: "/MissionMain/Service" }

]
const Bottomlinkdata = [
    { id: 0, linkName: "About REES", link: "/" },
    { id: 3, linkName: "LOGOUT", link: "/login" },
]
function MyStopwatch() {
    const {
        seconds,
        minutes,
        start
    } = useStopwatch({ autoStart: true });
    function Startplay() {
        start();

    }

    return (
        <div style={{ textAlign: 'center' }} onClick={Startplay}>
            <div style={{ fontSize: '40px' }} >
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
    );
}

const endbartype='Play'
class OneVoneModeGo extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, isOpen: false };
        this.Mode = 1;
        this.handleClick = this.handleClick.bind(this);
        this.openhandleClick = this.openhandleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    openhandleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    routingFunction = (param) => {
        this.props.history.push({
            pathname: `/target-path`,
            state: param
        });
    }

    render() {



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
        const OneVoneMode = [
            { id: 0, MaxPayOut: 88, MaxPrize: 3500, entryFee: 88 },
            { id: 1, MaxPayOut: 81, MaxPrize: 3100, entryFee: 848 },
            { id: 2, MaxPayOut: 848, MaxPrize: 2500, entryFee: 828 },
        ]
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
        const user = { id: 0, src: face1, name: "Ka Po" }
        const RandomAvatar = RandomAvatarData.map((data) => {
            return (
                <SwiperSlide>
                    <Grid xs={12} container height="100%" justifyContent='center' alignItems="center" style={{ textAlign: 'center' }} >
                        <Grid xs={5} container justifyContent="center" alignItems="center" style={{ textAlign: 'center', height: "100%" }}>
                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                {data.name}
                            </Typography>
                        </Grid>
                        <Grid xs={7} container justifyContent="center" alignItems="center" style={{ textAlign: 'center', height: "100%" }}>
                            <img src={data.src} alt="" width="100%" />
                        </Grid>
                    </Grid>
                </SwiperSlide>
            )
        })


        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                    <Grid xs={12}  >
                        <React.Fragment >
                            <Box sx={{ flexGrow: 1, }} style={{ display: this.state.isToggleOn ? "" : 'none' }} >
                                <CssBaseline />
                                <AppBar position={'fixed'} align='center' sx={{ top: 0, bottom: 'auto' }}  >
                                    <Toolbar style={{ backgroundColor: '#242634' }} >
                                        <Typography variant="h6" component="div" sx={{}}>
                                            <img src={back} alt='' width="40%" onClick={() => this.props.history.goBack()} style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                top: 5,
                                                left: "-35%",
                                            }} />
                                        </Typography>
                                        <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-13%",
                                        }}>    1 ON 1 MODE
                                        </Typography>
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"

                                            onClick={this.openhandleClick}
                                        >
                                            <img src={Hamburgicon} alt="" width="150%" style={{
                                                position: 'absolute',

                                                left: 0,
                                                margin: '0 10%',
                                            }} />
                                        </IconButton>
                                        {/* drawer */}
                                        <Drawer
                                            anchor={"right"}
                                            open={this.state.isOpen}
                                            onClose={this.openhandleClick}
                                        >
                                            <Box
                                                sx={{ width: 280, height: "100vh", backgroundColor: "#242634", overflow: 'scroll' }}
                                                role="presentation"
                                            >
                                                <List >

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
                                                <List style={{ textDecoration: 'none', color: 'white' }}  >
                                                    {Bottomlinkdata.slice(0, 1).map((text, index) => (
                                                        <ListItem button key={text.id}>
                                                            <ListItemText >
                                                                <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>{text.linkName}  </Link>
                                                            </ListItemText>
                                                        </ListItem>
                                                    ))}
                                                    <ListItem >
                                                        <ListItemText >
                                                            <Link to={Bottomlinkdata[1].link} style={{ textDecoration: 'none', color: 'white' }}>{Bottomlinkdata[1].linkName}   <img src={Logout} alt="logout" /></Link>
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
                                                            <div onClick={this.handleClick}>
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
                                                    closeOnDocumentClick={false}
                                                    onClose={this.handleClick}
                                                    nested
                                                    {...{ contentStyle }}
                                                >
                                                    {close => (
                                                        <div className="modal" >
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
                                                    trigger={<div className="button" > <div >
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
                                                                <Typography variant="h6" component="div" color='white' textAlign='center'>
                                                                    How to play
                                                                </Typography>
                                                                <Typography variant="caption" component="div" color='white' textAlign='center'>
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
                                                                    <Typography variant="h4" component="div" color='white' textAlign='center'>
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
                        height="30vh"
                    >
                        <Grid item xs={12} container
                            justifyContent='center'
                            direction="row"
                            alignItems="center"
                            height="43vh"
                            marginTop="5vh"
                            style={{ paddingTop: '1vh', textAlign: 'center', backgroundImage: `url(${BgBlack})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>

                            <img src={Vs} alt='' width="30%" style={{
                                position: 'absolute',

                            }} />

                            <Grid xs={3} item height="50%" >

                            </Grid>
                            <Grid xs={9} container item height="50%" justifyContent='center' alignItems="center" style={{ textAlign: 'center' }}>
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
                            <Grid xs={9} container height="50%" justifyContent='center' alignItems="center" style={{ textAlign: 'center' }}>

                                <Grid xs={12} container height="80%" justifyContent='center' alignItems="center" style={{ textAlign: 'center' }} >
                                    <Grid xs={7} container justifyContent="center" alignItems="center" style={{ paddingBottom: '5vh', textAlign: 'center', height: "100%" }}>
                                        <img src={user.src} alt="" width="65%" />
                                    </Grid>
                                    <Grid xs={5} container justifyContent="center" alignItems="center" style={{ textAlign: 'center', height: "100%" }}>
                                        <Typography variant="body1 " component="div" color='white' textAlign='center' style={{ paddingBottom: '4vh' }} >
                                            {user.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={3} item height="50%" style={{ textAlign: 'center', paddingTop: '15%' }}>
                            </Grid>
                        </Grid>

                        <Grid item xs={7} height="9vh" style={{ textAlign: 'center' }} >
                            <div>
                                <MyStopwatch />
                            </div>
                        </Grid>
                        <Grid item xs={5} height="10vh" style={{ backgroundImage: `url(${Bgpink})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover', textAlign: 'center' }} >
                            <Typography variant="body1" color='white' paddingTop='0.5vh'> entry fee</Typography>
                            <Typography variant="h6" color='white'>{OneVoneMode[this.props.match.params.entryid].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" />
                                <Popup
                                    trigger={
                                        <div className="button">
                                            <div onClick={this.handleClick}>
                                                <img src={Forward} alt='' zIndex='1' width="30%" style={{
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    left: "33%",
                                                    top: -30

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
                                            <button className="close" onClick={close} style={{ boder: '5px solid white' }}>

                                            </button>
                                            <Grid xs={12} >
                                                Game Content
                                                <Link to={'/EndOneVoneMOde'}> <button >
                                                    Go to check end
                                                </button>
                                                </Link>
                                            </Grid>
                                        </div>
                                    )}
                                </Popup>
                            </Typography>

                            {/* <Link to='/'> */}
                            {/* </Link> */}
                        </Grid>

                    </Grid>

                    <Grid item xs={12} display={this.state.isToggleOn ? 'block' : 'none'} >
                    <EndBar endbartype={endbartype}/>
                    </Grid>
                    <Grid item xs={12} height="30vh" display={this.state.isToggleOn ? 'block' : 'none'} >

                    </Grid>
                </Grid>
            </Box >
        )
    }
}
export default withRouter(OneVoneModeGo)