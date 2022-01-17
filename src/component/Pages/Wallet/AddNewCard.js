import React  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Addnewcardbutton from '../../../svgicon/Componenticon/Addnewcardbutton.svg';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom"
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper';
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);
const styles = {
    root: {
        background: "transparent",
        color: "white"
    },
    input: {
        color: "white"
    }
};
function AddNewCard(props) {
    const endbartype='Wallet'
    const [CardHolderName, setHolderName] = React.useState();
    const [CardNumber, setCardNumber] = React.useState();
    const [ExpiryDate, setExpiryDate] = React.useState();
    const [CVC, setCVC] = React.useState();
    const [CardNickName, setCardNickName] = React.useState();
    const handleHolderNameChange = (event) => {
        setHolderName(event.target.value);
    };
    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };
    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    };
    const handleCVCChange = (event) => {
        setCVC(event.target.value);
    };
    const handleCardNickNameChange = (event) => {
        setCardNickName(event.target.value);
    };

    const { classes } = props;

    return (

        <Box sx={{ flexGrow: 1 }} bgcolor='#242634' height="100vh">
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >

                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0, backgroundColor: "#242634" }}>
                            <Toolbar >
                                <Grid xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid xs={2} >
                                        <Link to='/wallet/SaveCards'>
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
                                            ADD NEW CARD
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
                        New Payment Method
                    </Typography>
                </Grid>

                <Grid container justifyContent="center" alignItems="center" xs={12} height="59vh" style={{ textAlign: 'center' }}>

                    <Grid item xs={11} height="17%" >
                        <Typography variant="body2" color="#ffffff" paragraph>
                            To abide by local regulation, we need to
                            verify your identity before you can
                            use CheDiPay. All information will
                            remain confidential and secure
                        </Typography>
                    </Grid>
                    <Grid item xs={11} height="73%" >
                        <TextField
                            id="outlined-basic"
                            label="Card Holder Name"
                            multiline
                            maxRows={4}
                            value={CardHolderName}
                            onChange={handleHolderNameChange}
                            variant="filled"
                            size="small"
                            colorSecondary
                            fullWidth={true}  required
                            className={classes.root}
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                            InputLabelProps={{
                                style: { fontFamily: 'Arial', color: 'white'}
                            }}
                        />
                         <TextField
                            id="outlined-basic"
                            label="Card Number"
                            multiline
                            maxRows={4}
                            value={CardNumber}
                            onChange={handleCardNumberChange}
                            variant="filled"
                            size="small"
                            colorSecondary
                            fullWidth={true}  required
                            className={classes.root}
                            InputLabelProps={{
                                style: { fontFamily: 'Arial', color: 'white'}
                            }}
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                        />
                         <TextField
                            id="outlined-basic"
                            label="Expiry Date MM/YY"
                            multiline
                            maxRows={4}
                            value={ExpiryDate}
                            onChange={handleExpiryDateChange}
                            variant="filled"
                            size="small"
                            colorSecondary  required
                            fullWidth={true}
                            className={classes.root}
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                            style={{color:'white'}}
                            InputLabelProps={{
                                style: { fontFamily: 'Arial', color: 'white'}
                            }}
                        />
                         <TextField
                            id="outlined-basic"
                            label="CVC"
                            multiline
                            maxRows={4}
                            value={CVC}
                            onChange={handleCVCChange}
                            variant="filled"
                            size="small"
                            colorSecondary  required
                            fullWidth={true}
                            className={classes.root}
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                            InputLabelProps={{
                                style: { fontFamily: 'Arial', color: 'white'}
                            }}
                        />
                         <TextField
                            id="outlined-basic"
                            label="Card nickname- Optional"
                            multiline
                            maxRows={4}
                            value={CardNickName}
                            onChange={handleCardNickNameChange}
                            variant="filled"
                            size="small"
                            colorSecondary
                            fullWidth={true}
                            className={classes.root}
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                            InputLabelProps={{
                                style: { fontFamily: 'Arial', color: 'white'}
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} container alignItems='center' justifyContent='center'>
                        <img src={Addnewcardbutton} alt='' width="50%"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} marginTop="0%" >
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    );
}



export default withStyles(styles)(AddNewCard);