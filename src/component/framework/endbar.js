import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import backgroundEnd from "../../rees_bg2.svg"
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import puzzle from '../../puzzle.svg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import LinkBar from './linkbar';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 0,
        top: 0,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
}));
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 0,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 86%',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }} 
            >
                
                <AppBar color="transparent" position="fixed" align='center' sx={{ top: 'auto', bottom: 0 }}   style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: "fixed", backgroundRepeat: 'no-repeat', backgroundAttachment: 'cover' ,heigth:"15vh"}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                       
                    >

                        <Grid item xs={12} align='center' >
                            <Toolbar>
                                <LinkBar />
                            </Toolbar>
                            <div style={{ backgroundColor: "white" }}>
                                <Toolbar>
                                    <IconButton color="inherit" aria-label="open drawer">
                                        R
                                    </IconButton>
                                    <Grid xs={12} container>
                                    <Grid  xs={4} variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} >
                                        <div style={{ border: '1px solid black', }}>
                                            <img src={puzzle} className="App-logo" alt="logo" width="30%" />
                                            18.6k<AddIcon style={{ width: 15, height: 15, }} />
                                        </div>
                                    </Grid>
                                    <Grid xs={4}  variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        <div style={{ border: '1px solid black', }}>
                                            <img src={puzzle} className="App-logo" alt="logo" width="30%" />
                                            11.2k<AddIcon style={{ width: 15, height: 15, }} />
                                        </div>
                                    </Grid>
                                    <Grid xs={4}  variant="caption" component="div" sx={{ flexGrow: 1, textAlign: 'center'}}>
                                        <div style={{ border: '1px solid black',height:'100%' }}>
                                            <img src={puzzle} className="App-logo" alt="logo" width="30%"  />
                                            13.9k
                                        </div>
                                    </Grid>
                                    </Grid>
                                    <Link to="/MessageCenter">
                                    <StyledFab size="small" color="secondary" aria-label="add">
                                        <StyledBadge badgeContent={200} color="secondary">
                                            <NotificationsNoneIcon />
                                        </StyledBadge>
                                    </StyledFab>
                                    </Link>
                                </Toolbar>

                            </div>
                        </Grid>
                    </Grid>

                </AppBar>
                <Toolbar sx={{
                    height: "25vh",
                }} />
            </Box>
        </React.Fragment >
    );
}
