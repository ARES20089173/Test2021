import * as React from 'react'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import linkicon from '../../graphsixBig.svg'
import linkiconBig from '../../graphsixBigger.svg'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab';
import { Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom"
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const StyledFab2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: "-3vh",
    left: "0vh",
});
export default function Linkbar() {
    const [linkiconcheck0, setlinkiconcheck0] = React.useState(true);
    const [linkiconcheck1, setlinkiconcheck1] = React.useState(false);
    const [linkiconcheck2, setlinkiconcheck2] = React.useState(false);
    const [linkiconcheck3, setlinkiconcheck3] = React.useState(false);
    const [linkiconcheck4, setlinkiconcheck4] = React.useState(false);
    var pic, pic1, pic2, pic3, pic4;
    if (linkiconcheck0) {
        pic = linkiconBig
    } else {
        pic = linkicon
    }
    if (linkiconcheck1) {
        pic1 = linkiconBig
    } else {
        pic1 = linkicon
    }
    if (linkiconcheck2) {
        pic2 = linkiconBig
    } else {
        pic2 = linkicon
    }
    if (linkiconcheck3) {
        pic3 = linkiconBig
    } else {
        pic3 = linkicon
    }
    if (linkiconcheck4) {
        pic4 = linkiconBig
    } else {
        pic4 = linkicon
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Link to='/'>
                <StyledFab2 size="small" color="secondary" aria-label="add">
                    <HomeIcon />
                </StyledFab2>
            </Link>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item xs={2.5} align='center'>
                    <IconButton aria-label="cart" onClick={() => { setlinkiconcheck0(true); setlinkiconcheck1(false); setlinkiconcheck2(false); setlinkiconcheck3(false); setlinkiconcheck4(false); }}>
                        <StyledBadge badgeContent={200} color="secondary">
                            <img src={pic} className="App-logo" alt="logo" width="100%" />
                        </StyledBadge>
                    </IconButton>

                </Grid>
                <Grid item xs={2} align='center'>
                    <IconButton aria-label="cart" onClick={() => { setlinkiconcheck0(false); setlinkiconcheck1(true); setlinkiconcheck2(false); setlinkiconcheck3(false); setlinkiconcheck4(false); }}>
                        <StyledBadge badgeContent={200} color="secondary">
                            <img src={pic1} className="App-logo" alt="logo" width="100%" />
                        </StyledBadge>
                    </IconButton>
                </Grid>
                <Grid item xs={2} align='center'>
                    <IconButton aria-label="cart" onClick={() => { setlinkiconcheck0(false); setlinkiconcheck1(false); setlinkiconcheck2(true); setlinkiconcheck3(false); setlinkiconcheck4(false); }}>
                        <StyledBadge badgeContent={200} color="secondary">
                            <img src={pic2} className="App-logo" alt="logo" width="100%" />
                        </StyledBadge>
                    </IconButton>
                </Grid>
                <Grid item xs={2} align='center' >
                    <IconButton aria-label="cart" onClick={() => { setlinkiconcheck0(false); setlinkiconcheck1(false); setlinkiconcheck2(false); setlinkiconcheck3(true); setlinkiconcheck4(false); }}>
                        <StyledBadge badgeContent={200} color="secondary">
                            <img src={pic3} className="App-logo" alt="logo" width="100%" />
                        </StyledBadge>
                    </IconButton>
                </Grid>
                <Grid item xs={2} align='center' >
                    <IconButton aria-label="cart" onClick={() => { setlinkiconcheck0(false); setlinkiconcheck1(false); setlinkiconcheck2(false); setlinkiconcheck3(false); setlinkiconcheck4(true); }}>
                        <StyledBadge badgeContent={200} color="secondary">
                            <img src={pic4} className="App-logo" alt="logo" width="100%" />
                        </StyledBadge>
                    </IconButton>
                </Grid>
                <Grid item xs={1.5}>
                </Grid>
                <Grid item xs={2.5 } >
                    <Typography align='left' variant="caption" color='primary' fontSize="1">
                        Player@Earn
                        </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant="caption" color='primary'>Shop</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant="caption" color='primary'>Wallet</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant="caption"color='primary'>History</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant="caption"color='primary'>Mission</Typography>
                </Grid>
                <Grid item xs={1.5}>
                </Grid>
            </Grid>
        </Box>
    );
}