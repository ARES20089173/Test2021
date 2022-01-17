import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
import "../../framework/css/cssModFLooby.css"
import backgroundEnd from "../../../reed_bg.svg"
import Typography from '@mui/material/Typography';
import Bookmark from '../../../svgicon/Historyicon/Bookmark.svg';
import AddFriend from '../../../svgicon/Historyicon/AddFriend.svg';
import HisNavigationBar from './WithBackHisNavbar';
import Wishlist from '../../../svgicon/Historyicon/Wishlist.svg';
import ItemBlock from '../../../svgicon/Historyicon/ItemBlock.svg';
import Collection from '../../../svgicon/Historyicon/Collection.svg';
import Headicon from '../../../face_1.svg'
import background from '../../../svgicon/Historyicon/BattleDetailnav.svg'
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