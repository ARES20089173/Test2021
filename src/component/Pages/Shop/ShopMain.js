import React from 'react';
import Grid from '@mui/material/Grid';
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
    const [values, setValues] = React.useState({
        password: '',
        showPassworda: true,
        showPasswordb: true,
        showicon: false,
    });
    return (
        <Box sx={{ flexGrow: 1 }} height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
            <Grid item xs={12} style={{borderBottom:'1px solid black'}} >
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
                   <Categorychooser/>
                </Grid>
                <Grid container alignItems='center' justifyContent='center' xs={12} height="10vh">
                   <img src={Gamenowplaylater}  style={{width:'90%'}} alt=""/>
                </Grid>
                

                <Grid item xs={12} marginTop="20vh">
                    <EndBar />
                </Grid>
            </Grid>
        </Box>
    );
}