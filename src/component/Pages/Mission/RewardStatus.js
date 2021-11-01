import React from "react";
import AppBar from '@mui/material/AppBar';
import back from '../../../svgicon/Componenticon/Back.svg'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import EndBar from '../../framework/pureEndbar';
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const contentStyle = {
    margin: 'auto',
    background: '#cfcece',
    width: "100%",
    height: "40%",
    padding: "5px",
    borderRadius: "5%",
};
const StyledFab = styled(Fab)({
    position: 'fixed',
    zIndex: 3,
    top: "75vh",
    left: 0,

});
const StyledFab2 = styled(Fab)({
    position: 'relative',
    zIndex: 3,
    top: 0,
    left: "0%",


});
const linkdata = [
    { id: 0, linkName: "", link: "#" },
    { id: 1, linkName: "", link: "#" },
    { id: 2, linkName: "", link: "#" },
    { id: 3, linkName: "", link: "#" },
    { id: 4, linkName: "", link: "#" },
    { id: 5, linkName: "", link: "#" },
    { id: 6, linkName: "", link: "#" },
    { id: 7, linkName: "", link: "#" },
    { id: 8, linkName: "", link: "#" },


]
export default function RewardStatus() {
    const [select, setSelect] = React.useState('OPENED');
    const handleselectChange = (e) => {
        setSelect(e)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
              <Link to='/'>
                    <img src={HomeIcon} alt='' width="15%" style={{
                        position: 'fixed',
                        zIndex: 3,
                        top: "72vh",
                        left: 0,
                    }} />
                </Link>
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0, backgroundColor: "#242634" }}>
                            <Toolbar >
                                <Grid xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid xs={2} >
                                        <Link to='/MissionMain'>
                                            <img src={back} alt='' width="80%" style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                top: 5,
                                                left: "-40%",
                                            }} />
                                        </Link>
                                    </Grid>
                                    <Grid xs={10} >
                                        <Typography variant="body1" component="div" sx={{ textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-10%",
                                        }} >
                                            REWARD STATUS
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Toolbar />
                </Box>
            </React.Fragment>
            <Grid container justifyContent='center' alignItems='center' xs={12} height="5vh" style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}>

                <Grid container justifyContent='center' alignItems='center' xs={4}   onClick={()=>handleselectChange('OPENED')} height="5vh" style={{ borderBottom: select == 'OPENED' ? "3px solid white" : '' }}>
                    <Typography variant="body1" color="#ffffff" >
                        OPENED
                    </Typography>
                </Grid>
                <Grid container justifyContent='center' alignItems='center' xs={4} onClick={()=>handleselectChange('REWARD')} height="5vh"  style={{ borderBottom: select == 'REWARD' ? "3px solid white" : '' }}>
                    <Typography variant="body1" color="#ffffff" >
                        REWARD
                    </Typography>
                </Grid>
                <Grid container justifyContent='center' alignItems='center' xs={4} onClick={()=>handleselectChange('EXPIRED')} height="5vh"  style={{ borderBottom: select == 'EXPIRED' ? "3px solid white" : '' }}>
                    <Typography variant="body1" color="#ffffff" >
                        EXPIRED
                    </Typography>
                </Grid>

            </Grid>
            <List style={{ bottom: 10, textDecoration: 'none', color: '#FFF' }} >
                {linkdata.map((text, index) => (
                    <Link to={text.link} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button key={text.id} style={{ backgroundColor: index % 2 === 0 ? '#707070' : '#8e8b91', height: "10vh" }}>
                            <ListItemText >
                                {text.linkName}
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Grid item xs={12} marginTop="0vh" >
                <EndBar />
            </Grid>
        </Box>
    )
}
