import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';
import backgroundEnd from "../../../reed_bg.svg"
import Logout from '../../../logout.svg'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Close from '../../../svgicon/Componenticon/Close.svg'
import Hamburgicon from "../../../svgicon/Componenticon/Hamburgicon.svg";
import Button from '@mui/material/Button';
import Rmoney from '../../../svgicon/Componenticon/Rmoneyicon.svg';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Dayilymission from '../../../svgicon/Missionicon/Dailymission.svg'
import Game from '../../../svgicon/Missionicon/Game.svg'
import Image from '../../../svgicon/Missionicon/Image.svg'
import Watch from '../../../svgicon/Missionicon/Watch.svg'


const userdata = [
    { id: 0, level: 'Lv1', ReesID: 1, nickname: 'Jay' },
]

const Toplinkdata = [
    { id: 0, linkName: "PROFILE", link: `/${userdata[0].ReesID}/Profile` },
    { id: 1, linkName: "SETTING", link: `/${userdata[0].ReesID}/Setting` },
    { id: 2, linkName: "EVENTS", link: "/Events" },
    { id: 3, linkName: "BUY PUZZLES", link: "/" },
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
const endbartype='Mission'
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false, isToggleOn: true, isOpen: false };
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleExpandClick2 = this.handleExpandClick2.bind(this);
        this.handleExpandClick3 = this.handleExpandClick3.bind(this);
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
        const data = [
            { id: 0, linkName: "Win 5 times in Battlemode", link: `/MissionMain`, icon: Dayilymission, price: 50, quality: "50(+0)", unit: Rmoney, remain: 1, max: 10 },
            { id: 1, linkName: "Download New games", link: `/MissionMain`, icon: Dayilymission, price: 150, quality: "50(+0)", unit: Rmoney, remain: 2, max: 10 },
            { id: 2, linkName: "Daily Play 10 games", link: "/MissionMain", icon: Dayilymission, price: 250, quality: "50(+0)", unit: Rmoney, remain: 1, max: 5 },
            { id: 1, linkName: "Win 5 times in Battlemode", link: `/MissionMain`, icon: Image, price: 350, quality: "50(+0)", unit: Rmoney, remain: 1, max: 10 },
            { id: 2, linkName: "Dialy Sign in", link: `/MissionMain`, icon: Dayilymission, price: 450, quality: "150(+60)", unit: Rmoney, remain: 1, max: 10 },
            { id: 1, linkName: "watch NIKE video", link: `/MissionMain`, icon: Watch, price: 550, quality: "550(+400)", unit: Rmoney, remain: 3, max: 10 },
            { id: 2, linkName: "Play SMC game", link: `/MissionMain`, icon: Game, price: 650, quality: "1750(+550)", unit: Rmoney, remain: 1, max: 10 },
            { id: 3, linkName: "Play SMC game", link: `/MissionMain`, icon: Game, price: 1750, quality: "3750(+950)", unit: Rmoney, remain: 1, max: 10 }]

        const data2 = data.map((text) => {
            if (text.id % 2 === 0) {
                return <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                    <ListItem button key={text.id} style={{ backgroundColor: '#242634' }}>
                        <ListItemText  >
                            <Grid xs={12} container alignItems="center" ><img src={text.icon} alt="" width="16%" />  <Typography variant="caption" style={{ marginLeft: '1vh' }}>{text.linkName}</Typography></Grid>
                        </ListItemText>
                        <Typography>
                            <Button variant='outlined' style={{ borderColor: 'white', minWidth: '100px', maxWidth: '100px' }}>
                                <Typography variant="body1" color='white'>
                                    {text.price}<img src={text.unit} alt="" width="40%" style={{ position: 'relative', top: 6, left: 3 }} />
                                </Typography>
                            </Button>
                            <Typography variant="body2" color='white' align='center'>
                                left {text.remain}/{text.max}
                            </Typography>
                        </Typography>

                    </ListItem>
                </Link >
            }
            else {
                return <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                    <ListItem button key={text.id} style={{ backgroundColor: '#35394C' }}>
                        <ListItemText  >
                            <Grid xs={12} container alignItems="center" ><img src={text.icon} alt="" width="16%" />  <Typography variant="caption" style={{ marginLeft: '1vh' }}>{text.linkName}</Typography></Grid>
                        </ListItemText>
                        <Typography>
                            <Button variant='outlined' style={{ borderColor: 'white', minWidth: '100px', maxWidth: '100px' }}>
                                <Typography variant="body1" color='white'>
                                    {text.price}<img src={text.unit} alt="" width="40%" style={{ position: 'relative', top: 6, left: 3 }} />
                                </Typography>
                            </Button>

                            <Typography variant="body2" color='white' align='center'>
                                left {text.remain}/{text.max}
                            </Typography>
                        </Typography>
                    </ListItem>
                </Link>
            }
        })
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                    <Grid xs={12}  >
                        <React.Fragment>
                            <Box sx={{ flexGrow: 1, }}>
                                <CssBaseline />
                                <AppBar position={this.state.isToggleOn ? 'fixed' : 'relative'} align='center' sx={{ top: 0, bottom: 'auto' }} style={{ backgroundColor: '#242634' }}>
                                    <Toolbar  >
                                        <Typography variant="h6" component="div" color='primary'>
                                        </Typography>
                                        <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                            MISSION
                                            {/* {BattleModeItem} */}
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
                                                sx={{ width: 280, height: "100%", backgroundColor: "#242634", overflow: "scroll" }}
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
                                                    <List style={{ top: "10%", textDecoration: 'none', color: 'white' }} >
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

                                                </List>
                                            </Box>
                                        </Drawer>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </React.Fragment>
                        <Toolbar />
                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                    >
                        <Grid item xs={12} height="4vh" bgcolor='#8e8b91' >
                            <Typography variant="body2" textAlign='center'>WATCH AD TO EARN TOKENS & PUZZLES</Typography>
                        </Grid>
                        <Grid item xs={12} bgcolor='#8e8b91' >
                            {data2}
                        </Grid>
                        <Grid item xs={12} marginTop="10vh" display={this.state.isToggleOn ? 'block' : 'none'}>
                        <EndBar endbartype={endbartype}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        );
    }
}