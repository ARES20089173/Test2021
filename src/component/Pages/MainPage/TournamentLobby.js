import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import EndBar from '../../framework/endbar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import ImgTournamentLobby from '../../framework/imgtournamentlobby';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom"
import puzzle from "../../../puzzle.svg"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
export default class TournamentLobby extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const oneVoneMode = [
            { id: 1, entryFee: 88, MaxPrize: 120 },
            { id: 2, entryFee: 848, MaxPrize: 1200 },
            { id: 3, entryFee: 828, MaxPrize: 1200 },
        ]
        const challengerMode = [
            { id: 1, entryFee: 188, MaxPrize: 120 },
            { id: 2, entryFee: 1848, MaxPrize: 2500 },
            { id: 3, entryFee: 1828, MaxPrize: 3500 },
        ]
        const BattleMode = [
            { id: 1, entryFee: 88, MaxPrize: 3500 },
            { id: 2, entryFee: 848, MaxPrize: 2500 },
            { id: 3, entryFee: 828, MaxPrize: 3550 },
        ]

        const data = [
            { id: 0, src: '/img/square.jpeg', name: "2048", number: 52, entryFee: 88 },
            { id: 1, src: '/img/square1.jpeg', name: "原神", number: 56, entryFee: 848 },
            { id: 2, src: '/img/square2.jpeg', name: "LoL", number: 55, entryFee: 828 },
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
        const backgroundImage = [
            { id: 1, src: '/img/testPic.png' },
            { id: 2, src: '/img/testPic1.png' },
            { id: 3, src: '/img/testPic2.png' },
        ]
        // if(this.props.match.params.id==1){
        //   backgroundImage=[{

        //     }]
        // }
        const StyledFab2 = styled(Fab)({
            position: 'fixed',
            zIndex: 1,
            bottom: "24%",
            left: "0%",

        });
        return (
            <Box sx={{ flexGrow: 1 }}>

                <Grid
                    container
                    direction="row"
                    justifyContent='center'
                >
                    <React.Fragment>
                        <Box sx={{ flexGrow: 1 }}>
                            <CssBaseline />
                            <Toolbar />
                            <Toolbar />
                            <AppBar position="fixed" align='center' sx={{ top: 0 }}>
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{}}>
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

                                <div style={{ backgroundColor: "gray" }}>
                                    <Toolbar>
                                        <Grid item xs={2} sx={{ marginTop: '1vh' }}>
                                            <img src={data[this.props.match.params.id].src} alt="gameicon" width="100%" />

                                        </Grid>
                                        <Grid item xs={6} sx={{ marginTop: '1vh' }}>
                                            <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', marginLeft: '2vh' }}>
                                                {data[this.props.match.params.id].name}
                                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                                                    CHOOSE TOURNAMENT
                                                </Typography>
                                                <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                                                    AND PAID TO PLAY
                                                </Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <IconButton
                                                size="large"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{}}
                                            ><FileDownloadIcon />
                                            </IconButton>
                                            <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                Download/
                                            </Typography>
                                            <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                practice
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <IconButton
                                                size="large"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{}}
                                            ><SportsEsportsIcon />
                                            </IconButton>
                                            <Typography variant="caption" component="div" sx={{ textAlign: 'center' }}>
                                                Game
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
                    <Grid item xs={12} marginTop="5vh" marginLeft="2vh" ></Grid>
                    <Grid item xs={12} marginLeft="2vh" marginTop="4vh">
                        <Typography variant="body2" component="div" sx={{}}>1 ON 1 MODE(?)</Typography>
                    </Grid>

                    {oneVoneMode.map((content) => (
                        <>
                            <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='19vh'>
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }}>
                                    <img src={puzzle} alt="gameicon" width="50%" />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        {content.MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid><Grid item xs={8} height='19vh' style={{ border: "1px solid grey", backgroundImage: `url(${backgroundImage[0].src})`, backgroundSize: '100% 100%' }}>
                                </Grid>
                                <Typography style={{
                                    position: 'absolute',
                                    right: 50,
                                    fontSize: 20,
                                    marginTop: 100
                                }}>
                                    Entry fee:{content.entryFee}<img src={puzzle} alt="puzzleicon" />
                                </Typography>
                                <Button style={{
                                    position: 'absolute',
                                    right: -10,
                                    marginTop: 100

                                }}>
                                    <ImgTournamentLobby />
                                </Button>
                            </Grid></>
                    ))}




                    <Grid item xs={12} marginLeft="2vh" style={{ textAlign: 'center' }}>
                        <KeyboardArrowDownIcon color="success" sx={{ fontSize: 50 }} />
                    </Grid>

                    <Grid item xs={12} marginLeft="2vh">
                        <Typography variant="body2" component="div" sx={{}}>CHALLENGER MODE(?)</Typography>
                    </Grid>
                    {challengerMode.map((content) => (
                        <>
                            <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='19vh'>
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }} >
                                    <img src={puzzle} alt="gameicon" width="65%" style={{ marginTop: '2vh' }} />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        {content.MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>

                                <Grid item xs={8} style={{ border: "1px solid grey", backgroundImage: `url(${backgroundImage[1].src})`, backgroundSize: '100% 100%' }} >
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 50,
                                        fontSize: 20,
                                        marginTop: 100
                                    }}>
                                        Entry fee:{content.entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>
                                    <Button style={{
                                        position: 'absolute',
                                        right: -10,
                                        marginTop: 100

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    ))}


                    <Grid item xs={12} marginLeft="2vh" style={{ textAlign: 'center' }}>
                        <KeyboardArrowDownIcon color="success" sx={{ fontSize: 50 }} />
                    </Grid>

                    <Grid item xs={12} marginLeft="2vh">
                                    <Typography variant="body2" component="div" sx={{}}>BATTLE MODE(?)</Typography>
                                </Grid>
                    {BattleMode.map((content) => (
                        <>
                            <Grid item xs={12} marginTop="3vh">
                            </Grid>
                            
                            <Grid item container
                                direction="row"
                                justifyContent='center' xs={12} height='19vh'>
                              
                                <Grid item xs={3} style={{ border: "1px solid grey", textAlign: 'center' }} >
                                    <img src={puzzle} alt="gameicon" width="65%" style={{ marginTop: '2vh' }} />
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        {content.MaxPrize}
                                    </Typography>
                                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        GRAND GRADE PRIZE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} style={{ border: "1px solid grey", backgroundImage: `url(${backgroundImage[2].src})`, backgroundSize: '100% 100%' }} >
                                    <Typography style={{
                                        position: 'absolute',
                                        right: 50,
                                        fontSize: 20,
                                        marginTop: 100
                                    }}>
                                        Entry fee:{content.entryFee}<img src={puzzle} alt="puzzleicon" />
                                    </Typography>
                                    <Button style={{
                                        position: 'absolute',
                                        right: -10,
                                        marginTop: 100

                                    }}>
                                        <ImgTournamentLobby />
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    ))}
                    <Grid item xs={12} marginTop="7vh" >
                        <EndBar />
                    </Grid>

                </Grid>
                <Box
                    sx={{
                        color: 'blue',
                        position: 'fixed',
                        top: "73%",
                        left: '80%',
                    }}
                >
                    <Typography variant="h5" component="div" sx={{ textalign: 'center' }}>
                        18/20
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ textalign: 'center' }}>
                        players
                    </Typography>
                </Box>
                <Link to='/multigamechooser'>
                    <StyledFab2 size="small" color="secondary" aria-label="add">
                        <ArrowBackIcon />
                    </StyledFab2>
                </Link>
            </Box>

        );
    }
}