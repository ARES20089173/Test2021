import React, { Component } from "react";
import backgroundEnd from "../../../svgicon/Background/Gametutorial.svg"
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Hamburgicon from "../../../svgicon/Componenticon/Hamburgicon.svg";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import back from '../../../svgicon/Componenticon/Back.svg'
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';
import Logout from '../../../logout.svg'
import puzzle from "../../../puzzle.svg"
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./styles.css"
const StyledFab = styled(Fab)({
    position: 'fixed',
    zIndex: 3,
    top: "75vh",
    left: 0,

});

const userdata = [
    { id: 0, level: 'Lv1', ReesID: 1,nickname:'Jay' },
  ]

const Toplinkdata = [
    { id: 0, linkName: "PROFILE", link: `/${userdata[0].ReesID}/Profile` },
    { id: 1, linkName: "SETTING", link: `/${userdata[0].ReesID}/Setting` },
    { id: 2, linkName: "EVENTS", link: "/Events" },
    { id: 3, linkName: "BUY PUZZLES", link: "/" }
    // { id: 5, linkName:"PROFILE"},
    // { id: 6, linkName:"PROFILE"},
    // { id: 7, linkName:"PROFILE"},
    // { id: 8, linkName:"PROFILE"},
  ]
  const Bottomlinkdata = [
    { id: 0, linkName: "About REES", link: "/" },
    { id: 1, linkName: "FAQ", link: "/" },
    { id: 2, linkName: "PRESS", link: "/" },
    { id: 3, linkName: "LOGOUT", link: "/" },
  ]
export default class GameTutorial extends Component {
     constructor(props) {
        super(props);
        this.state = {  isOpen: false };
        this.openhandleClick = this.openhandleClick.bind(this);
    }
    openhandleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
    render() {

        const data = [
            { id: 0, embedId: "rokGy0huYEA", name: "PAID TO PLAY&EARN/CHALLENGER MODE", detail: "CHALLENGER MODE is ......." },
            { id: 1, embedId: "dWOm9KXJQLo", name: "PAID TO PLAY&EARN/Battle MODE", detail: "Battle MODE is ......." },
            { id: 2, embedId: "7HP8X7dadmM", name: "PAID TO PLAY&EARN/1 ON 1 MODE", detail: "1 ON 1 MODE is ......." },
        ];
        return (

            <Box sx={{ flexGrow: 1 }} bgcolor="#242634">
            
                <Link to='/'>
                    <img src={HomeIcon} alt='' width="15%" style={{
                        position: 'fixed',
                        zIndex: 3,
                        top: "72vh",
                        left: 0,
                    }} />
                </Link>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Grid item xs={12} >
                        <React.Fragment>
                            <Box sx={{ flexGrow: 1 }}>
                                <CssBaseline />
                                <AppBar position="fixed" align='center' sx={{ top: 0, backgroundColor: "#242634" }}>
                                    <Toolbar>
                                        <Typography variant="h6" component="div" sx={{}}>
                                            <Link to={`/`}>
                                                <img src={back} alt='' width="40%" style={{
                                                    position: 'relative',
                                                    zIndex: 3,
                                                    top: 5,
                                                    left: "-40%",
                                                }} />
                                            </Link>
                                        </Typography>
                                        <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-10%",
                                        }}>
                                            CHOOSE YOUR FAVORITE MODE
                                        </Typography>
                                        <IconButton
                                            size="small"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"

                                            onClick={this.openhandleClick}
                                            sx={{}}
                                        >
                                            <img src={Hamburgicon} alt="" width="300%" style={{
                                                position: 'absolute',

                                                left: 0,
                                                margin: '0 0%',
                                            }} />
                                        </IconButton>
                                        <Drawer
                                        anchor={"right"}
                                        open={this.state.isOpen}
                                        onClose={this.openhandleClick}
                                    >
                                        <Box
                                            sx={{ width: 280, height: "100vh", backgroundColor: "#707070" }}
                                            role="presentation"
                                        >
                                            <List sx={{height: "50%"}} >

                                                <IconButton
                                                    size="large"
                                                    edge="start"
                                                    color="inherit"
                                                    aria-label="menu"
                                                    onClick={this.openhandleClick}
                                                    sx={{ left: "80%", bottom: 0 }}
                                                >
                                                    <img src={Hamburgicon} alt="" width="80%" />
                                                </IconButton>
                                                <ListItemText style={{ textAlign: "center" }}  >Play to Earn PUZZLES<img src={puzzle} /></ListItemText>

                                                {Toplinkdata.map((text, index) => (
                                                    <Link to={text.link} style={{ textDecoration: 'none', color: 'black' }}>
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
                                                        <Box sx={{ display: 'flex', alignItems: 'flex-end', fontSize: '0.7em' }}>

                                                            CODE REDEEM :
                                                            <TextField id="input-with-sx" variant="standard" />

                                                            <img src={coderedeem} alt="coderedeem" />
                                                        </Box>
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                            <List style={{ top: "10%", textDecoration: 'none', color: '#FFF' }} sx={{height: "40%"}} >
                                                {Bottomlinkdata.slice(0, 3).map((text, index) => (
                                                    <ListItem button key={text.id}>
                                                        <ListItemText >
                                                            <Link to={text.link} style={{ textDecoration: 'none', color: 'black' }}>{text.linkName}  </Link>
                                                        </ListItemText>
                                                    </ListItem>
                                                ))}
                                                <ListItem >
                                                    <ListItemText >
                                                        <Link to={Bottomlinkdata[3].link} style={{ textDecoration: 'none', color: 'black' }}>{Bottomlinkdata[3].linkName}   <img src={Logout} alt="logout" /></Link>
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Drawer>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </React.Fragment>
                        <Toolbar />
                    </Grid>
                    <Grid container item xs={12} justifyContent='center' style={{ paddingTop: '2vh' }} >
                        <Grid item xs={11}><Typography color="primary" variant="h6" >Puzzle chase</Typography></Grid>
                        {data.map((video) => (

                            <Grid item xs={11} key={video.id} height="50vh">
                                <div className="video-responsive">

                                    <Typography color="primary">{video.name}</Typography>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.embedId}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>

                                <Typography color="primary"> detail</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box >

        )
    }


}