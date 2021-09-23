import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import puzzle from '../../puzzle.svg';
import AddIcon from '@mui/icons-material/Add';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 0,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 85%',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <AppBar color="primary" position="static" align='center'>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer">
                            R
                        </IconButton>
                        <Typography variant="body2" >
                                <img src={puzzle} className="App-logo" alt="logo"  />
                            18.6k
                            <Fab size="small" color="secondary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Typography>
                        <Typography variant="body2" >
                                <img src={puzzle} className="App-logo" alt="logo" />
                            11.2k
                            <Fab size="small" color="secondary" aria-label="add" >
                                <AddIcon />
                            </Fab>
                        </Typography>
                        <Typography variant="body2" >
                                <img src={puzzle} className="App-logo" alt="logo"  />
                            13.9k
                            <Fab size="small" color="secondary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Typography>
                        <StyledFab color="secondary" aria-label="add">
                            52.6K
                        </StyledFab>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
}
