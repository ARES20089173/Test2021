import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import backgroundEnd from "../../../reed_bg.svg"
import Forward from '../../../svgicon/Componenticon/Forward.svg'
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import IconButton from '@mui/material/IconButton';
import PoweredByR from '../../../svgicon/PowerBy/PowerByR.svg'
import Headicon from '../../../face_1.svg'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import back from '../../../svgicon/Componenticon/Back.svg'
import AppBar from '@mui/material/AppBar';
import puzzle from "../../../puzzle.svg"
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
import Bigbg from "../../../svgicon/BattleMode/Bigbg.svg"
import Bluebg from "../../../svgicon/BattleMode/BlueBg.svg"
import Greenbg from "../../../svgicon/BattleMode/GreenBg.svg"
import HalfPinkbg from "../../../svgicon/BattleMode/HalfPinkBg.svg"
import MyPuzzle from "../../../svgicon/BattleMode/MyPuzzle.svg"
import MyRank from "../../../svgicon/BattleMode/MyRank.svg"
import MyScore from "../../../svgicon/BattleMode/MyScore.svg"
import Pinkbg from "../../../svgicon/BattleMode/PinkBg.svg"
import share from "../../../svgicon/BattleMode/Share.svg"
import CPCR from "../../../svgicon/BattleMode/CPCR.svg"
import GameTutorial from "../../../svgicon/BattleMode/GameTutorial.svg"
import Download from "../../../svgicon/BattleMode/Download.svg"
import Badge1 from "../../../svgicon/BattleMode/1Badge.svg"
import Badge2 from "../../../svgicon/BattleMode/2Badge.svg"
import Badge3 from "../../../svgicon/BattleMode/3Badge.svg"
import Badge4 from "../../../svgicon/BattleMode/4Badge.svg"
import Badge5 from "../../../svgicon/BattleMode/5Badge.svg"
import Badge6 from "../../../svgicon/BattleMode/6Badge.svg"
import Badge7 from "../../../svgicon/BattleMode/7Badge.svg"
import Badge8 from "../../../svgicon/BattleMode/8Badge.svg"
import Badge9 from "../../../svgicon/BattleMode/9Badge.svg"
import Badge10 from "../../../svgicon/BattleMode/10Badge.svg"
import Close from '../../../svgicon/Componenticon/Close.svg'
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
        right: 13,
        top: 15,
        backgroundImage: `url(${Badge1})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover',
        padding: '0px 0px',
        backgroundColor: 'transparent'
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
const endbartype='Play'
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, isOpen: false };
        this.Mode = 1;

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
        const BattleMode = [
            { id: 0, MaxPayOut: 88, MaxPrize: 3500, entryFee: 88 },
            { id: 1, MaxPayOut: 81, MaxPrize: 3100, entryFee: 848 },
            { id: 2, MaxPayOut: 848, MaxPrize: 2500, entryFee: 828 },
        ]
        const TabledData = [
            { id: 1, MyPuzzle: 88, MyScore: 35, MyRacking: 6 },
            { id: 2, MyPuzzle: 81, MyScore: 43, MyRacking: 7 },
            { id: 3, MyPuzzle: 28, MyScore: 32, MyRacking: 8 },
        ]
        const HeadsvgData = [
            { id: 0, Headsvg: Headicon },
            { id: 1, Headsvg: Headicon },
            { id: 2, Headsvg: Headicon },
            { id: 3, Headsvg: Headicon },
            { id: 4, Headsvg: Headicon },
            { id: 5, Headsvg: Headicon },
            { id: 6, Headsvg: Headicon },
            { id: 7, Headsvg: Headicon },
            { id: 8, Headsvg: Headicon },
            { id: 9, Headsvg: Headicon },
            { id: 10, Headsvg: Headicon },
        ]
        const CurrentPlayer = 20;

        const TableData = TabledData.map((Tdata) => {
            return < Grid item xs={12} container height="5vh" textAlign="center" >
                <Grid item xs={4} height="5vh" color='white'>
                    {Tdata.MyPuzzle}
                </Grid>
                <Grid item xs={4} height="5vh" color='white'>
                    {Tdata.MyScore}
                </Grid>
                <Grid item xs={4} height="5vh" color='white'>
                    {Tdata.MyRacking}
                </Grid>
            </Grid >
        });

        return (
            <Box sx={{ flexGrow: 1 }} >
                <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                    <Grid xs={12}  >
                        <React.Fragment>
                            <Box sx={{ flexGrow: 1, }} height="0vh">
                                <CssBaseline />
                                <AppBar position={this.state.isToggleOn ? 'fixed' : 'relative'} align='center' sx={{ top: 0, bottom: 'auto' }} >
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
                                        }}>    BATTLE MODE
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
                                                    onClick
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
                        marginTop="22vh"
                    >
                        <Grid container
                            direction="row"
                            justifyContent='center'
                            height="50vh"
                        >

                            <Grid item xs={12} container
                                justifyContent='center'
                                direction="row"
                                height="40vh"
                            >
                                <Grid item xs={12} container
                                    justifyContent='center'
                                    direction="row"
                                    height="5vh"
                                >
                                    <Grid item xs={5.5} style={{ textAlign: 'center' }} style={{ backgroundImage: `url(${Bluebg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>

                                        <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='white' >
                                            Highest Price Out
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='white'>
                                            {BattleMode[this.props.match.params.entryid].MaxPrize}  <img src={Chasepuzzle} alt="gameicon" width="15%" />
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5.5} style={{ textAlign: 'center' }} marginLeft="1vh" style={{ backgroundImage: `url(${Pinkbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>

                                        <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='white'>
                                            Max PayOut
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='white'>
                                            {BattleMode[this.props.match.params.entryid].MaxPayOut}  <img src={Chasepuzzle} alt="gameicon" width="15%" />
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} container
                                    justifyContent="center"
                                    direction="row"
                                    height='3vh'>
                                    <Grid item xs={5.3} height='3vh' >
                                        {/* <Grid item xs={12} style={{ position:'relative',top:34.5,bottom:'auto', backgroundImage: `url(${CPCR})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover' }} height="5vh">

                                    </Grid> */}
                                    </Grid>
                                    <Grid item xs={5.5} style={{ textAlign: 'center' }} borderRadius="20%" paddingTop="3vh" >
                                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='white'>
                                            {CurrentPlayer}/50
                                        </Typography>
                                    </Grid>
                                </Grid>


                                <Grid item xs={11.5} container style={{ textAlign: 'left', backgroundImage: `url(${Bigbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover' }} justifyContent="center" alignItems="center" height="37vh">
                                    <Grid item xs={12} container style={{ position: 'relative', marginTop: '3vh', textAlign: 'left', overflowY: 'scroll', maxHeight: '55%' }} alignItems="center" height="50vh">

                                        <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge1} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[1].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                        <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge2} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[2].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                        <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge3} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[3].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                        <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge4} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[4].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                        <Grid item xs={8.4} container alignItems='center' justifyContent='center' >
                                            <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge5} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[5].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                            <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge6} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[6].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                            <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge7} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[7].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                            <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge8} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[8].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                            <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge9} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[9].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                            <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge10} alt='' width="22-%" />} color="secondary"><img src={HeadsvgData[10].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link></Grid>
                                        </Grid>
                                        <Grid item xs={3.6} container alignItems='center' justifyContent='center'  >
                                            <Grid item xs={12} height="38vh" style={{ textAlign: 'center' }} >
                                                <img src={HeadsvgData[0].Headsvg} alt="Headicon" width="85%" /><Link to="#" style={{ textDecoration: 'none' }}><Typography variant="body1" height="0vh" noWrap style={{ overflowWrap: 'break-word' }} display="inline" color='white'>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} width="20%" /></Typography></Link>
                                                <Grid item xs={12} height="9vh" style={{ textAlign: 'center' }} ><Link to="#" style={{ textDecoration: 'none' }}><img src={share} alt="button" width="100%" /></Link> </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} container container height="25vh" alignItems="center" justifyContent="center">
                                            <Grid item xs={12} container height="5vh" style={{ textAlign: 'center' }}>
                                                <Grid item xs={4} height="5vh">
                                                    <img src={MyPuzzle} alt="button" width="80%" />
                                                </Grid>
                                                <Grid item xs={4} height="5vh">
                                                    <img src={MyScore} alt="button" width="80%" />
                                                </Grid>
                                                <Grid item xs={4} height="5vh">
                                                    <img src={MyRank} alt="button" width="80%" />
                                                </Grid>
                                            </Grid>

                                            {TableData}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3} />
                                <Grid item xs={4.5} height="9vh" style={{ position: 'relative', paddingTop: '1vh', left: '3.5vh', textAlign: 'center', backgroundImage: `url(${Greenbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }} >
                                    <Link to="#" style={{ textDecoration: 'none' }}> <Typography variant="body2" color='white'> share to earn <br /> <Typography variant="body1">Free!</Typography></Typography></Link>

                                </Grid>
                                <Grid item xs={4.5} height="9vh" style={{ paddingTop: '0vh', textAlign: 'center', backgroundImage: `url(${HalfPinkbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }} >

                                    <Typography variant="caption" color='white'>                <Link to="#" style={{ textDecoration: 'none', color: 'white' }}> entry fee<br />
                                        <Typography variant="caption">{BattleMode[this.props.match.params.entryid].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" />
                                        </Typography>

                                    </Link>
                                        <Popup
                                            trigger={
                                                <div className="button">
                                                    <div onClick={this.handleClick}>
                                                        <img src={Forward} alt='' width="40%" style={{
                                                            position: 'relative',
                                                            zIndex: 2,
                                                            left: "30%",
                                                            bottom: 30
                                                        }} />
                                                    </div>
                                                </div>

                                            }
                                            modal
                                            onClose={this.handleClick}
                                            lockScroll
                                            closeOnDocumentClick={false}
                                            nested
                                            {...{ contentStyle }}
                                        >
                                            {close => (
                                                <div className="modal" >
                                                    <button className="close" onClick={close}>

                                                    </button>
                                                    <Grid xs={12} >
                                                        Game Content
                                                        <Link to={'/EndBattleMode'}> <button >
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
                            <Grid xs={12} display={this.state.isToggleOn ? 'block' : 'none'} >
                            <EndBar endbartype={endbartype}/>
                            </Grid>

                        </Grid>
                        <Grid container
                            direction="row"
                            justifyContent='center'
                            height="20vh"
                        >
                        </Grid>
                    </Grid>

                </Grid>
            </Box >
        )
    }
}