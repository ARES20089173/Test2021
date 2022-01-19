import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Popup from 'reactjs-popup';
import BigsilverPuzzle from '../../../svgicon/Componenticon/Bigchasepuzzle.svg'
import BigPuzzle from '../../../svgicon/Componenticon/Bigsilverpuzzle.svg'
import SwieprConent from '../../framework/swiperContent';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import { useHistory } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import datas from '../../database'
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper';
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const data = [
    { id: 0, src: BigsilverPuzzle },
    { id: 1, src: BigPuzzle},
]
const {PuzzlePackageChasedata, PuzzlePackagesilverdata } = datas
const contentStyle = {
    marginTop: '20%',
    background: '#242634',
    width: "90%",
    border: 'none',
    height: "62%",
    borderRadius: "5%",
};
export default function PuzzlePackage() {
    const history = useHistory();
    const endbartype='Pure'
    const routeChange = () => {
        history.goBack()
    }
    const [count, setCount] = useState(0);
    const Toplinkdataed = PuzzlePackageChasedata.map((text) => {
        if (text.id % 2 === 0) {
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
    const Bottomlinkdataed = PuzzlePackagesilverdata.map((text) => {
        if (text.id % 2 === 0) {
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
                <Grid container xs={12} alignItems="center" justifyContent='center' display={count === 1 ? "none" : "block"} style={{ borderTop: '3px solid white', }}>
                    <List >
                        {Toplinkdataed}
                    </List>
                </Grid>

                <Grid container xs={12} alignItems="center" display={count === 0 ? "none" : "block"} style={{ borderTop: '3px solid white', }}>
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


