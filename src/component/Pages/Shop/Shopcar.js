import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Explore from './Explore';
import Slider from './ShopCartSlider'
import Search from './Search'
import { useHistory } from "react-router-dom";
import Scrollbanner from '../../framework/scrollbanner'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
import Checkout from '../../../svgicon/Shop/word&button/CHECKOUT.svg'
import cancel from '../../../svgicon/Shop/word&button/cancel.svg';
import Delete from '../../../svgicon/Shop/word&button/delete.svg';
import Data from './data';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import EndBar from '../../framework/ShopEndBar';

export default function Shopcar() {
    const [cartItems, setCartItems] = useState(() => {
        const localdata = localStorage.getItem('cartItems');
        return localdata ? JSON.parse(localdata) : []

    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    })
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
        console.log(cartItems.length)
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
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
    const ref = useRef();
    const closeTooltip = () => ref.current.close();
    const onDelete = (product) => {
        closeTooltip()
        setCartItems(cartItems.filter((x) => x.id !== product.id));
    };
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

                <Grid container alignItems='center' justifyContent='center' xs={12} height="5vh">
                    <Popup
                        trigger={<div className="button"> <div ><Typography color="white" onClick={handleClick}>Searchpic </Typography></div></div>}
                        modal
                        lockScroll
                        nested
                        closeOnDocumentClick={false}
                        onClose={handleClick}
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
                <Grid container alignItems='left' xs={11} height="5vh">
                    <Typography variant='h6' color='white'>Shopping Cart ({cartItems.length} Products)</Typography>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={11.5} style={{ backgroundColor: "#FFE57B", padding: '1vh', borderRadius: '10%' }}>
                    <Slider />
                </Grid>
                <Grid xs={12} container alignItems='center' justifyContent='center' marginTop='1vh'>
                    <img src={Checkout} onClick={routeChange} alt='' width='50%' />
                </Grid>

            </Grid>
            <Grid item xs={12} marginTop="5vh">
                {cartItems != "" ?
                    cartItems.map((data, index) => {
                        return (
                            <Grid xs={12} container alignItems='center' justifyContent='center' style={{ backgroundColor: index % 2 == 0 ? '#242634' : '#35394C' }}>
                                <Grid xs={2}><img src={typeof (data.picture) == "object" ? data.picture[1] : data.picture} alt='' width='100%' /></Grid>
                                <Grid xs={6}>
                                    <Typography color='white' textAlign='center' variant='caption' style={{ wordWrap: 'break-word' }}>   {data.head}</Typography>
                                    <Typography color='white' textAlign='center' variant='caption' style={{ wordWrap: 'break-word' }}>   {data.description}</Typography>
                                </Grid>
                                <Grid xs={2} container alignItems='center' justifyContent='center' >
                                    <Grid xs={12} container alignItems='center' justifyContent='center' >
                                        <Popup ref={ref}
                                            trigger={<div className="button"> <div >    <DeleteForeverIcon />
                                            </div></div>}
                                            modal
                                            lockScroll
                                            nested
                                            closeOnDocumentClick={false}
                                        >
                                            {close => (
                                                <div className="modal">
                                                    <button className="close" onClick={close}>
                                                    </button>
                                                    <Grid xs={12} style={{ overflow: 'scroll' }} height='48vh' container justifyContent='center' >
                                                        <Typography variant='h6' textAlign='center' color='white' >從購物車中刪除？</Typography>
                                                        <Typography variant='caption' textAlign='center' color='white'>
                                                            {data.description}
                                                        </Typography>
                                                        <Grid xs={12} container justifyContent='center' height='10vh' >
                                                            <Grid xs={12} container justifyContent='center'  ><img src={Delete} onClick={() => onDelete(data)}  alt='' width='80%' /></Grid>
                                                            <Grid xs={12} container justifyContent='center' marginTop='1vh' ><img src={cancel} onClick={close} alt='' width='80%' /></Grid>
  </Grid>
                                                    </Grid>
                                                </div>
                                            )}
                                        </Popup>
                                    </Grid>
                                    <Grid xs={4} container alignItems='center' justifyContent='center' >
                                        <Button onClick={() => onRemove(data)}>-</Button>
                                    </Grid>
                                    <Grid xs={4} container alignItems='center' justifyContent='center' >
                                        <Typography>{data.qty}</Typography>
                                    </Grid>
                                    <Grid xs={4} container alignItems='center' justifyContent='center' >

                                        <Button onClick={() => onAdd(data)}>+</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }) : <Grid style={{ height: '30vh', backgroundColor: 'transparent', textAlign: 'center', color: 'white' }}>Your shop car is empty</Grid>
                }
            </Grid>
            <Grid item xs={12} marginTop="10vh">
                <EndBar />
            </Grid>
        </Box>
    );
}