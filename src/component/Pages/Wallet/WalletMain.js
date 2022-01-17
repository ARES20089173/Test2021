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
import NavigationBar from '../../framework/navigationBar';
import face from '../../../svgicon/Headicon/face_1.svg'
import BigPuzzle from '../../../svgicon/Componenticon/Bigpuzzle.svg'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import referimg from '../../../svgicon/Advertise/Referfriend.svg'
import powerby from '../../../svgicon/PowerBy/PowerByR.svg'
import { Button } from '@mui/material';
import "../../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
import TableRow from '@mui/material/TableRow';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EndBar from '../../framework/endbarWithback';
import Input from '@mui/material/Input';

import { RWebShare } from "react-web-share";

const contentStyle = {
    marginTop: '20%',
    background: '#242634',
    width: "90%",
    height: "60%",
    borderRadius: "5%",
};

function createData(name, Type, puzzleBalance) {
    return { name, Type, puzzleBalance };
}

const rows = [
    createData('Chase', Chasepuzzle, 212),
    createData('Silver', SilverPuzzle, 2122),
    createData('pubg', Chasepuzzle, 3212),
    createData('3hk', Chasepuzzle, 2512),
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
    const endbartype='Wallet'
    const [values, setValues] = React.useState({
        password: '',
        showPassworda: true,
        showPasswordb: true,
        showicon: false,
    });
    const handleClickShowPassworda = () => {
        setValues({
            ...values,
            showPassworda: false,
            showPasswordb: false,
        });
    };
    const handleClickShowPasswordb = () => {
        setValues({
            ...values,
            showPassworda: true,
            showPasswordb: true,
        });
    };
    const handleClickShowicon = () => {
        setValues({
            ...values,
            showicon: !values.showicon,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{ flexGrow: 1 }} height="100%" style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% 100%', backgroundAttachment: 'fixed' }}>
            <Grid item xs={12}  >
                <NavigationBar />
            </Grid>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} height="4vh"  >
                    <div style={{ textAlign: 'center', backgroundColor: '#8e8b91' }}>
                        Hi,{userdata.name}
                    </div>
                </Grid>
                <Grid xs={12} height="30vh" >
                    <Grid container justifyContent="center"
                        alignItems="center" xs={12} height="60%" style={{ backgroundImage: `url(${userdata.headicon})`, backgroundSize: '100% 100%', backgroundAttachment: 'cover', }}>
                        <Popup
                            className="content2"
                            trigger={<img src={Codeicon} alt='' width="10%" style={{ position: 'relative', left: 30, top: 40 }} />

                            }
                            modal
                            lockScroll
                            nested
                            {...{ contentStyle }}
                        >
                            {close => (
                                <div className="modal2">
                                    <button className="close" onClick={close}>

                                    </button>
                                    <Grid xs={12} marginTop="0vh" height="100%" container justifyContent="center" alignItems="center">
                                        <Typography variant="h6" component="div" color='primary' textAlign='center' >
                                            Pay Now!
                                        </Typography>
                                        <img src={Code} alt='' width="100%" />
                                    </Grid>
                                </div>
                            )}
                        </Popup>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center"
                        alignItems="center" height="40%" >
                        <Grid item xs={3} container height="100%"   >
                            <img src={BigPuzzle} alt="puzzle" width="55%" style={{ left: '40%', position: 'relative' }} />
                        </Grid>

                        <Grid item xs={9} container
                            alignItems="center" height="100%"  >
                            <Grid container
                                alignItems="center" xs={12} height="25%" ><Typography variant='caption' color="white" >estimated asset value: (HKD equiv.)
                                    <Popup
                                        className="content2"
                                        trigger={<img src={greenicon} alt='' width="8%" />
                                        }
                                        modal
                                        lockScroll
                                        nested
                                        {...{ contentStyle }}
                                    >
                                        {close => (
                                            <div className="modal2">
                                                <button className="close" onClick={close}>

                                                </button>
                                                <Grid xs={12} marginTop="7vh">
                                                    <Typography variant="h5" component="div" color='primary' textAlign='center' >
                                                        (!)
                                                        Your account assets may not be
                                                        up to date due to calculation delay.
                                                        For an accurate balance,
                                                        please go to relevant account page.

                                                    </Typography>
                                                </Grid>
                                            </div>
                                        )}
                                    </Popup></Typography></Grid>
                            <Grid item xs={5} container
                                alignItems="center" height="50%">
                                <Input
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowicon}
                                                onMouseDown={handleMouseDownPassword}

                                            >
                                                {values.showicon ? <Visibility color='primary' /> : <VisibilityOff color='primary' />}
                                            </IconButton>
                                        </InputAdornment>
                                    } type={values.showicon ? 'text' : 'password'}
                                    readOnly={true}
                                    disableUnderline={true}
                                    defaultValue="1,207.85"
                                    style={{ color: "white" }} /></Grid>


                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} height="4vh" container bgcolor='#8e8b91' style={{}}>
                    <Grid item xs={6} height="4vh" onClick={handleClickShowPassworda} style={{ borderBottom: values.showPassworda ? "" : "3px solid white" }}></Grid>
                    <Grid item xs={6} height="4vh" onClick={handleClickShowPasswordb} style={{ borderBottom: values.showPasswordb ? "3px solid white" : '' }}></Grid>
                </Grid>

                <Grid item xs={12} height="25vh" display={values.showPassworda ? "none" : "block"} style={{}}>
                    <List >
                        {Toplinkdata.slice(0, 4).map((text, index) => (
                            <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItem button key={text.id} >
                                    <ListItemText >
                                        {text.linkName}
                                    </ListItemText>
                                    <KeyboardArrowRightIcon />
                                </ListItem>
                            </Link>
                        ))}
                        <Popup
                            trigger={
                                <ListItem button style={{ color: 'white' }} ><ListItemText >   {Toplinkdata[4].linkName}  </ListItemText>
                                    <KeyboardArrowRightIcon />
                                </ListItem>}
                            modal
                            nested
                            {...{ contentStyle }}
                        >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>

                                    </button>
                                    <Grid xs={12}>
                                        <Typography variant="body2" component="div" color='primary' textAlign='center'>
                                            refer friends & earn up to $500 puzzles
                                        </Typography>
                                        <Typography variant="caption" component="div" color='primary' textAlign='center'>
                                            Referal Code
                                        </Typography>

                                        <Grid item xs={12} height="38vh">
                                            <div className="video-responsive">
                                                <Grid xs={12} textAlign='center' >
                                                    <RWebShare
                                                        data={{
                                                            text: '复制这段code ILOVEREESPUZZLES 进入我们的官网',
                                                            url: "https://puzzlegame2021.netlify.app/p",
                                                            title: "Share With your friends!",
                                                        }}
                                                        onClick={() => console.log("shared successfully!")}
                                                    >
                                                        <Button variant='outlined'>ILOVEREESPUZZLES</Button>
                                                    </RWebShare>
                                                </Grid>
                                                <Typography variant="body2" component="div" color='primary' textAlign='center'>

                                                    <img src={referimg} width="70%" alt="referimage" />
                                                    <img src={powerby} width="40%" alt=''/>
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Popup>

                    </List>

                </Grid>
                <Grid item xs={12} height="25vh" display={values.showPasswordb ? "block" : "none"} style={{}} >
                    <TableContainer >
                        <Table sx={{}} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center"><Typography color='white'>Balance</Typography></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" >

                                            <img src={row.Type} alt='' width='11%' style={{ float: 'left',marginRight:'5vh' }} />
                                            <Typography color='white'  >
                                                {row.name} Puzzle
                                            </Typography>

                                        </TableCell>
                                        <TableCell align="center"><Typography color='white'>{row.puzzleBalance}</Typography></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>


                <Grid item xs={12} marginTop="20vh">
                <EndBar endbartype={endbartype}/>
                </Grid>
            </Grid>
        </Box>
    );
}