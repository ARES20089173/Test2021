import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Explore from './Explore';
import Slider from './Slider'
import Explore2 from './Explore2';
import Hotpic from './Hotpic'
import Featurecourse from './featurecourse';
import Highlyrecommend from './Highlyrecommend'
import { useHistory } from "react-router";
import Treasurehunt from './TREASUREHUNT'
import Category from './Category'
import Comment from './Comment'
import EndPage from './EndPage'
import Search from './Search'
import Scrollbanner from '../../framework/scrollbanner'
import Typography from '@mui/material/Typography';
import 'reactjs-popup/dist/index.css';
import "../../framework/css/cssModFLooby.css"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import backgroundEnd from "../../../reed_bg.svg"
import NavigationBar from '../../framework/navigationbarforshop';
import Scrolltext from '../../framework/scrolltext';
import Categorychooser from './categorychooser';
import Gamenowplaylater from '../../../svgicon/Shop/word&button/Gamenowplaylater.svg'
import Searchpic from '../../../svgicon/Shop/word&button/Search.svg'
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
import Apply from '../../../svgicon/Shop/word&button/Apply.svg'
import checkshopcar from '../../../svgicon/Shop/word&button/checkshopcar.svg'
import continuebuy from '../../../svgicon/Shop/word&button/continuebuy.svg'
import SlideRangebg from '../../../svgicon/Shop/Picturebackground/SlideRangebg.svg'
import EndBar from '../../framework/endbarWithback';
import data from '../../database';
import Popup from 'reactjs-popup';
import { useEffect } from 'react';

export default function MainPage() {
    const endbartype = 'Shop'
    const { Hotpicdata, Featurecoursedata, Recommenddata } = data;
    const [Popopen, setPopopen] = useState(false);
    const [Checklanguageopen, setChecklanguageopen] = useState(true);

    const ref = useRef();

    const closeTooltip = () => ref.current.close();
    const [cartItems, setCartItems] = useState(() => {
        const localdata = localStorage.getItem('cartItems');
        return localdata ? JSON.parse(localdata) : []
    });
    const [language, setlanguage] = useState(() => {
        const localdata = localStorage.getItem('language');
        return localdata ? JSON.parse(localdata) : false
    });
    const [checklanguage, setChecklanguage] = useState(() => {
        const localdata = localStorage.getItem('checklanguage');
        return localdata ? JSON.parse(localdata) : false
    });
    const handleChange = (event) => {
        setChecklanguage(event.target.value)
    };
    const handlelanguageChange = (event) => {
        setlanguage(checklanguage)
        closeTooltip()
    };
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        localStorage.setItem('language', JSON.stringify(language))
    })
    useEffect(() => {
        if (localStorage.getItem('language') !== 'false') {
            setChecklanguageopen(false)
        }
    },[])
    const onAdd = (product) => {
        setPopopen(true)
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist !== undefined) {
            setCartItems(
                cartItems.map((x) =>
                (
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                ))
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }

    };
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open)
    }
    const contentStyle = {
        background: 'white',
        width: "90%",
        height: "50%",
        borderRadius: "5%",
    };
    const history = useHistory();

    const routeChange = () => {
        console.log("textmessage")
        setPopopen(false)
        let path = '/Shop/Shopcar';
        history.push(path);
        // history.goBack()
    }

    const Tooltip = () => (
        <Popup
            ref={ref}
            open={Popopen}
            modal
            lockScroll
            nested
            closeOnDocumentClick={false}
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    </button>
                    <Grid xs={12} style={{ overflow: 'scroll' }} height='48vh' >
                        <Typography variant='h6' textAlign='center' color='white'>{cartItems.length} 件商品已添加至購物車</Typography>
                        <Grid xs={12} container justifyContent='center' height='5vh' >
                            <Grid xs={12} container justifyContent='center'  ><img src={checkshopcar} onClick={routeChange} alt='' width='80%' /></Grid>
                            <Grid xs={12} container justifyContent='center' marginTop='1vh' ><img src={continuebuy} onClick={close} alt='' width='80%' /></Grid>
                        </Grid>
                    </Grid>
                </div>
            )}
        </Popup>
    );
    const Tooltip2 = () => (
        <Popup
            ref={ref}
            open={Checklanguageopen}
            modal
            lockScroll
            nested
            closeOnDocumentClick={false}
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    </button>
                    <Grid xs={12} style={{ overflow: 'scroll' }} height='48vh' container justifyContent='center' alignItems='center'>
                        <Typography variant='h6' textAlign='center' color='white'>Hi Puzzle Chasers! Ready to shop?</Typography>
                        <Typography variant='h6' textAlign='center' color='white'>choose your delivery location & payment currency </Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={checklanguage}
                            label="checklanguage"
                            onChange={handleChange}
                            autoWidth
                            style={{ color: 'white' }}
                        >
                            <MenuItem value={"HKD"}>Hong Kong SAR (HKD)</MenuItem>
                            <MenuItem value={"RMB"}>China (RMB)</MenuItem>
                        </Select>
                        <Grid xs={12} container justifyContent='center' height='10vh' >
                            <img src={Apply} alt='' onClick={handlelanguageChange} width='50%' />
                        </Grid>
                    </Grid>
                </div>
            )}
        </Popup>
    );
    return (
        <Box sx={{ flexGrow: 1 }} height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
            <Grid item xs={12} style={{ borderBottom: '1px solid black' }} >
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
                        trigger={<img src={Searchpic} alt='' onClick={()=>setOpen(!open)} width="80%" />}
                        modal
                        lockScroll
                        nested
                        closeOnDocumentClick={false}
                        onClose={handleClick}
                        {...{ contentStyle }}
                    >
                        {close => (
                            <div className="modal" style={{overflow:'scroll', height:"43vh"}}>
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
                <Tooltip />
                <Tooltip2 />
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
            <Grid item xs={12} marginTop="5vh" >
                <EndBar endbartype={endbartype} />
            </Grid>

        </Box>
    );
}