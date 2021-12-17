import React from 'react';
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
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Input from '@mui/material/Input';
import { RWebShare } from "react-web-share";

const ariaLabel = { 'aria-label': 'description' };
const StyledFab2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    bottom: "42vh",
    left: 0,
});
const contentStyle = {
    marginTop: '20%',
    background: '#242634',
    width: "90%",
    height: "60%",
    borderRadius: "5%",
};

function createData(name, silverpuzle, chasepuzzle) {
    return { name, silverpuzle, chasepuzzle };
}

const rows = [
    createData('purchased ', 212, 2120),
    createData('earned', 317, 1148),
    createData('bonus', '-', 649),
];

const userdata = { reesid: 123456, name: 'Jay', headicon: face }
const Toplinkdata = [
    { id: 0, linkName: "Transaction History", link: `/Wallet/TranscationHistory` },
    { id: 1, linkName: "Saved Cards", link: `/Wallet/SaveCards` },
    { id: 2, linkName: "Puzzle Packages", link: "/Wallet/PuzzlePackage" },
    { id: 3, linkName: "My Collection", link: "/Wallet/MyCollection" },
    { id: 4, linkName: "Refer Friends to Earn Puzzles", link: "/Wallet" }
]
export default function MainPage() {

    const history = useHistory();

    const routeChange = () => {
        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
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
                    Searchpic
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
                    <Hotpic/>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh" marginTop="1vh">
                    <img src={featurecourse} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12}>
                    <Featurecourse/>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh" marginTop="1vh">
                    <img src={highlyrecommend} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12}>
                    <Highlyrecommend/>
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
                    <Treasurehunt/>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="12vh" marginTop="1vh">
                    <img src={CATEGORY} style={{ width: '90%' }} alt="" />
                </Grid>
                <Grid item xs={11}>
                    <Category/>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} marginTop="1vh" style={{backgroundColor:'yellow',margin:0}}>
                    <Comment/>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} marginTop="0vh">
                <Grid  style={{backgroundColor:'black',margin:0,height:'5vh'}} container alignItems='center' justifyContent='center' xs={12} >
                <Typography color="#FF00FF"> <b>*PUZZLECHASE *REES</b></Typography>
                </Grid>
                    <EndPage/>
                </Grid>
                <Grid item xs={12} marginTop="10vh">
                    <EndBar />
                </Grid>
            </Grid>
        </Box>
    );
}