import React, { Component } from "react";
import backgroundEnd from "../../../reed_bg.svg"
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PropTypes from "prop-types";
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import EndBar from '../../framework/endbarWithback';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import "./styles.css"
const StyledFab2 = styled(Fab)({
    position: 'relative',
    zIndex: 3,
    top: 0,
    left: "0%",

});
export default class GameTutorial extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const data = [
            { id: 0, embedId: "rokGy0huYEA", name: "PAID TO PLAY&EARN/CHALLENGER MODE", detail:"CHALLENGER MODE is ......." },
            { id: 1, embedId: "dWOm9KXJQLo", name: "PAID TO PLAY&EARN/Battle MODE", detail: "Battle MODE is ......." },
            { id: 2, embedId: "7HP8X7dadmM", name: "PAID TO PLAY&EARN/1 ON 1 MODE", detail:"1 ON 1 MODE is ......."  },
        ];
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid item xs={12}  >
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>


                    <Grid item xs={12} >
                        <React.Fragment>
                            <Box sx={{ flexGrow: 1 }}>
                                <CssBaseline />
                                <AppBar position="fixed" align='center' sx={{ top: 0 }}>
                                    <Toolbar>
                                        <Typography variant="h6" component="div" sx={{}}>
                                            <Link to={`/multigameChooser/tournamentLobby/${this.props.match.params.id}`}>
                                                <StyledFab2 size="small" color="secondary" aria-label="add">
                                                    <ArrowBackIcon />
                                                </StyledFab2>
                                            </Link>
                                        </Typography>
                                        <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                            CHOOSE YOUR FAVORITE MODE
                                        </Typography>
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{}}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </React.Fragment>
                        <Toolbar />
                    </Grid>
                    <Grid container item xs={12} justifyContent='center' style={{ paddingTop: '2vh', backgroundAttachment: 'fixed' }} >
                    <Grid item xs={11}><Typography color="primary" variant="h6" >Puzzle chase</Typography></Grid>
                        {data.map((video) => (

                            <Grid item xs={11} key={video.id} height="45vh">
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
                        <Grid item xs={12} style={{ marginTop: "9vh" }}>
                            <EndBar />
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

        )
    }


}