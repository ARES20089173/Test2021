import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EndBar from '../../../component/framework/endbarWithback';
import { Link } from 'react-router-dom';
import "../../framework/css/cssModFLooby.css"
import backgroundEnd from "../../../reed_bg.svg"
import Typography from '@mui/material/Typography';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HisNavigationBar from './HisNavigation';
import database from '../../database'

const { MatchHistorydata} = database;
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
        const data2 = MatchHistorydata.map((text) => {
            if (text.id % 2 === 0) {
                return <Link to={`/History/${text.id}/${text.linkMODE}`} style={{ textDecoration: 'none', color: 'white' }}>
                    <Grid xs={12} container1 alignItems="center" >

                        <ListItem button key={text.id} style={{ backgroundColor: '#242634' }}>
                            <Grid xs={7} container alignItems="center" >
                                <ListItemText  >
                                    <Grid xs={12} container alignItems="center" ><img src={text.icon} alt="" width="16%" style={{ marginRight: '1vh' }} />  <Typography variant="caption">{text.addorReduce} {text.quality} </Typography> <img src={text.linkName} alt='' width='8%' /></Grid>
                                </ListItemText>
                            </Grid>
                            <Grid xs={5} container >
                                <Grid xs={4.5} container justifyContent='center' alignItems='center' style={{  marginRight: '4px' }}  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}><Typography variant='body2'>{text.date}</Typography></Typography >
                                </Grid>
                                <Grid xs={7} container justifyContent='center' alignItems='center'  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}> {text.Mode} <Typography variant='body2'>{text.min}{text.slash}{text.max}</Typography></Typography >
                                </Grid>

                            </Grid>
                        </ListItem>
                    </Grid>
                </Link>
            }
            else {
                return <Link to={`/History/${text.id}/${text.linkMODE}`} style={{ textDecoration: 'none', color: 'white' }}>
                    <Grid xs={12} container1 alignItems="center" >

                        <ListItem button key={text.id} style={{ backgroundColor: '#35394C' }}>
                            <Grid xs={7} container alignItems="center" >

                                <ListItemText  >
                                    <Grid xs={12} container alignItems="center" ><img src={text.icon} alt="" width="16%" style={{ marginRight: '1vh' }} />  <Typography variant="caption">{text.addorReduce} {text.quality} </Typography><img src={text.linkName} alt='' width='8%' /></Grid>
                                </ListItemText>
                            </Grid>
                            <Grid xs={5} container >
                                <Grid xs={4.5} container justifyContent='center' alignItems='center' style={{ marginRight: '4px' }}  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}><Typography variant='body2'>{text.date}</Typography></Typography >
                                </Grid>
                                <Grid xs={7} container justifyContent='center' alignItems='center'  >
                                    <Typography variant='caption' style={{ textAlign: 'center' }}> {text.Mode} <Typography variant='body2'>{text.min}{text.slash}{text.max}</Typography></Typography >
                                </Grid>

                            </Grid>
                        </ListItem>
                    </Grid>
                </Link>
            }
        })

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
                            <Typography variant="body2" textAlign='center'>      &gt;&gt;&gt;&gt;&gt;  Click to Check Results Detail
                                &gt;&gt;&gt;&gt;&gt;
                            </Typography>
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