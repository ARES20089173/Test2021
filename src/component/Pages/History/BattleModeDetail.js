import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import backgroundEnd from "../../../reed_bg.svg"
import Typography from '@mui/material/Typography';
import HisNavigationBar from './WithBackHisNavbar';
import Badge from '@mui/material/Badge'
import Chasepuzzle from "../../../svgicon/Componenticon/Chasepuzzle.svg"
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
import Headicon from '../../../face_1.svg'
import Gicon1 from '../../../svgicon/GameIcon/Gicon1.svg'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 13,
        top: 15,
        backgroundImage: `url(${Badge1})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover',
        padding: '0px 0px',
        backgroundColor: 'transparent'
    },
}));

const endbartype='History'
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false, isToggleOn: true, isOpen: false };
        this.handleClick = this.handleClick.bind(this);
        this.openhandleClick = this.openhandleClick.bind(this);
        this.handleOuser1 = this.handleOuser1.bind(this);

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
    handleOuser1() {
        let path = `/History/${this.props.match.params.id}/BattleModeDetail/${this.props.match.params.id}/otherinfo`;
        this.props.history.push(path);
    }
    render() {

    let ids = this.props.match.params.id
        const HeadsvgData = [
            { id: 0, Headsvg: Headicon },
            { id: 1, Headsvg: Headicon ,link:`/History/${ids}/BattleModeDetail/${ids}/otherinfo`},
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
                                BATTLE MODE
                            </Typography>
                        </Grid>
                        <Grid container xs={12} height="40vh" justifyContent='center' alignItems='center' >
                            <Typography variant="body1" textAlign='center' color="white" >
                                2048<br />
                                Battle Mode<br />
                                <img src={Gicon1} alt='' width="40%" /><br />
                                Your score:XX<br />
                                Your ranking:xx<br />
                                puzzles REWARDS:xxx
                            </Typography>
                        </Grid>
                        <Grid item xs={11.5} height="50vh"  >
                            <Grid xs={12} container style={{  textAlign: 'left' }} justifyContent="left" alignItems="center" >
                                <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[1].link} style={{ textDecoration: 'none' }} ><StyledBadge badgeContent={<img src={Badge1} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[1].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt='' width="20%" /></Typography></Link></Grid>
                                <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[2].link}  style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge2} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[2].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt=''width="20%" /></Typography></Link></Grid>
                                <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[3].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge3} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[3].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt='' width="20%" /></Typography></Link></Grid>
                                <Grid item xs={2.8} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[4].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge4} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[4].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt=''width="20%" /></Typography></Link></Grid>
                                <Grid item xs={8.4} container alignItems='center' justifyContent='center' >
                                    <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[5].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge5} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[5].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt=''width="20%" /></Typography></Link></Grid>
                                    <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[6].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge6} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[6].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt=''width="20%" /></Typography></Link></Grid>
                                    <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[7].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge7} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[7].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt=''width="20%" /></Typography></Link></Grid>
                                    <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[8].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge8} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[8].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt=''width="20%" /></Typography></Link></Grid>
                                    <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[9].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge9} alt='' width="20-%" />} color="secondary"><img src={HeadsvgData[9].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt=''width="20%" /></Typography></Link></Grid>
                                    <Grid item xs={4} height="19vh" style={{ textAlign: 'center' }} ><Link to={HeadsvgData[10].link} style={{ textDecoration: 'none' }}><StyledBadge badgeContent={<img src={Badge10} alt='' width="22-%" />} color="secondary"><img src={HeadsvgData[10].Headsvg} alt="Headicon" width="85%" style={{ position: 'relative', left: 5 }} /></StyledBadge><Typography variant="body1" height="0vh" style={{ overflowWrap: 'break-word' }} display="inline" color='white' noWrap>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt='' width="20%" /></Typography></Link></Grid>
                                </Grid>
                                <Grid item xs={3.6} container alignItems='center' justifyContent='center'  >
                                    <Grid item xs={12} height="38vh" style={{ textAlign: 'center' }} >
                                        <img src={HeadsvgData[0].Headsvg} alt="Headicon" width="85%" /><Link to="#" style={{ textDecoration: 'none' }}><Typography variant="body1" height="0vh" noWrap style={{ overflowWrap: 'break-word' }} display="inline" color='white'>XXXXXX<br />xxxxxxx<img src={Chasepuzzle} alt='' width="20%" /></Typography></Link>
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