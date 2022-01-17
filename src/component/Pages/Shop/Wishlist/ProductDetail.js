import React, { useState, useEffect ,useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EndBar from '../../../framework/endbarWithback';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Popup from "reactjs-popup";
import backgroundEnd from "../../../../reed_bg.svg"
import CssBaseline from '@mui/material/CssBaseline';
import { useHistory } from "react-router";
import back from '../../../../svgicon/Componenticon/Back.svg'
import { Button } from "@mui/material";
import Slider from '../ShopCartSlider'
import Discount from '../../../../svgicon/Shop/Picturebackground/Discount.svg'
import addtocart from '../../../../svgicon/Shop/word&button/addtocart.svg'
import datas from '../data'
import { useParams } from "react-router";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

export default function ProductDetail() {
    const endbartype='Shop'
    const { id } = useParams();
    const { WishListsdata,ItemDetail } = datas
    const [WishListsdatas, setWishListsdata] = useState((WishListsdata))
    const [addtocartValue, setWishaddtocartValue] = useState(1)
    const history = useHistory();

    const routeChange = () => {
        history.goBack()
    }
    const routeCheckshopcar = () => {
        setPopopen(false)
        let path = '/Shop/Shopcar';
        history.push(path);
    }
    useEffect(() => {
        setWishListsdata(WishListsdatas)
    },[WishListsdatas])
    const [cartItems, setCartItems] = useState(() => {
        const localdata = localStorage.getItem('cartItems');
        return localdata ? JSON.parse(localdata) : []

    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    })

    const onAdd = (product) => {
        setPopopen(true)
        const exist = cartItems.find((x) => x.id === product.id);

        if (exist !== undefined) {
            setCartItems(
                cartItems.map((x) =>
                (
                    x.id === product.id ? { ...exist, qty: exist.qty + addtocartValue } : x

                ))
            );

        } else {
            setCartItems([...cartItems, { ...product, qty: addtocartValue }]);
        }

    };
    const [selectedIndex, setSelectedIndex] = React.useState("")

 
    const handleIndexClick = index => {
        if (selectedIndex === index) {
            setSelectedIndex("")
        } else {
            setSelectedIndex(index)
        }
    }
    const [Popopen, setPopopen] = useState(false);
    const ref = useRef();
    const Tooltip = () => (
        <Popup
            ref={ref}
            open={Popopen}
            modal
            lockScroll
            nested
            closeOnDocumentClick={false}
            onClose={()=> setPopopen(false) }
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    </button>
                    <Grid xs={12} style={{ overflow: 'scroll' }} height='48vh' >
                        <Typography variant='h6' textAlign='center' color='white'>{cartItems.length} 件商品已添加至購物車</Typography>
                        <Grid xs={12} container justifyContent='center' height='5vh' >
                            <Grid xs={12} container justifyContent='center'  ><Button variant='outlined' style={{ color: "white", width: '80%' }} onClick={routeCheckshopcar}>查看購物車</Button></Grid>
                            <Grid xs={12} container justifyContent='center' marginTop='1vh' ><Button variant='outlined' onClick={close} style={{ color: "white", width: '80%' }}>繼續購物</Button></Grid>
                        </Grid>
                    </Grid>
                </div>
            )}
        </Popup>
    );
    return (
        <Box sx={{ flexGrow: 1 }} height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >

                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634" }}>
                            <Toolbar>
                                <Grid container xs={12} justifyContent='center' alignItems='center'>
                                    <Grid container xs={2} justifyContent='center' alignItems='center'>
                                        <img src={back} alt='' width="100%" onClick={routeChange} />

                                    </Grid>
                                    <Grid xs={8}>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            textAlign: 'center'
                                        }}>    Product Detail
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2}></Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Toolbar />
                </Box>
            </React.Fragment>
            <Grid height="100%" container xs={12} justifyContent='center' alignItems='center'  >
                <Grid xs={12} container bgcolor="#242634" justifyContent='center' alignItems='center' >
                    <Grid height="5vh" container xs={12} justifyContent='center' alignItems='center' style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}>
                        <Typography variant="body1" color="#ffffff" >
                        </Typography>
                    </Grid>
                </Grid>

                <Grid xs={11.5} container alignItems='center' justifyContent='center' >
                    <img src={WishListsdata[id].picture[1] !== "s" ? WishListsdata[id].picture[1] : WishListsdata[id].picture} alt='' width="100%" />
                    <Typography>{WishListsdata[id].description}</Typography><br />

                </Grid>
                <Grid xs={10} textAlign='center' container alignItems='center' justifyContent='center'>
                    <Typography variant='boyd2' >
                        <b>HKD {WishListsdata[id].puzzleNeed} </b><img src={WishListsdata[id].puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: 5 }} /> <b>HKD {WishListsdata[id].puzzleNeed} </b><br />  or   {WishListsdata[id].secondpuzzleNeed}    <img src={WishListsdata[id].puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: 5 }} />
                        {WishListsdata[id].secondpuzzleNeed}<br />
                        Discount Details:<img src={Discount} alt='' style={{ position: 'relative', top: 8 }} />
                    </Typography>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={11.5} style={{ backgroundColor: "#FFE57B", padding: '1vh', borderRadius: '10%', marginTop: '3vh' }}>
                    <Slider />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={6} style={{ border: '3px solid black', marginTop: '2vh' }}>
                    <Grid xs={4} container alignItems='center' justifyContent='center' >
                        <Button onClick={() => addtocartValue > 1 && setWishaddtocartValue(addtocartValue - 1)} variant='outlined'>-</Button>
                    </Grid>
                    <Grid xs={4} container alignItems='center' justifyContent='center'>
                        <Typography>{addtocartValue}</Typography>
                    </Grid>
                    <Grid xs={4} container alignItems='center' justifyContent='center' >

                        <Button onClick={() => setWishaddtocartValue(addtocartValue + 1)} variant='outlined'>+</Button>
                    </Grid>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={6} marginTop='2vh' >
                    <img onClick={() => onAdd(WishListsdata[id])} src={addtocart} alt='' width='90%' />
                </Grid>
                <Tooltip />
                <Grid xs={11.5} color='white'  container alignItems='center' justifyContent='center'>
                        <List sx={{ width:"100%" }} >

                            {ItemDetail.map((text, index) => (
                                <Grid xs={12} onClick={() => { handleIndexClick(index)}} 
                              style={{ border: '1.5px solid black', borderRadius: '6%', backgroundColor: "#bfbfbf" }}>
                                    <ListItem button key={text.id} color='white' >
                                        <ListItemText >
                                            <Typography variant='caption' style={{ display: 'inline-block' }} >{text.question}</Typography>
                                        </ListItemText>
                                        {index === selectedIndex ?  <KeyboardArrowUp/>: <KeyboardArrowDown />}
                               
                                    </ListItem>
                                        <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>

                                            <Typography variant='caption' style={{ display: 'inline-block' ,marginLeft:'4%'}} >{index!==0?text.answer:WishListsdata[1].description}</Typography>

                                        </Collapse>
                                </Grid>
                            ))}
                        </List>
                    </Grid>
            </Grid>


            <Grid item xs={12} marginTop="15vh" >
               
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    )
}
