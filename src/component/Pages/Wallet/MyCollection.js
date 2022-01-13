import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from "react-router";
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import ProductDetail from '../../../svgicon/Shop/word&button/ProductDetail.svg'
import OnlineANDOffline from '../../../svgicon/Shop/word&button/OnlineANDOffline.svg'
import ShopToAddress from '../../../svgicon/Shop/word&button/ShopToAddress.svg'
import Popup from "reactjs-popup";
import { useRef } from "react";
import datas from '../Shop/data'
const contentStyle = {
    background: 'white',
    width: "90%",
    height: "75%",
    borderRadius: "5%",
};


const useStyles = makeStyles(theme => ({
    formControl: {
        color: 'white',
        width: "18vh",
        borderColor: 'white'
    },
    selectEmpty: {

    },
    select: {
        height: "5vh",
        "&:before": {
            borderColor: "red"
        },
        "&:after": {
            borderColor: "red"
        },
    },
    outline: {
        "&:before": {
            borderColor: "red"
        },
        "&:after": {
            borderColor: "red"
        },
    },
    icon: {
        fill: 'white',
        borderColor: 'white'
    },
    root: {
        color: 'white',
        borderColor: 'white',
        "& $notchedOutline": {
            borderColor: "red"
        },
        "&:hover $notchedOutline": {
            borderColor: "blue"
        },
        "&$focused $notchedOutline": {
            borderColor: "green"
        }
    },
    inputLabel: {
        color: 'white',
        margin: theme.spacing(-1.3),
        alignSelf: 'center',
        fontSize: "2vh",
        borderColor: 'white'
    }

}));
export default function MyCollection() {
    const endbartype='Pure'
    const ref = useRef();
    const { Collectiondata, ShoppingAddress } = datas
    const [select, setSelect] = React.useState(ShoppingAddress[0].Name);
    const [ContactPerson, setContactPerson] = React.useState(ShoppingAddress[0].ContactPerson);
    const [ContactNumber, setContactNumber] = React.useState(ShoppingAddress[0].ContactNumber);
    const [Address, setAddress] = React.useState(ShoppingAddress[0].Address);


    const handleChange = (event) => {
        setSelect(event.target.value);
        const Thedata = ShoppingAddress.find((x) => x.Name === event.target.value);
        setContactPerson(Thedata.ContactPerson)
        setContactNumber(Thedata.ContactNumber)
        setAddress(Thedata.Address)
    };
    const closeTooltip = () => ref.current.close();
    const [online, setonline] = useState(false);
    const TheCollectiondata = Collectiondata.map((data, index) => {
        return (
            <Grid container xs={6} justifyContent='center' alignItems='center' style={{ textAlign: 'center' }}>
                <Grid xs={11} height="50vh" style={{ textAlign: 'center', border: '1px solid gray', marginTop: '1vh' }}>
                    <Grid xs={12} height="25vh" container justifyContent='center' alignItems='center'>
                        <img src={data.picture} width="100%" alt='' />
                    </Grid>
                    <Grid xs={12} height="10vh" container justifyContent='center' alignItems='center'>
                        <Typography variant='body2'> {data.head}</Typography>
                    </Grid>
                    <Grid xs={12} height="15vh" container justifyContent='center' alignItems='center'>
                        <Grid xs={12} height="7vh" container justifyContent='center' alignItems='center'>
                            <Popup ref={ref}
                                trigger={<div className="button"> <div >   <img src={ProductDetail} width="100%" alt='' />
                                </div></div>}
                                modal
                                lockScroll
                                nested
                                closeOnDocumentClick={false}

                                {...{ contentStyle }}
                            >
                                {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>
                                        </button>
                                        <Grid xs={12} container justifyContent='center' alignItems='center'>
                                            <Grid xs={12} container justifyContent='center' alignItems='center'>
                                                <img src={data.picture} width="50%" alt='' />
                                            </Grid>
                                            <Grid xs={12} height="10vh" container justifyContent='center' alignItems='center'>
                                                <Typography variant='body2'> {data.head}</Typography>
                                                <Grid xs={12} >
                                                    <Typography variant='body2' textAlign='left'>Description:         <Typography variant='caption' textAlign='left'><br />{data.description}</Typography>
                                                    </Typography>
                                                    <Typography variant='body2' textAlign='left'>Remark:         <Typography variant='caption' textAlign='left'><br />{data.Remark}</Typography>
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                    </div>
                                )}
                            </Popup>
                        </Grid>
                        <Grid xs={12} height="7vh" container justifyContent='center' alignItems='center'>

                            <Popup ref={ref}
                                trigger={<div className="button"> <div >
                                    <img src={OnlineANDOffline} width="100%" alt='' />
                                </div></div>}
                                modal
                                lockScroll
                                nested
                                closeOnDocumentClick={false}

                                {...{ contentStyle }}
                            >
                                {close => (

                                    <div className="modal">
                                        <button className="close" onClick={close}>
                                        </button>
                                        <Grid xs={12} container justifyContent='center' alignItems='center'>
                                            <Grid xs={12} container justifyContent='center' alignItems='center' marginBottom='1vh'>
                                                <Grid container justifyContent='center' alignItems='center' xs={6}>
                                                    <Typography onClick={() => setonline(true)} style={{ textDecorationLine: online == true && 'underline' }}>online</Typography>
                                                </Grid>

                                                <Grid container justifyContent='center' alignItems='center' xs={6}>
                                                    <Typography onClick={() => setonline(false)} style={{ textDecorationLine: online == false && 'underline' }}>offline</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid xs={12} container justifyContent='center' alignItems='center' style={{ display: online == true ? '' : 'none' }}>
                                                <Grid xs={12} container justifyContent='center' alignItems='center'>
                                                    <img src={data.QRCODE} width="50%" alt='' />
                                                </Grid>
                                            </Grid>
                                            <Grid xs={12} container justifyContent='center' alignItems='center' style={{ display: online == false ? '' : 'none' }}>
                                                <Grid xs={4} container justifyContent='center' alignItems='center' marginRight='1vh'>
                                                    <Typography variant="caption">ShoppingAddress</Typography>
                                                </Grid>
                                                <Grid xs={7} container >
                                                    <Select
                                                        className={classes.select}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={select}
                                                        label="Address"
                                                        onChange={handleChange}
                                                        width="100%"
                                                        inputProps={{
                                                            classes: {
                                                                icon: classes.icon,
                                                                root: classes.root,
                                                                outline: classes.outline,
                                                            },
                                                        }}
                                                    >
                                                        {ShoppingAddress.map((address, index) => (

                                                            <MenuItem value={address.Name}>{address.Name}</MenuItem>

                                                        ))}

                                                    </Select>
                                                </Grid>

                                                <Grid xs={12} container justifyContent='center' alignItems='center' marginTop='3vh'  >
                                                    <Grid xs={4} container justifyContent='center' alignItems='center' marginRight='1vh'>
                                                        <Typography variant="caption">Contact Person</Typography>
                                                    </Grid>
                                                    <Grid xs={7} container >
                                                        <Typography variant="caption" style={{ textDecorationLine: 'underline', wordBreak: 'break-word', textUnderlinePosition: 'under' }}>{ContactPerson}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs={12} container justifyContent='center' alignItems='center' marginTop='3vh'  >
                                                    <Grid xs={4} container justifyContent='center' alignItems='center' marginRight='1vh'>
                                                        <Typography variant="caption">Contact Number</Typography>
                                                    </Grid>
                                                    <Grid xs={7} container >
                                                        <Typography variant="caption" style={{ textDecorationLine: 'underline', wordBreak: 'break-word', textUnderlinePosition: 'under' }}>{ContactNumber}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs={12} container justifyContent='center' alignItems='center' marginTop='3vh'>
                                                    <Grid xs={4} container justifyContent='center' alignItems='center' marginRight='1vh' >
                                                        <Typography variant="caption">Contact Address</Typography>
                                                    </Grid>
                                                    <Grid xs={7} container justifyContent='center' alignItems='center' >
                                                        <Typography variant="caption" style={{ textDecorationLine: 'underline', wordBreak: 'break-word', textUnderlinePosition: 'under' }}>{Address}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs={8} container justifyContent='center' alignItems='center' marginTop='3vh'>
                                                    <img src={ShopToAddress} alt='' width='100%'/>
                                                </Grid>
                                                <Grid xs={8} container justifyContent='center' alignItems='center' marginTop='3vh'>
                                                   <Typography>运费需由玩家自付</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </div>
                                )}
                            </Popup>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    });
    const history = useHistory();

    const routeChange = () => {
        history.goBack()
    }
    const [Rare, setRare] = React.useState('');
    const [order, setOrder] = React.useState('');
    const classes = useStyles();
    const handleRareChange = (event) => {
        setRare(event.target.value);
    };
    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    };
    return (
        <Box sx={{ flexGrow: 1 }} bgcolor='#242634'>
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid xs={3}>
                        <Link to='/'>
                            <img src={HomeIcon} alt='' width="15%" style={{
                                position: 'fixed',
                                zIndex: 3,
                                top: "72vh",
                                left: 0,
                            }} />
                        </Link>
                    </Grid>
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
                                    <Grid xs={10} >
                                        <Typography variant="body1" component="div" sx={{ textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-10%",
                                        }} >
                                            MY COLLECTION
                                        </Typography>
                                    </Grid>
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
                    <Typography variant="body1" color="#ffffff" >
                    </Typography>
                </Grid>
                <Grid container xs={11.5} height="5vh" style={{ textAlign: 'center' }} justifyContent="center"
                    alignItems="center">
                    <Grid xs={3.5} height="5vh" style={{ textAlign: 'center' }}>
                        <FormControl fullWidth className={classes.formControl} >
                            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}><Typography color='white'>Rare</Typography></InputLabel>
                            <Select
                                className={classes.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Rare}
                                label="Rare"
                                onChange={handleRareChange}
                                inputProps={{
                                    classes: {
                                        icon: classes.icon,
                                        root: classes.root,
                                        outline: classes.outline,
                                    },
                                }}
                            >
                                <MenuItem value={'Rare'} style={{ backgroundColor: 'black' }}><Typography color='white'>Rare</Typography></MenuItem>
                                <MenuItem value={'Unrare'} style={{ backgroundColor: 'black' }}><Typography color='white'>Unrare</Typography></MenuItem>
                                <MenuItem value={'Newest'} style={{ backgroundColor: 'black' }}><Typography color='white'>Newest</Typography></MenuItem>
                                <MenuItem value={'Oldest'} style={{ backgroundColor: 'black' }}><Typography color='white'>Oldest</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={3.5} height="5vh" style={{ textAlign: 'center' }}>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}><Typography color='white'>Order</Typography></InputLabel>
                            <Select
                                className={classes.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={order}
                                label="Order"
                                onChange={handleOrderChange}
                                inputProps={{
                                    classes: {
                                        icon: classes.icon,
                                        root: classes.root,
                                    },
                                }}
                            >
                                <MenuItem value={'High to Low'} style={{ backgroundColor: 'black' }}><Typography color='white'>High to Low</Typography></MenuItem>
                                <MenuItem value={'Low to High'} style={{ backgroundColor: 'black' }}><Typography color='white'>Low to High</Typography></MenuItem>
                            </Select>

                        </FormControl>
                    </Grid>
                    <Grid xs={5} height="5vh" style={{ textAlign: 'center', border: '1px solid gray' }}>
                        <Link to='/Shop/RedeemRecords' style={{ textDecoration: 'none', color: 'white' }}><Typography variant="caption">Redeem Records </Typography></Link>
                    </Grid>
                </Grid>
                {TheCollectiondata}
            </Grid>
            <Grid item xs={12} marginTop="0vh" >
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    )
}


