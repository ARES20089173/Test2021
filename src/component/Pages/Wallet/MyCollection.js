import React, { Component } from "react";
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
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import EndBar from '../../framework/pureEndbar';
import back from '../../../svgicon/Componenticon/Back.svg'
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
import BigRicon from '../../../svgicon/Componenticon/BigRicon.svg'
import Ricon from '../../../svgicon/Componenticon/Ricon.svg'
import Shopicon from '../../../svgicon/Componenticon/Shopicon.svg'
import Gifticon from '../../../svgicon/Componenticon/Gift.svg'
import Gicon1 from '../../../svgicon/GameIcon/Gicon1.svg'
import Gicon2 from '../../../svgicon/GameIcon/Gicon2.svg'
import Gicon3 from '../../../svgicon/GameIcon/Gicon3.svg'
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

const useStyles = makeStyles(theme => ({
    formControl: {
        color:'white',
        width: "18vh",
        borderColor:'white'
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
        borderColor:'white'
    },
    root: {
        color: 'white',
        borderColor:'white',
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
        color:'white',
        margin: theme.spacing(-1.3),
        alignSelf:'center',
        fontSize: "2vh",
        borderColor:'white'
    }

}));
const data = [{
    Year: [2022, 2021],
    Month: ["December", "November", "October", "September", "August", "July", "June", "May", "April", "March", "February", "January"],
    Historyed: [
        { id: 0, Amount: 100, icon: chasepuzzle, icontype: BigRicon, addorminus: "+", setname: " Purchased", haveReceptionPuzzle: chasepuzzle, haveHKD: 15, haveReception: 'Reload', time: null, month: "May", year: 2021, num: 8, unit: "HKD", dtime: '15', htime: '12:24' },
        { id: 1, Amount: 100, icon: chasepuzzle, icontype: Gifticon, addorminus: "+", setname: " Entry", time: "sunday", haveReceptionPuzzle: '', haveReception: '', month: "May", haveHKD: '', year: 2021, num: 100, unit: "PCS", dtime: '15', htime: '12:24' },
        { id: 2, Amount: 100, icon: chasepuzzle, icontype: Gicon3, addorminus: "-", setname: "Rewards", time: "sunday", haveReceptionPuzzle: '', haveReception: '', month: "May", haveHKD: '', year: 2021, num: 100, unit: "PCS", dtime: '25', htime: '12:24' },
        { id: 3, Amount: 100, icon: silverpuzzle, icontype: Shopicon, addorminus: "+", setname: "Assam Chic", haveReceptionPuzzle: '', haveHKD: '', haveReception: 'used', time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '25', htime: '12:24' },
        { id: 4, Amount: 100, icon: silverpuzzle, icontype: Gicon1, addorminus: "-", setname: "Rewards", haveReceptionPuzzle: '', haveHKD: '', haveReception: '', time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '25', htime: '12:24' },
        { id: 5, Amount: 100, icon: chasepuzzle, icontype: Gicon2, addorminus: "-", setname: "Rewards", haveReceptionPuzzle: '', haveHKD: '', haveReception: '', time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '3', htime: '12:24' },
        { id: 6, Amount: 100, icon: silverpuzzle, icontype: Gicon3, addorminus: "+", setname: "Rewards", haveReceptionPuzzle: '', haveHKD: '', haveReception: '', time: null, month: "June", year: 2021, num: 100, unit: "PCS", dtime: '2', htime: '12:24' },
        { id: 7, Amount: 100, icon: silverpuzzle, icontype: Shopicon, addorminus: "+", setname: "Rewards", haveReceptionPuzzle: '', haveHKD: '', haveReception: '', time: null, month: "July", year: 2021, num: 100, unit: "PCS", dtime: '1', htime: '12:24' },
        { id: 8, Amount: 100, icon: chasepuzzle, icontype: Gifticon, addorminus: "-", setname: " Bonus", haveReceptionPuzzle: silverpuzzle, haveHKD: '', haveReception: '', time: null, month: "July", year: 2022, num: 100, unit: "PCS", dtime: '25', htime: '12:24' },
    ]
}
]
export default function MyCollection() {
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
                                        <Link to='/wallet'>
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
                <Grid container xs={12} height="5vh" style={{ textAlign: 'center' }}>
                    <Grid xs={3.5} height="5vh" style={{  textAlign: 'center' }}>
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
                                        outline:classes.outline,
                                    },
                                }}
                            >
                                <MenuItem value={'Rare'} style={{backgroundColor:'black'}}><Typography color='white'>Rare</Typography></MenuItem>
                                <MenuItem value={'Unrare'} style={{backgroundColor:'black'}}><Typography color='white'>Unrare</Typography></MenuItem>
                                <MenuItem value={'Newest'} style={{backgroundColor:'black'}}><Typography color='white'>Newest</Typography></MenuItem>
                                <MenuItem value={'Oldest'} style={{backgroundColor:'black'}}><Typography color='white'>Oldest</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={4.5} height="5vh" style={{ textAlign: 'center' }}>
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
                                <MenuItem value={'High to Low'} style={{backgroundColor:'black'}}><Typography color='white'>High to Low</Typography></MenuItem>
                                <MenuItem value={'Low to High'} style={{backgroundColor:'black'}}><Typography color='white'>Low to High</Typography></MenuItem>
                            </Select>
                            
                        </FormControl>
                    </Grid>
                    <Grid xs={4} height="5vh" style={{  textAlign: 'center', border: '1px solid gray'}}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Typography variant="caption">Redeem Records </Typography></Link>
                    </Grid>
                </Grid>
                <Grid container xs={12} justifyContent='center' alignItems='center'style={{ textAlign: 'center'}}>
                    <Grid xs={5.5} height="50vh" style={{ textAlign: 'center', border: '1px solid gray', marginTop: '1vh' }}>

                    </Grid>
                    <Grid xs={0.5} height="50vh" style={{ textAlign: 'center', }}></Grid>
                    <Grid xs={5.5} height="50vh" style={{ textAlign: 'center', border: '1px solid gray', marginTop: '1vh'  }}>

                    </Grid>
                    <Grid xs={5.5} height="50vh" style={{ textAlign: 'center', border: '1px solid gray', marginTop: '1vh' }}>

                    </Grid>
                    <Grid xs={0.5} height="50vh" style={{ textAlign: 'center', }}></Grid>
                    <Grid xs={5.5} height="50vh" style={{ textAlign: 'center', border: '1px solid gray', marginTop: '1vh' }}>

                    </Grid>

                </Grid>

            </Grid>
            <Grid item xs={12} marginTop="0vh" >
                <EndBar />
            </Grid>
        </Box>
    )
}


