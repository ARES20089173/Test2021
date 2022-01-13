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

import Download from '../../../svgicon/Componenticon/Download.svg'
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
import Forward from '../../../svgicon/Componenticon/Forward.svg'
import Down from '../../../svgicon/Componenticon/Down.svg'
import pic2 from "../../../svgicon/ThreeModePic/BattleMode.svg"
import pic1 from "../../framework/img/300x100.jpeg"
import PoweredByR from '../../../svgicon/PowerBy/PowerByR.svg'
import Toolbar from '@mui/material/Toolbar';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';
import Logout from '../../../logout.svg'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Hamburgicon from "../../../svgicon/Componenticon/Hamburgicon.svg";
import Chasepuzzle from "../../../svgicon/Componenticon/Chasepuzzle.svg"
import Silverpuzzle from "../../../svgicon/Componenticon/SilverPuzzle.svg"
import Close from '../../../svgicon/Componenticon/Close.svg'
import Button from '@mui/material/Button';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SmallLeftbg from '../../../svgicon/Gamelobby/SmallLeftbg.svg'
import SmallRightbg from '../../../svgicon/Gamelobby/SmallRightbg.svg'
import Grandprize from '../../../svgicon/Gamelobby/Grandprize.svg'
import Money from '../../../svgicon/Gamelobby/Money.svg'
import Rmoneyicon from '../../../svgicon/Componenticon/Rmoneyicon.svg'
import Leftbg from '../../../svgicon/Gamelobby/Leftbg.svg'
import Rightbg from '../../../svgicon/Gamelobby/Rightbg.svg'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const contentStyle = {
    background: '#242634',
    width: "95%",
    height: "95%",
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
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false, isToggleOn: true, isOpen: false };
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleExpandClick2 = this.handleExpandClick2.bind(this);
        this.handleExpandClick3 = this.handleExpandClick3.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.openhandleClick = this.openhandleClick.bind(this);
        //     this.state = { isToggleOn: true };
        //     this.Mode = 1;
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
            { id: 0, entryFee: 88, MaxPrize: 3500, player: 19 },
            { id: 1, entryFee: 848, MaxPrize: 2500, player: 12 },
            { id: 2, entryFee: 828, MaxPrize: 3550, player: 45 },
        ]

        const data = [
            { id: 0, src: Gicon1, name: "Onmyoji Arena", number: 52, link: '#' },
            { id: 1, src: Gicon2, name: "TOM & JERRY: CHASE", number: 56, link: '#' },
            { id: 2, src: Gicon3, name: "Super Mecha Champions", number: 55, link: '#' },
            { id: 3, src: Gicon4, name: "Side Force Don't Fall", number: 53, link: '#' },
            { id: 4, src: Gicon5, name: "Seven Squids", number: 54, link: '#' },
            { id: 5, src: Gicon6, name: "Punch Box", number: 51, link: '#' },
            { id: 6, src: Gicon7, name: "Iron Space", number: 52, link: '#' },
            { id: 7, src: Gicon8, name: "Candy Robber", number: 58, link: '#' },
            { id: 8, src: Gicon9, name: "Fruit Matching", number: 88, link: '#' },
            { id: 9, src: Gicon10, name: "Falling Cubes", number: 25, link: '#' },
            { id: 10, src: Gicon11, name: "Box Tower ", number: 95, link: '#' },
            { id: 11, src: Gicon12, name: "Jumper Frog", number: 85, link: '#' },
            { id: 12, src: Gicon13, name: "2048", number: 75, link: '#' },
            { id: 13, src: Gicon14, name: "HEXTRIS", number: 65, link: '#' },
            { id: 14, src: Gicon15, name: "FISHING FRENZY", number: 55, link: '#' },
        ]


        return (
            <Box sx={{ flexGrow: 1 }}     style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}
            >

                <Grid xs={12} container
                 >
                    <React.Fragment>
                        <Box sx={{ flexGrow: 1, }}>
                            <CssBaseline />
                            <AppBar position={this.state.isToggleOn ? 'fixed' : 'relative'} align='center' sx={{ top: 0, bottom: 'auto' }} >
                                <Toolbar style={{ backgroundColor: '#242634' }} >
                                    <Typography variant="h6" component="div" color='primary'>
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        CHOOSE YOUR FAVORITE MODE

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
                                            sx={{ width: 280, height: "100vh", backgroundColor: "#242634" ,overflow:'scroll'}}
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
                                        <Grid item xs={2} sx={{ marginTop: '1vh' }}>
                                            <IconButton
                                                size="large"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{}}  ><Link to={data[this.props.match.params.id].link}> <img src={Download} alt="gameicon" width="100%" /> </Link>  </IconButton>
                                        </Grid>



                                    </Toolbar>
                                </div>
                            </AppBar>
                        </Box>
                    </React.Fragment>
                    <Grid container
                        direction="row"
                        justifyContent='center'
                    >

                        <Grid item xs={12} marginLeft="2vh" marginTop="22vh" >
                            <Popup
                                trigger={<div className="button"> <div ><Typography color="white"> 1 ON 1 Mode(?) </Typography></div></div>}
                                modal
                                lockScroll
                                nested
                            >
                                {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>

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
                                                <img src={PoweredByR} alt='' />
                                            </Typography>
                                        </Grid>
                                    </div>
                                )}
                            </Popup>
                        </Grid>

                        <Grid container
                            direction="row"
                            justifyContent='center' xs={12} height='15vh'>
                            <Grid item xs={3} height='15vh' style={{ textAlign: 'center', backgroundImage: `url(${SmallLeftbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>
                                <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='black' style={{ marginTop: '2vh' }} paragraph>
                                    <img src={Money} alt="gameicon" width="40%" /><br /> <b>{oneVoneMode[0].MaxPrize}</b>  <br />
                                    <img src={Grandprize} alt='' />
                                </Typography>
                            </Grid>
                            <Grid item xs={8} height='15vh' style={{ backgroundImage: `url(${SmallRightbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                <Typography style={{
                                    position: 'absolute',
                                    right: 60,
                                    fontSize: 20,
                                    marginTop: 65
                                }} variant="caption" color='white'>
                                    <b>Entry fee:{oneVoneMode[0].entryFee}<img src={Rmoneyicon} alt="icon" width="15%" style={{ position: 'relative', top: 4 }} /></b>
                                </Typography>

                                <Button style={{
                                    position: 'absolute',
                                    right: 0,
                                    marginTop: 65

                                }}>
                                    <Popup
                                        trigger={
                                            <div className="button" >
                                                <div onClick={this.handleClick}>

                                                    <img src={Forward} alt='' zIndex='2' width="60%" style={{
                                                        position: 'relative',
                                                        zIndex: 0,
                                                        left: "25%",
                                                        bottom: 23
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
                                            <div className="modal">
                                                <button className="close" onClick={close}>

                                                </button>
                                                <Grid xs={12} >
                                                    Game Content
                                                </Grid>
                                            </div>
                                        )}
                                    </Popup>
                                </Button>
                                <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${oneVoneMode[0].id}/OneVoneMode`}><img src={SmallRightbg} width="100%" height='100%' /></Link>

                            </Grid>
                        </Grid>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit style={{ width: "100%" }} >
                            {oneVoneMode.filter(content => content.id > 0).map((content) => (
                                <>
                                    <Grid item xs={12} marginTop="3vh">
                                    </Grid>
                                    <Grid container
                                        direction="row"
                                        justifyContent='center' xs={12} height='15vh'>
                                        <Grid item xs={3} height='15vh' style={{ textAlign: 'center', backgroundImage: `url(${SmallLeftbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>
                                            <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='black' style={{ marginTop: '2vh' }} paragraph>
                                                <img src={Money} alt="gameicon" width="45%" /><br /> <b>{oneVoneMode[0].MaxPrize}</b>  <br />
                                                <img src={Grandprize} alt='' />
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} height='15vh' style={{ backgroundImage: `url(${SmallRightbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                            <Typography style={{
                                                position: 'absolute',
                                                right: 60,
                                                fontSize: 20,
                                                marginTop: 65
                                            }} variant="caption" color='white'>
                                                <b>Entry fee:{oneVoneMode[0].entryFee}<img src={Rmoneyicon} alt="icon" width="15%" style={{ position: 'relative', top: 4 }} /></b>
                                            </Typography>

                                            <Button style={{
                                                position: 'absolute',
                                                right: 0,
                                                marginTop: 65

                                            }}>
                                                <Popup
                                                    trigger={
                                                        <div className="button" >
                                                            <div onClick={this.handleClick}>

                                                                <img src={Forward} alt='' zIndex='2' width="60%" style={{
                                                                    position: 'relative',
                                                                    zIndex: 0,
                                                                    left: "25%",
                                                                    bottom: 23
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
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>

                                                            </button>
                                                            <Grid xs={12} >
                                                                Game Content
                                                            </Grid>
                                                        </div>
                                                    )}
                                                </Popup>
                                            </Button>
                                            <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${content.id}/OneVoneMode`}><img src={SmallRightbg} width="100%" height='100%' /></Link>

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
                                <img src={Down} alt="" width="50%" />
                            </ExpandMore>
                        </Grid>

                        <Grid item xs={12} marginLeft="2vh">
                            <Popup
                                trigger={<div className="button"> <div > <Typography color="white"> ChallengerMode(?)</Typography>  </div></div>}
                                modal
                                lockScroll
                                nested
                            >
                                {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>

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
                                                <img src={PoweredByR} alt='' />
                                            </Typography>
                                        </Grid>
                                    </div>
                                )}
                            </Popup>
                        </Grid>

                        <Grid item xs={12} marginTop="0vh">
                        </Grid>
                        <Grid item container
                            direction="row"
                            justifyContent='center' xs={12} height='19vh'>

                            <Grid container direction="row"
                                justifyContent='center' xs={3} height='19vh' style={{ textAlign: 'center', backgroundImage: `url(${Leftbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>
                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='black' style={{ marginTop: '2.5vh' }}>
                                    <img src={Chasepuzzle} alt="gameicon" width="50%" /><br /><b>{challengerMode[0].MaxPrize}</b>  <br /> <img src={Grandprize} alt='' />
                                </Typography>
                            </Grid>
                            <Grid item xs={8} height='19vh' style={{ backgroundImage: `url(${Rightbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                <Typography style={{
                                    position: 'absolute',
                                    right: 60,
                                    fontSize: 20,
                                    marginTop: 90
                                }} color='white'>
                                    <b> Entry fee:{challengerMode[0].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" style={{ position: 'relative', top: 4 }} /></b>
                                </Typography>
                                <Button style={{
                                    position: 'absolute',
                                    right: 0,
                                    marginTop: 90
                                }}>
                                    <Popup
                                        trigger={
                                            <div className="button">
                                                <div onClick={this.handleClick}>
                                                    <img src={Forward} alt='' zIndex='1' width="60%" style={{
                                                        position: 'relative',
                                                        zIndex: 0,
                                                        left: "25%",
                                                        bottom: 23
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
                                            <div className="modal">
                                                <button className="close" onClick={close}>

                                                </button>
                                                <Grid xs={12} >
                                                    Game Content
                                                </Grid>
                                            </div>
                                        )}
                                    </Popup>
                                </Button>
                                <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${challengerMode[0].id}/ChallengerModeGo`}><img src={Rightbg} width="100%" height='100%' /></Link>
                            </Grid>
                        </Grid>
                        <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit style={{ width: "100%" }}>
                            {challengerMode.filter(content => content.id > 0).map((content) => (
                                <>
                                    <Grid item xs={12} marginTop="5vh">
                                    </Grid>
                                    <Grid item container
                                        direction="row"
                                        justifyContent='center' xs={12} height='19vh'>
                                        <Grid item xs={3} height='19vh' style={{ textAlign: 'center', backgroundImage: `url(${Leftbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>
                                            <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='black' style={{ marginTop: '2.5vh' }}>
                                                <img src={Chasepuzzle} alt="gameicon" width="50%" /><br /><b>{challengerMode[0].MaxPrize} </b> <br />  <img src={Grandprize} alt='' />
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} height='19vh' style={{ backgroundImage: `url(${Rightbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}  >
                                            <Typography style={{
                                                position: 'absolute',
                                                right: 60,
                                                fontSize: 20,
                                                marginTop: 90
                                            }} color='white'>
                                                <b>Entry fee:{content.entryFee}<img src={Chasepuzzle} alt="icon" width="15%" style={{ position: 'relative', top: 4 }} /></b>
                                            </Typography>

                                            <Button style={{
                                                position: 'absolute',
                                                right: 0,
                                                marginTop: 90

                                            }}>
                                                <Popup
                                                    trigger={
                                                        <div className="button">
                                                            <div onClick={this.handleClick}>
                                                                <img src={Forward} alt='' zIndex='1' width="60%" style={{
                                                                    position: 'relative',
                                                                    zIndex: 0,
                                                                    left: "25%",
                                                                    bottom: 23
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
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>

                                                            </button>
                                                            <Grid xs={12} >
                                                                Game Content
                                                            </Grid>
                                                        </div>
                                                    )}
                                                </Popup>
                                            </Button>
                                            <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${content.id}/ChallengerModeGO`}><img src={Rightbg} width="100%" height='100%' /></Link>
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
                                <img src={Down} alt="" width="50%" />
                            </ExpandMore>
                        </Grid>

                        <Grid item xs={12} marginLeft="2vh">
                            <Popup
                                trigger={<div className="button"> <div ><Typography color="white"> Battle Mode(?) </Typography></div></div>}
                                modal
                                lockScroll
                                nested
                            >
                                {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>

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
                        <Grid item xs={12} marginTop="0vh">
                        </Grid>
                        <Grid item container
                            direction="row"
                            justifyContent='center' xs={12} height='19vh'>

                            <Grid item xs={3} height='19vh' style={{ textAlign: 'center', backgroundImage: `url(${Leftbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>
                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='black' style={{ marginTop: '2.5vh' }}>
                                    <img src={Silverpuzzle} alt="gameicon" width="50%" /><br /> <b>{BattleMode[0].MaxPrize}</b><br /><img src={Grandprize} alt='' />
                                </Typography>
                            </Grid>
                            <Grid item xs={8} height='19vh' >
                                <Typography variant="h4" component="div" style={{
                                    position: 'absolute',
                                    right: 30,
                                    marginTop: 10
                                }} color='white'>
                                    {BattleMode[0].player}/50
                                </Typography>
                                <Typography variant="h6" component="div" style={{
                                    position: 'absolute',
                                    right: 30,
                                    marginTop: 40
                                }} color='white'>
                                    players
                                </Typography>
                                <Typography style={{
                                    position: 'absolute',
                                    right: 60,
                                    fontSize: 20,
                                    marginTop: 90
                                }} color='white'>
                                    <b> Entry fee:{BattleMode[0].entryFee}<img src={Silverpuzzle} alt="icon" width="15%" style={{ position: 'relative', top: 4 }} /></b>
                                </Typography>
                                <Button style={{
                                    position: 'absolute',
                                    right: 0,
                                    marginTop: 90

                                }}>
                                    <Popup
                                        trigger={
                                            <div className="button">
                                                <div onClick={this.handleClick}>
                                                    <img src={Forward} alt='' zIndex='1' width="60%" style={{
                                                        position: 'relative',
                                                        zIndex: 0,
                                                        left: "25%",
                                                        bottom: 8
                                                    }} />
                                                </div>
                                            </div>

                                        }
                                        modal
                                        lockScroll
                                        onClose={this.handleClick}
                                        closeOnDocumentClick={false}
                                        nested
                                        {...{ contentStyle }}
                                    >
                                        {close => (
                                            <div className="modal">
                                                <button className="close" onClick={close}>

                                                </button>
                                                <Grid xs={12} >
                                                    Game Content
                                                </Grid>
                                            </div>
                                        )}
                                    </Popup>
                                </Button>
                                <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${BattleMode[0].id}/BattleModeJoin`}><img src={Rightbg} width="100%" height='100%' /></Link>

                            </Grid>

                        </Grid>
                        <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit style={{ width: "100%" }}>
                            {BattleMode.filter(content => content.id > 0).map((content) => (
                                <>
                                    <Grid item xs={12} marginTop="5vh">
                                    </Grid>

                                    <Grid item container
                                        direction="row"
                                        justifyContent='center' xs={12} height='19vh'>

                                        <Grid item xs={3} height='19vh' style={{ textAlign: 'center', backgroundImage: `url(${Leftbg})`, backgroundSize: '100% 100%', backgroundAttachment: 'initial' }}>
                                            <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='black' style={{ marginTop: '2.5vh' }}>
                                                <img src={Silverpuzzle} alt="gameicon" width="50%" /><br /> <b>{content.MaxPrize}</b><br /><img src={Grandprize} alt='' />
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} height='19vh' >
                                            <Typography variant="h4" component="div" style={{
                                                position: 'absolute',
                                                right: 30,
                                                marginTop: 10
                                            }} color='white'>
                                                {content.player}/50
                                            </Typography>
                                            <Typography variant="h6" component="div" style={{
                                                position: 'absolute',
                                                right: 30,
                                                marginTop: 40
                                            }} color='white'>
                                                players
                                            </Typography>
                                            <Typography style={{
                                                position: 'absolute',
                                                right: 60,
                                                fontSize: 20,
                                                marginTop: 90
                                            }} color='white'>
                                                <b> Entry fee:{content.entryFee}<img src={Silverpuzzle} alt="icon" width="15%" style={{ position: 'relative', top: 4 }} /></b>
                                            </Typography>
                                            <Button style={{
                                                position: 'absolute',
                                                right: 0,
                                                marginTop: 90

                                            }}>
                                                <Popup
                                                    trigger={
                                                        <div className="button">
                                                            <div onClick={this.handleClick}>
                                                                <img src={Forward} alt='' zIndex='1' width="60%" style={{
                                                                    position: 'relative',
                                                                    zIndex: 0,
                                                                    left: "25%",
                                                                    bottom: 8
                                                                }} />
                                                            </div>
                                                        </div>

                                                    }
                                                    modal
                                                    lockScroll
                                                    onClose={this.handleClick}
                                                    closeOnDocumentClick={false}
                                                    nested
                                                    {...{ contentStyle }}
                                                >
                                                    {close => (
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>

                                                            </button>
                                                            <Grid xs={12} >
                                                                Game Content
                                                            </Grid>
                                                        </div>
                                                    )}
                                                </Popup>
                                            </Button>
                                            <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}/${content.id}/BattleModeJoin`}><img src={Rightbg} width="100%" height='100%' /></Link>

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
                                <img src={Down} alt="" width="50%" />
                            </ExpandMore>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid container xs={12} style={{ textAlign: 'center' }}>
                        <EndBar />
                    </Grid>


                    <Grid item xs={12} style={{ height: "27vh" }} />
            </Box>


        );
    }
}