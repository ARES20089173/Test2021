import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
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
    left: "32%",
    bottom: "5vh"

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
        this.state = { isToggleOn: true };
        this.Mode = 1;

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.openhandleClick = this.openhandleClick.bind(this);
        //     this.oneVoneModehandleClick = this.oneVoneModehandleClick.bind(this);
        //     this.challengerModehandleClick = this.challengerModehandleClick.bind(this);
        //     this.BattleModehandleClick = this.BattleModehandleClick.bind(this);
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} color='primary'>
                                    {CurrentPlayer}/50
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container style={{ border: "1px solid grey", textAlign: 'left', overflow: 'scroll' }} justifyContent="left" alignItems="center" height="28vh">

                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={1} color="secondary"><img src={HeadsvgData[1].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={2} color="secondary"><img src={HeadsvgData[2].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={3} color="secondary"><img src={HeadsvgData[3].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={2.8} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={4} color="secondary"><img src={HeadsvgData[4].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            <Grid item xs={8.4} container>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={5} color="secondary"><img src={HeadsvgData[5].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={6} color="secondary"><img src={HeadsvgData[6].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={7} color="secondary"><img src={HeadsvgData[7].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={8} color="secondary"><img src={HeadsvgData[8].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} ><StyledBadge badgeContent={9} color="secondary"><img src={HeadsvgData[9].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                                <Grid item xs={4} height="15vh" style={{ border: "1px solid grey", textAlign: 'center' }} > <StyledBadge badgeContent={10} color="secondary"><img src={HeadsvgData[10].Headsvg} alt="Headicon" width="85%" /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography></Grid>
                            </Grid>
                            <Grid item xs={3.6} container alignItems='center' justifyContent='center'  >
                                <Grid item xs={12} height="30vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                                    <img src={HeadsvgData[0].Headsvg} alt="Headicon" width="65%" /><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline">XXXXXX</Typography><Typography>xxxxxxx<img src={puzzle} width="20%" /></Typography>
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
                            <Typography variant="h6">Free!</Typography>
                        </Grid>
                        <Grid item xs={4.5} height="9vh" style={{ border: "1px solid grey", textAlign: 'center' }} >
                            <Typography variant="body1"> entry fee</Typography>
                            <Typography variant="h6">{BattleMode[this.props.match.params.entryid].entryFee}<img src={puzzle} alt="icon" width="15%"/>

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