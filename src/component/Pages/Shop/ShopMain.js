import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Explore from './Explore';
import Slider from './Slider'
import Explore2 from './Explore2';
import Hotpic from './Hotpic'
import Featurecourse from './featurecourse';
import Highlyrecommend from './Highlyrecommend'
import Treasurehunt from './TREASUREHUNT'
import Category from './Category'
import Comment from './Comment'
import EndPage from './EndPage'
import Search from './Search'
import Shopcar from './Shopcar'
import { useHistory } from "react-router-dom";
import Scrollbanner from '../../framework/scrollbanner'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import SilverPuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
import Code from '../../../svgicon/Componenticon/Code.svg'
import Codeicon from '../../../svgicon/Componenticon/Codeicon.svg'
import greenicon from '../../../svgicon/Componenticon/greenicon.svg'
import Chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import Box from '@mui/material/Box';
import backgroundEnd from "../../../reed_bg.svg"
import NavigationBar from '../../framework/navigationbarforshop';
import face from '../../../svgicon/Headicon/face_1.svg'
import Scrolltext from '../../framework/scrolltext';
import Categorychooser from './categorychooser';
import Gamenowplaylater from '../../../svgicon/Shop/word&button/Gamenowplaylater.svg'
import ShopWithPuzzles from '../../../svgicon/Shop/word&button/ShopWithPuzzles.svg'
import EarnPuzzleToSaveMore from '../../../svgicon/Shop/word&button/EarnPuzzleToSaveMore.svg'
import PlayandShopToEarn from '../../../svgicon/Shop/word&button/PlayandShopToEarn.svg'
import HOTPICK from '../../../svgicon/Shop/word&button/HOTPICK.svg'
import HowToPlayAndEarn from '../../../svgicon/Shop/word&button/HowToPlayAndEarn.svg'
import Welcome from '../../../svgicon/Shop/word&button/Welcome.svg'
import ExploreGraybg from '../../../svgicon/Shop/Picturebackground/ExploreGraybg.svg'
import featurecourse from '../../../svgicon/Shop/word&button/featurecourse.svg'
import highlyrecommend from '../../../svgicon/Shop/word&button/highlyrecommend.svg'
import Threeperson from '../../../svgicon/Shop/Picturebackground/Threeperson.svg'
import TREASUREHUNT from '../../../svgicon/Shop/word&button/TREASUREHUNT.svg'
import CATEGORY from '../../../svgicon/Shop/word&button/CATEGORY.svg'
import SlideRangebg from '../../../svgicon/Shop/Picturebackground/SlideRangebg.svg'
import EndBar from '../../framework/ShopEndBar';
import data from './data';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useEffect } from 'react';

export default function MainPage() {
    const { Hotpicdata, Featurecoursedata, Recommenddata } = data;
    const [cartItems, setCartItems] = useState(() => {
        const localdata = localStorage.getItem('cartItems');
        return localdata ? JSON.parse(localdata) : []

    });
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    })
    const onAdd = (product) => {
        console.log("productid:" + product.id)
        const exist = cartItems.find((x) => x.id === product.id);

        if (exist !== undefined) {
            setCartItems(
                cartItems.map((x) =>
                (
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x

                ))
            );
            console.log("exist:" + exist.id)

            console.log(cartItems)

        } else {

            console.log("exist:" + exist)
            setCartItems([...cartItems, { ...product, qty: 1 }]);
            console.log(cartItems)

        }
        console.log(cartItems)

    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open)
    }
    const contentStyle = {
        background: 'white',
        width: "90%",
        height: "85%",
        borderRadius: "5%",
    };
    const history = useHistory();

    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    return (
        <Box sx={{ flexGrow: 1 }} height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
            <Grid item xs={12} style={{ borderBottom: '1px solid black', display: open == true ? "none" : '' }} >
                <NavigationBar />
            </Grid>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={11} height="5vh" style={{ marginTop: '1vh' }}>
                    <Scrolltext />
                </Grid>
                <Grid item xs={12} height="25vh">
                    <Categorychooser />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh">
                    <img src={Gamenowplaylater} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={11.5} height="28vh" style={{ backgroundImage: `url(${SlideRangebg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}>
                    <Slider />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh">
                    <img src={ShopWithPuzzles} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh">
                    <Popup
                        trigger={<div className="button"> <div ><Typography color="white" onClick={handleClick}>Searchpic </Typography></div></div>}
                        modal
                        lockScroll
                        nested
                        closeOnDocumentClick={false}
                        onClose={handleClick}
                        {...{ contentStyle }}
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                </button>
                                <Grid xs={12} >
                                    <Search />
                                </Grid>
                            </div>
                        )}
                    </Popup>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh">
                    <img src={EarnPuzzleToSaveMore} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="32vh">
                    <img src={Threeperson} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="18vh">
                    <img src={PlayandShopToEarn} style={{ width: '90%' }} alt="" />
                    <img src={HowToPlayAndEarn} style={{ width: '65%' }} onClick={routeChange} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="16vh">
                    <img src={Welcome} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={11.5} height="28vh" style={{ backgroundImage: `url(${ExploreGraybg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}>
                    <Explore />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={11.5} height="28vh" style={{ backgroundImage: `url(${ExploreGraybg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}>
                    <Explore2 />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh">
                    <img src={HOTPICK} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12}>
                    <Hotpic Hotpicproducts={Hotpicdata} onAdd={onAdd} />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh" marginTop="1vh">
                    <img src={featurecourse} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12}>
                    <Featurecourse Featurecourseproducts={Featurecoursedata} onAdd={onAdd} />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh" marginTop="1vh">
                    <img src={highlyrecommend} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12}>
                    <Highlyrecommend Recommendproducts={Recommenddata} onAdd={onAdd} />
                </Grid>
                <Grid item xs={11} style={{ marginTop: 0 }} >
                    <div style={{ textAlign: 'center' }}>
                        <Scrollbanner />
                    </div>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh" marginTop="1vh">
                    <img src={TREASUREHUNT} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid item xs={12}>
                    <Treasurehunt />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh" marginTop="1vh">
                    <img src={CATEGORY} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid item xs={11}>
                    <Category />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} marginTop="1vh" style={{ backgroundColor: 'yellow', margin: 0 }}>
                    <Comment />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} marginTop="0vh">
                    <Grid style={{ backgroundColor: 'black', margin: 0, height: '5vh' }} container alignItems='center' justifyContent='center' xs={12} >
                        <Typography color="#FF00FF"> <b>*PUZZLECHASE *REES</b></Typography>
                    </Grid>
                    <EndPage />
                </Grid>

            </Grid>
            <Grid item xs={12} marginTop="5vh">
                <EndBar />
            </Grid>
        </Box>
    );
}