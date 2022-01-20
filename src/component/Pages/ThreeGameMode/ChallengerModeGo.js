import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import backgroundEnd from "../../../reed_bg.svg"
import Forward from '../../../svgicon/Componenticon/Forward.svg'
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import IconButton from '@mui/material/IconButton';
import PoweredByR from '../../../svgicon/PowerBy/PowerByR.svg'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import ChallengModeButtonbg from '../../../svgicon/Background/ChallengModeButton.svg'
import back from '../../../svgicon/Componenticon/Back.svg'
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
import database from '../../database'
const { Toplinkdata, Bottomlinkdata, MultiGameChoosedata, GameTutorialdata, ChallengerMode, ScoreData } = database;

const contentStyle = {
    background: '#242623',
    width: "98%",
    height: "90%",
    borderRadius: "5%",
};

const endbartype = 'Play'
export default class TournamentLobby extends Component {
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
    render() {
        const { selectedOption } = this.state;

        const Mode = GameTutorialdata
        const data = MultiGameChoosedata
        

        const options = [
            {
                value: ChallengerMode[0].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[0].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[1].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[1].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[2].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[2].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[3].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[3].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[4].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[4].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[5].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[5].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[6].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee: {ChallengerMode[6].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[7].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[7].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
            },
            {
                value: ChallengerMode[8].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee:{ChallengerMode[8].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography>
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
                                                        <div className="button" >
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
                                                    onClose={this.handleClick}
                                                    closeOnDocumentClick={false}
                                                    nested
                                                    onClick={this.handleClick}
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
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[1].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[1].Puzzle}</Typography>
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
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[2].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[2].Puzzle}</Typography>
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
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[3].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[3].Puzzle}</Typography>
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
                                            <Typography variant="caption" color="black" style={{ overflowWrap: 'break-word' }} display="inline" margin="0" >Score:{ScoreData[4].Score}</Typography><br />
                                            <Typography variant="caption" color="black">Puzzle: {ScoreData[4].Puzzle}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} style={{ textAlign: 'center' }}></Grid>
                            </Grid>
                            <Grid item xs={3} height="5vh" />
                            <Grid item xs={7} height="5vh" style={{ textAlign: 'center', position: 'relative', zindex: 2, }} >

                                <Typography variant="h6" style={{ textAlign: 'center', position: 'relative', zindex: 2, }} >
                                    <Select
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        options={options}
                                        isSearchable={false}
                                        defaultValue={{ value: ChallengerMode[this.props.match.params.entryid].entryFee, label: <Typography variant="body1" style={{ backgroundImage: `url(${ChallengModeButtonbg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}> entry fee: {ChallengerMode[this.props.match.params.entryid].entryFee}<img src={Chasepuzzle} alt="icon" width="15%" /></Typography> }}
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
                        <EndBar endbartype={endbartype} />

                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        height="35vh"
                    >
                    </Grid>
                </Grid>
            </Box >
        )
    }
}