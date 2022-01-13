import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import Popup from 'reactjs-popup';
import BigsilverPuzzle from '../../../svgicon/Componenticon/Bigchasepuzzle.svg'
import BigPuzzle from '../../../svgicon/Componenticon/Bigsilverpuzzle.svg'
import SwieprConent from '../../framework/swiperContent';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import { useHistory } from 'react-router';
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper';
import { Checkbox } from '@mui/material';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const data = [
    { id: 0, src: BigsilverPuzzle, name: "2048", number: 52, entryFee: 88 },
    { id: 1, src: BigPuzzle, name: "原神", number: 56, entryFee: 848 },
]

const contentStyle = {
    marginTop: '20%',
    background: '#242634',
    width: "90%",
    border: 'none',
    height: "62%",
    borderRadius: "5%",
};
const Toplinkdata = [
    { id: 0, linkName: "twice a week xx% OFF ", link: `/Wallet/TranscationHistory`, icon: chasepuzzle, price: 50, quality: "50(+0)" },
    { id: 1, linkName: "twice a week xx% OFF", link: `/Wallet/SaveCards`, icon: chasepuzzle, price: 150, quality: "50(+0)" },
    { id: 2, linkName: "Once a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: chasepuzzle, price: 250, quality: "50(+0)" },
    { id: 1, linkName: "twice a week xx% OFF", link: `/Wallet/SaveCards`, icon: chasepuzzle, price: 350, quality: "50(+0)" },
    { id: 2, linkName: "Once a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: chasepuzzle, price: 450, quality: "150(+60)" },
    { id: 1, linkName: "Once a week xx% OFF", link: `/Wallet/SaveCards`, icon: chasepuzzle, price: 550, quality: "550(+400)" },
    { id: 2, linkName: "Once a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: chasepuzzle, price: 650, quality: "1750(+550)" },
    { id: 3, linkName: "twice a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: chasepuzzle, price: 750, quality: "3750(+950)" }]

const Bottomlinkdata = [
    { id: 0, linkName: "twice a week xx% OFF ", link: `/Wallet/TranscationHistory`, icon: silverpuzzle, price: 50, quality: "50(+0)" },
    { id: 1, linkName: "twice a week xx% OFF", link: `/Wallet/SaveCards`, icon: silverpuzzle, price: 150, quality: "50(+0)" },
    { id: 2, linkName: "Once a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: silverpuzzle, price: 250, quality: "50(+0)" },
    { id: 1, linkName: "twice a week xx% OFF", link: `/Wallet/SaveCards`, icon: silverpuzzle, price: 350, quality: "50(+0)" },
    { id: 2, linkName: "Once a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: silverpuzzle, price: 450, quality: "150(+60)" },
    { id: 1, linkName: "Once a week xx% OFF", link: `/Wallet/SaveCards`, icon: silverpuzzle, price: 550, quality: "550(+400)" },
    { id: 2, linkName: "Once a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: silverpuzzle, price: 650, quality: "1750(+550)" },
    { id: 3, linkName: "twice a week xx% OFF", link: "/Wallet/PuzzlePackage", icon: silverpuzzle, price: 750, quality: "3750(+950)" }]

export default function PuzzlePackage() {
    const history = useHistory();
    const endbartype='Pure'
    const routeChange = () => {
        history.goBack()
    }
    const [count, setCount] = useState(0);
    const Toplinkdataed = Toplinkdata.map((text) => {
        if (text.id % 2 == 0) {
            return <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem button key={text.id} style={{ backgroundColor: '#8e8b91' }}>
                    <ListItemText  >
                        <Grid container xs={12} alignItems="center" justifyContent='center' >
                            <Grid xs={2}><img src={text.icon} alt="" width="100%" /></Grid>  <Grid xs={9}><Typography>{text.quality}</Typography><Typography variant="caption">{text.linkName}</Typography></Grid>
                        </Grid>
                    </ListItemText>
                    <Typography>HKD${text.price}</Typography><KeyboardArrowRightIcon />
                </ListItem>
            </Link>
        }
        else {
            return <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem button key={text.id} style={{ backgroundColor: '#707070' }}>
                    <ListItemText  >
                        <Grid container xs={12} alignItems="center" justifyContent='center' >
                            <Grid xs={2}><img src={text.icon} alt="" width="100%" /></Grid>  <Grid xs={9}><Typography>{text.quality}</Typography><Typography variant="caption">{text.linkName}</Typography></Grid>
                        </Grid>
                    </ListItemText>
                    <Typography>HKD${text.price}</Typography><KeyboardArrowRightIcon />
                </ListItem>
            </Link>
        }
    })
    const Bottomlinkdataed = Bottomlinkdata.map((text) => {
        if (text.id % 2 == 0) {
            return <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem button key={text.id} style={{ backgroundColor: '#8e8b91' }}>
                    <ListItemText  >
                        <Grid container xs={12} alignItems="center" justifyContent='center' >
                            <Grid xs={2}><img src={text.icon} alt="" width="100%" /></Grid>  <Grid xs={9}><Typography>{text.quality}</Typography><Typography variant="caption">{text.linkName}</Typography></Grid>
                        </Grid>  </ListItemText>
                    <Typography>HKD${text.price}</Typography><KeyboardArrowRightIcon />
                </ListItem>
            </Link>
        }
        else {
            return <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem button key={text.id} style={{ backgroundColor: '#707070' }}>
                    <ListItemText  >
                        <Grid container xs={12} alignItems="center" justifyContent='center' >
                            <Grid xs={2}><img src={text.icon} alt="" width="100%" /></Grid>  <Grid xs={9}><Typography>{text.quality}</Typography><Typography variant="caption">{text.linkName}</Typography></Grid>
                        </Grid>  </ListItemText>
                    <Typography>HKD${text.price}</Typography><KeyboardArrowRightIcon />
                </ListItem>
            </Link>
        }
    })
    return (

        <Box sx={{ flexGrow: 1 }} bgcolor='#242634' height="100%">
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >
                    <Link to='/'>
                        <img src={HomeIcon} alt='' width="15%" style={{
                            position: 'fixed',
                            zIndex: 3,
                            top: "72vh",
                            left: 0,
                        }} />
                    </Link>
                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0, backgroundColor: "#242634" }}>
                            <Toolbar >
                                <Grid xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid xs={2} >
                                          <img src={back} alt='' width="80%" onClick={routeChange} style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                top: 5,
                                                left: "-40%",
                                            }} />
                                    </Grid>
                                    <Grid xs={8} >
                                        <Typography variant="body1" component="div" sx={{ textAlign: 'center' }} >
                                            PUZZLE PURCHASE
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2} >         </Grid>
                                </Grid>

                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Toolbar />
                </Box>
            </React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} height="3vh" style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}>
                    <Typography variant="body2" color="#ffffff" >
                        HOT PACKAGE DEAL
                    </Typography>
                </Grid>
                <Grid container xs={12} height="38vh" alignItems="center" style={{ marginBottom: "0vh" }}>
                    <Swiper
                        onSlideChange={(index) => {
                            console.log(index.realIndex)
                            setCount(index.realIndex);
                        }}
                        pagination={true}
                        className="mySwiper">

                        {data.map((pic) => (
                            <SwiperSlide >
                                <Grid container xs={12} height="38vh" alignItems="center" justifyContent='center'>
                                    <Grid xs={6} container height='30%' alignItems="center" justifyContent='center' >
                                        <Typography variant='body1' color='white' paragraph>You have Chase puzzle <br /></Typography>
                                            <Popup
                                                    trigger={<Typography variant='h6' color='white' paragraph> 52PCs(?) </Typography>}
                                                    modal
                                                    lockScroll
                                                    nested
                                                    {...{ contentStyle }}
                                                >
                                                    {close => (
                                                        <div className="modal">
                                                            <button className="close" onClick={close}>

                                                            </button>
                                                            <SwieprConent />
                                                        </div>

                                                    )}
                                                </Popup>
                                      </Grid>
                                    <Grid xs={6} container height='70%' alignItems="center" justifyContent='center'><img src={pic.src} alt="" /></Grid>
                                    <Grid xs={12} height='40%'><Typography variant='body2' color='white'>
                                        To abide by local regulation, we need to
                                        verify your identity before you can</Typography></Grid>
                                </Grid>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
                <Grid container xs={12} alignItems="center" justifyContent='center' display={count == 1 ? "none" : "block"} style={{ borderTop: '3px solid white', }}>
                    <List >
                        {Toplinkdataed}
                    </List>
                </Grid>

                <Grid container xs={12} alignItems="center" display={count == 0 ? "none" : "block"} style={{ borderTop: '3px solid white', }}>
                    <List >
                        {Bottomlinkdataed}
                    </List>
                </Grid>
            </Grid>
            <Grid item xs={12} marginTop="0vh" >
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    );
}


