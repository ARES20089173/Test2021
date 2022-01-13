import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import IconButton from '@mui/material/IconButton';
import backgroundEnd from "../../../reed_bg.svg"
import Typography from '@mui/material/Typography';
import Rmoney from '../../../svgicon/Componenticon/Rmoneyicon.svg';
import Fab from '@mui/material/Fab';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import chasepuzzle from '../../../svgicon/Missionicon/Dailymission.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
import BattleRank from '../../../svgicon/Historyicon/BattleRank.svg';
import Bookmark from '../../../svgicon/Historyicon/Bookmark.svg';
import AddFriend from '../../../svgicon/Historyicon/AddFriend.svg';
import HisNavigationBar from './WithBackHisNavbar';
import Wishlist from '../../../svgicon/Historyicon/Wishlist.svg';
import ItemBlock from '../../../svgicon/Historyicon/ItemBlock.svg';
import Collection from '../../../svgicon/Historyicon/Collection.svg';

import Headicon from '../../../face_1.svg'
import background from '../../../svgicon/Historyicon/BattleDetailnav.svg'
import Gicon1 from '../../../svgicon/GameIcon/Gicon1.svg'
import Gicon2 from '../../../svgicon/GameIcon/Gicon2.svg'
import Gicon3 from '../../../svgicon/GameIcon/Gicon3.svg'
import Gicon4 from '../../../svgicon/GameIcon/Gicon4.svg'
import Gicon5 from '../../../svgicon/GameIcon/Gicon5.svg'
import Gicon6 from '../../../svgicon/GameIcon/Gicon6.svg'
import Gicon7 from '../../../svgicon/GameIcon/Gicon7.svg'
import Gicon8 from '../../../svgicon/GameIcon/Gicon8.svg'
import Gicon9 from '../../../svgicon/GameIcon/Gicon9.svg'
const endbartype='History'
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false, isToggleOn: true, isOpen: false };
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
        const data = [
            { id: 0, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, select: '', icon: Gicon1, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "50", unit: Rmoney, min: 15, max: 50, year: 23 },
            { id: 1, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, icon: Gicon2, addorReduce: "+", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'WoW', year: 23 },
            { id: 2, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, icon: Gicon3, addorReduce: "-", slash: '/', Mode: 'Rank', quality: "50", unit: Rmoney, min: 13, max: 50, year: 23 },
            { id: 1, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, icon: Gicon4, addorReduce: "-", slash: '', Mode: '', quality: "50", unit: Rmoney, min: '', max: 'U Win', year: 23 },
            { id: 2, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, icon: Gicon5, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "150", unit: Rmoney, min: 16, max: 50, year: 23 },
            { id: 1, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, icon: Gicon6, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "5500", unit: Rmoney, min: 17, max: 50, year: 23 },
            { id: 2, linkName: "Chase Puzzles", linkMODE: `BattleModeDetail`, icon: Gicon7, addorReduce: "+", slash: '/', Mode: 'Rank', quality: "1750", unit: Rmoney, min: 18, max: 50, year: 23 },
            { id: 3, linkName: "Silver Puzzles", linkMODE: `BattleModeDetail`, icon: Gicon8, addorReduce: "-", slash: '/', Mode: 'Rank', quality: "3750", unit: Rmoney, min: 15, max: 50, year: 23 }]



        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: 'auto auto', backgroundAttachment: 'fixed' }}>
                    <HisNavigationBar />
                    <Grid container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                    >
                        <Grid container xs={12} height="4vh" bgcolor='#8e8b91' justifyContent='center' alignItems='center' >
                            <Typography variant="body2" textAlign='center'>
                                Other Players' Info
                            </Typography>
                        </Grid>
                        <Grid xs={12} container justifyContent='center' alignItems="center" height="30vh" style={{ marginTop: '2vh', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundAttachment: 'cover' }}>
                            <Grid container xs={12} height="30vh" >
                                <Grid container xs={6} justifyContent='center' alignItems="center"  height="25vh">
                                    <img src={Headicon} alt='' width="70%" />
                                </Grid>
                                <Grid container xs={6} justifyContent='center' alignItems="center"height="25vh">
                                    <Grid container xs={12} justifyContent='center' alignItems="center"  height="12.5vh">XXXXXXXX<br />Rees ID:xxxx</Grid>
                                    <Grid container xs={12} justifyContent='center' alignItems="center"  height="12.5vh">
                                        <Grid container xs={12} justifyContent='center' alignItems="center"  height="50%">
                                            <img src={Bookmark} alt='' width="85%" />
                                        </Grid>
                                        <Grid container xs={12} justifyContent='center' alignItems="center"  height="50%">
                                            <img src={AddFriend} alt='' width="85%" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justifyContent='center' alignItems="center" height="20vh">
                            <Grid container xs={12} height="30vh" >
                                <Grid container xs={12} justifyContent='center' alignItems="center"  height="15vh">
                                    <Grid xs={12} height="3vh" style={{ marginBottom: '1vh' }}>   <img src={Collection} alt='' width="40%" /></Grid>
                                    <Grid xs={12} container justifyContent='center' alignItems="center" height="12vh" >
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh" >  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh">  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh">  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh">  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                    </Grid>
                                </Grid>

                                 <Grid container xs={12} justifyContent='center' alignItems="center" height="15vh">
                                    <Grid xs={12} height="3vh" style={{ marginBottom: '1vh' }}>   <img src={Wishlist} alt='' width="30%" /></Grid>
                                    <Grid xs={12} container justifyContent='center' alignItems="center" height="12vh" >
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh" >  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh">  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh">  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                        <Grid xs={3} container justifyContent='center' alignItems="center" height="11vh">  <img src={ItemBlock} alt='' width="75%" /></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
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