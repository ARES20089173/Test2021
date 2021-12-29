import * as React from 'react';
import { useHistory } from 'react-router';
import Drawer from "@mui/material/Drawer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Hamburgicon from '../../svgicon/Componenticon/Hamburgicon.svg'
import { Grid } from '@mui/material';
import Close from '../../svgicon/Componenticon/Close.svg'
import CssBaseline from '@mui/material/CssBaseline';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom';
import Logout from '../../logout.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import puzzle from "../../svgicon/Componenticon/Chasepuzzle.svg"
import coderedeem from '../../coderedeem.svg'
import TextField from '@mui/material/TextField';
import Shopcar from '../../svgicon/WalletTrans/Shopcar.svg'
import SignIn from '../../svgicon/Shop/word&button/SignIn.svg'
import SignUp from '../../svgicon/Shop/word&button/SignUp.svg'
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import PuzzleChase from '../../svgicon/EndBaricon/PuzzleChase.svg'
const userdata = [
    { id: 0, level: 'Lv1', ReesID: 1, nickname: 'Jay' },
]
const Toplinkdata = [
    { id: 0, linkName: "ACCOUNT  DETAILS", link: "/1/Profile" },
    { id: 1, linkName: "MY COLLECTIONS", link: "/Wallet/MyCollection" },
    { id: 2, linkName: "MY WISHLISTS", link: "/Shop/MyWishList" },
    { id: 3, linkName: "EVENTS", link: "/Events" },
    { id: 4, linkName: "BUY PUZZLES", link: "/Wallet/PuzzlePackage" }
    // { id: 5, linkName:"PROFILE"},
    // { id: 6, linkName:"PROFILE"},
    // { id: 7, linkName:"PROFILE"},
    // { id: 8, linkName:"PROFILE"},
]
const Bottomlinkdata = [
    { id: 0, linkName: "About PUZZLECHASE Shop", link: "/" },
    { id: 1, linkName: "Shop FAQ", link: "/MissionMain/FAQ" },
    { id: 2, linkName: "Privacy Policy", link: "/MissionMain/Policy" },
    { id: 3, linkName: "Terms of Services", link: "/MissionMain/Service" },
    { id: 4, linkName: "Press", link: "/" },
    { id: 5, linkName: "Terms & Conditions", link: "/" },
    { id: 6, linkName: "Partnership Opportunities", link: "/" },
    { id: 7, linkName: "Disclaimer", link: "/" },
    { id: 8, linkName: "Logout", link: "/login" },
]
export default function NavigationBar() {

const history = useHistory();

const routeChange = () => {
    console.log("textmessage")
    let path = `/Shop/Shopcar`;
    history.push(path);
}
const routeChange2 = () => {
    console.log("textmessage")
    let path = `/Shop`;
    history.push(path);
}
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(90deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    }));
    const [expanded, setexpanded] = React.useState(false)
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 280, height: "100vh", backgroundColor: "#242634", overflow: "scroll" }}
            role="presentation"
        >
            <List>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer("right", false)}
                    sx={{ left: "50%", bottom: 5 }}

                >
                    <img src={Close} alt='hamburgericon' width='40%' style={{ position: 'relative', left: 60 }} />
                </IconButton>
                <ListItemText  >  <Grid container xs={10} alignItems="center" style={{ marginLeft: "6%" }}><Typography color='white'>Shop with PUZZLES    </Typography><img src={puzzle} width="10%" style={{ marginLeft: "2%", position: 'relative', bottom: 2 }} /></Grid></ListItemText>
                <ListItem style={{ color: 'white' }} >   <Grid container xs={3} justifyContent='center' marginRight='1vh'> <Link to="#"><img src={SignIn} alt="" width="100%" /></Link>  </Grid>  <Grid container xs={3} justifyContent='center'> <Link to="#"> <img src={SignUp} alt="" width="100%" /></Link></Grid> </ListItem>
                <ListItem >
                    <ListItemText style={{ fontSize: '0.7em' }} sx={{ color: 'white', border: "2px solid white" }}>
                        <Grid xs={12} container alignItems="center">
                            <Grid xs={11} container alignItems="center">
                                <TextField id="input-with-sx" fullWidth variant="standard" style={{ marginRight: '3%' }} />
                            </Grid>
                            <Grid xs={1} container alignItems="center">
                                <img src={coderedeem} alt="coderedeem" />
                            </Grid>
                        </Grid>
                    </ListItemText>
                </ListItem>
                <ListItem button style={{ color: 'white' }}>
                    <ListItemText >
                        CATEGORY
                    </ListItemText>
                    <ExpandMore
                        expand={expanded}
                        onClick={() => setexpanded(!expanded)}
                        aria-expanded={expanded}
                        aria-label="show more"
                        color="success"
                    >
                        <KeyboardArrowRightIcon />
                    </ExpandMore>
                </ListItem>
                <Collapse in={expanded} timeout="auto" unmountOnExit style={{ width: "100%" }} >
                    <Grid container xs={12} alignItems="center" justifyContent='center'>
                        <Grid container alignItems="center" justifyContent='center' xs={6}><Typography color="red">ANIME</Typography></Grid>
                        <Grid container alignItems="center" justifyContent='center' xs={6} ><Typography color="pink">BEAUTY</Typography></Grid>
                        <Grid container alignItems="center" justifyContent='center' xs={6}><Typography color="white">COURSE</Typography></Grid>
                        <Grid container alignItems="center" justifyContent='center' xs={6} ><Typography color="blue">DIGITAL</Typography></Grid>
                        <Grid container alignItems="center" justifyContent='center' xs={6}><Typography color="green">GOURMENT</Typography></Grid>
                        <Grid container alignItems="center" justifyContent='center' xs={6} ><Typography color="yellow">HEALTH</Typography></Grid>
                        <Grid container alignItems="center" justifyContent='center' xs={6}><Typography color="orange">GADGET</Typography></Grid>
                        <Grid container alignItems="center" justifyContent='center' xs={6} ><Typography color="purple">VIRTUAL</Typography></Grid>
                    </Grid>
                </Collapse>
                {Toplinkdata.map((text, index) => (
                    <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button key={text.id}>
                            <ListItemText >
                                {text.linkName}
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}

            </List>
            <List style={{ top: "10%", textDecoration: 'none', color: 'white' }}  >
                {Bottomlinkdata.slice(0, 8).map((text, index) => (
                    <ListItem button key={text.id}>
                        <ListItemText >
                            <Link to={text.link} style={{ textDecoration: 'none', color: 'white' }}>{text.linkName}  </Link>
                        </ListItemText>
                    </ListItem>
                ))}
                <ListItem >
                    <ListItemText >
                        <Link to={Bottomlinkdata[8].link} style={{ textDecoration: 'none', color: 'white' }}>{Bottomlinkdata[8].linkName}   <img src={Logout} alt="logout" /></Link>
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }} >
                <CssBaseline />
                <AppBar position="fixed" elevation={0} align='center' style={{ backgroundColor: '#242634' }} sx={{ margin: 0 }} >
                    <Toolbar variant="dense">
                        <Grid container xs={12} justifyContent='center' alignItems='center' >
                            <Grid xs={1} container justifyContent='center' alignItems='center' >
                                <img  onClick={routeChange} src={Shopcar} className="App-logo" alt="logo" width="100%" style={{}} />

                            </Grid>
                            <Grid xs={10} container justifyContent='center' alignItems='center' >
                                <img src={PuzzleChase}  onClick={routeChange2} className="App-logo" alt="logo" width="25%" style={{}} />
                            </Grid>
                            <Grid xs={1} container justifyContent='center' alignItems='center' >
                                <img src={Hamburgicon} alt='hamburgericon' style={{
                                    position: 'absolute',
                                    top: 8,
                                    left: 0,
                                    margin: '0 90%',
                                }} width="10%" height="90%" onClick={toggleDrawer("right", true)} />

                                <Drawer
                                    anchor={"right"}
                                    open={state["right"]}
                                    onClose={toggleDrawer("right", false)}
                                >
                                    {list("right")}
                                </Drawer>
                            </Grid>


                        </Grid>
                    </Toolbar>
                </AppBar>

                <Toolbar />
            </Box>
        </React.Fragment>
    );
}
