import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Badge from '@mui/material/Badge'
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
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <AppBar color="transparent" position="fixed" align='center' sx={{ top: 'auto', bottom: 0 }}>

                    <LinkBar />

                    <div style={{ backgroundColor: "yellow" }}>
                        <Toolbar>
                            <IconButton color="inherit" aria-label="open drawer">
                                R
                            </IconButton>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <img src={puzzle} className="App-logo" alt="logo" />
                                18.6k
                                <Fab size="small" color="secondary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <img src={puzzle} className="App-logo" alt="logo" />
                                11.2k
                                <Fab size="small" color="secondary" aria-label="add" >
                                    <AddIcon />
                                </Fab>
                            </Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <img src={puzzle} className="App-logo" alt="logo" />
                                13.9k
                                <Fab size="small" color="secondary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Typography>
                            <Typography></Typography>
                            <StyledFab size="small" color="secondary" aria-label="add">
                                <StyledBadge badgeContent={200} color="secondary">
                                    <NotificationsNoneIcon />
                                </StyledBadge>
                            </StyledFab>
                        </Toolbar>
                    </div>
                </AppBar>
                <Toolbar sx={{
                    height: "25vh",
                }} />
            </Box>
        </React.Fragment>
    );
}
