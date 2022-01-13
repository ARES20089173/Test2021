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
import Fab from '@mui/material/Fab';
import HomeIcon from '../../svgicon/EndBaricon/BackHome.svg';
import { Link } from "react-router-dom"
import { useHistory } from 'react-router'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 13,
        top: '5.5vh',
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
        backgroundColor: "red",
        color:'white'
      
        
    },
}));
const StyledFab2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: "-3vh",
    left: "0vh",
});
const MessageNumber = [
    { id: 0, link: "/", MessageNum: 3 },
    { id: 1, link: "/Shop", MessageNum: 32 },
    { id: 2, link: "/wallet", MessageNum: 55 },
    { id: 3, link: "/History", MessageNum: 73 },
    { id: 4, link: "/MissionMain", MessageNum: 100 },
]
export default function LinkbarWithback(props) {
    const { endbartype } = props;
    const history = useHistory();
    const handleLink = (e) => {
        history.push(MessageNumber[e].link)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Link to='/' style={{visibility:endbartype=='MainPlay'?'hidden':'visible'}}>
                <img src={HomeIcon} alt="homeicon" width="15%" style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: "-3vh",
                    left: "0vh",
                }} />
            </Link>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={2} align='left'>
                    <StyledBadge badgeContent={MessageNumber[0].MessageNum} >
                        <img src={Player} onClick={() => handleLink(MessageNumber[0].id)} className="App-logo" alt="logo" width= {endbartype== 'Play'||endbartype=='MainPlay' ? '170%':"120%"} style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: endbartype== 'Play'||endbartype=='MainPlay'?"-4.1vh":"-5vh",
                            right: endbartype== 'Play'||endbartype=='MainPlay'?"3vh":'1vh'
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center'>
                    <StyledBadge badgeContent={MessageNumber[1].MessageNum}>
                        <img src={Shop} onClick={() => handleLink(MessageNumber[1].id)} className="App-logo" alt="logo" width= {endbartype== 'Shop'?'170%':"120%"} style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: endbartype== 'Shop'?"-4.1vh":"-5vh",
                            right: endbartype== 'Shop'?"3vh":'1vh'
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center'>
                    <StyledBadge badgeContent={MessageNumber[2].MessageNum} >
                        <img src={Wallet} onClick={() => handleLink(MessageNumber[2].id)} className="App-logo" alt="logo" width= {endbartype== 'Wallet'?'170%':"120%"} style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: endbartype== 'Wallet'?"-4.1vh":"-5vh",
                            right: endbartype== 'Wallet'?"3vh":'1vh'
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center' >
                    <StyledBadge badgeContent={MessageNumber[3].MessageNum} >
                        <img src={History} onClick={() => handleLink(MessageNumber[3].id)} className="App-logo" alt="logo" width= {endbartype== 'History'?'170%':"120%"} style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: endbartype== 'History'?"-4.1vh":"-5vh",
                            right: endbartype== 'History'?"3vh":'1vh'
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2} align='center' >
                    <StyledBadge badgeContent={MessageNumber[4].MessageNum}>
                        <img src={Mission} onClick={() => handleLink(MessageNumber[4].id)} className="App-logo" alt="logo" width= {endbartype== 'Mission'?'170%':"120%"} style={{
                            position: 'relative',
                            zIndex: 1,
                            bottom: endbartype== 'Mission'?"-4.1vh":"-5vh",
                            right: endbartype== 'Mission'?"3vh":'1vh'
                        }} />
                    </StyledBadge>
                </Grid>
                <Grid item xs={2}>

                </Grid>

                <Grid item xs={2} style={{
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <img src={WordPlayer} width="90%" />
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