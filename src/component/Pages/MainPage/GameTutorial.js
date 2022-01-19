import React, { Component } from "react";
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Hamburgicon from "../../../svgicon/Componenticon/Hamburgicon.svg";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import back from '../../../svgicon/Componenticon/Back.svg'
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import coderedeem from '../../../coderedeem.svg'
import TextField from '@mui/material/TextField';
import Close from '../../../svgicon/Componenticon/Close.svg'
import Logout from '../../../logout.svg'
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./styles.css"
import database from '../../database'
const { GameTutorialdata,Toplinkdata,Bottomlinkdata } = database;
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

                                  
                                </AppBar>
                            </Box>
                        </React.Fragment>
                        <Toolbar />
                    </Grid>
                    <Grid container item xs={12} justifyContent='center' style={{ paddingTop: '2vh' }} >
                        <Grid item xs={11}><Typography color="white" variant="h6" >Puzzle chase</Typography></Grid>
                        {GameTutorialdata.map((video) => (

                            <Grid item xs={11} key={video.id} height="50vh">
                                <div className="video-responsive">

                                    <Typography color="white">{video.name}</Typography>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.embedId}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>

                                <Typography color="white"> detail</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box >

        )
    }


}