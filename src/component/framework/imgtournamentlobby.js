import * as React from 'react';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 0,
    top:0,
    left:0,
    right: 0,
});

export default function ImgTournamentLobby() {
    return (
        <React.Fragment>
        <Box>
        <CssBaseline />
        <Grid xs={12}  >
            <StyledFab size="small" color="secondary" aria-label="add">
                    <KeyboardArrowRightIcon/>
            </StyledFab>
        </Grid >
        </Box>
        </React.Fragment>
    );
}
