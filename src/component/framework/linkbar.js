import * as React from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Player from '../../svgicon/EndBaricon/PlayerLink.svg'
import Shop from '../../svgicon/EndBaricon/ShopLink.svg'
import Wallet from '../../svgicon/EndBaricon/WalletLink.svg'
import History from '../../svgicon/EndBaricon/HistoryLink.svg'
import Mission from '../../svgicon/EndBaricon/MissionLink.svg'
import WordPlayer from '../../svgicon/EndBaricon/WordPlayer.svg'

import WordShop from '../../svgicon/EndBaricon/WordShop.svg'

import WordHistory from '../../svgicon/EndBaricon/WordHistory.svg'

import WordWallet from '../../svgicon/EndBaricon/WordWallet.svg'

import WordMission from '../../svgicon/EndBaricon/WordMission.svg'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { useHistory } from 'react-router'
import { createMuiTheme } from "@material-ui/core"
const theme = createMuiTheme({
    typography: {
        caption:{
            fontSize:"30px"
        }
      },
  });
const StyledBadge = styled(Badge)(({ theme2 }) => ({
    '& .MuiBadge-badge': {
        right: 10,
        top: '7vh',
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 1px',

    },
}));
const MessageNumber = [
    { id: 0, link: "/", MessageNum: 3 },
    { id: 1, link: "/", MessageNum: 32 },
    { id: 2, link: "/", MessageNum: 55 },
    { id: 3, link: "/", MessageNum: 73 },
    { id: 4, link: "/", MessageNum: 100 },
]

export default function Linkbar() {

    const history = useHistory();
    const handleLink = (e) => {
        history.push(MessageNumber[e].link)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={2} align='left'>
                    <StyledBadge badgeContent={MessageNumber[0].MessageNum} color="secondary">
                        <img src={Player} onClick={() => handleLink(MessageNumber[0].id)} className="App-logo" alt="logo" width="170%" style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: "-5vh",
                            right: '3vh'
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center'>
                    <StyledBadge badgeContent={MessageNumber[1].MessageNum} color="secondary">
                        <img src={Shop} onClick={() => handleLink(MessageNumber[1].id)} className="App-logo" alt="logo" width="120%" style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: "-5vh",
                            right: "1vh"
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center'>
                    <StyledBadge badgeContent={MessageNumber[2].MessageNum} color="secondary">
                        <img src={Wallet} onClick={() => handleLink(MessageNumber[2].id)} className="App-logo" alt="logo" width="120%" style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: "-5vh",
                            right: "1vh"
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center' >
                    <StyledBadge badgeContent={MessageNumber[3].MessageNum} color="secondary">
                        <img src={History} onClick={() => handleLink(MessageNumber[3].id)} className="App-logo" alt="logo" width="120%" style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: "-5vh",
                            right: "1vh"
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center' >
                    <StyledBadge badgeContent={MessageNumber[4].MessageNum} color="secondary">
                        <img src={Mission} onClick={() => handleLink(MessageNumber[4].id)} className="App-logo" alt="logo" width="120%" style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: "-5vh",
                            right: "1vh"
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2}>

                </Grid>

                <Grid item xs={2} style={{
                    position: 'relative',
                    zIndex: 1,
                }}>
                   <img src={WordPlayer} width="90%"/>
                </Grid>
               
                <Grid item xs={2}>
                    <img src={WordShop} alt="word" width="45%" />
                </Grid>
                <Grid item xs={2}>
                    <img src={WordWallet} alt="word" width="70%" />
                </Grid>
                <Grid item xs={2}>
                    <img src={WordHistory} alt="word" width="70%" />
                </Grid>

                <Grid item xs={2} >
                    <img src={WordMission} width="70%" />
                </Grid>
                <Grid item xs={2} >
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </Box>
    );
}