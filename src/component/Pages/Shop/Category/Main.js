import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EndBar from '../../../framework/endbarWithback';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Popup from "reactjs-popup";
import backgroundEnd from "../../../../reed_bg.svg"
import Search from '../Search'
import CssBaseline from '@mui/material/CssBaseline';
import Searchpic from '../../../../svgicon/Shop/word&button/Search.svg'
import { useHistory } from "react-router";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import FavoriteIcon from '@mui/icons-material/Favorite';
import back from '../../../../svgicon/Componenticon/Back.svg'
import Swiper from './Swiper'
import { useParams } from "react-router";
import datas from '../data'
const contentStyle = {
    background: 'white',
    width: "90%",
    height: "50%",
    borderRadius: "5%",

};
export default function MainCategory() {
    const endbartype='Shop'
    const { type } = useParams();
    const { Maincategorytype } = datas
    const [typedata, settypedatas] = useState((Maincategorytype[type]))


    const history = useHistory();

    const routeChange = () => {
        history.goBack()
    }
    const routeDetail = (id) => {
        let path = `/Shop/MyWishList/${id}/ProductDetail`;
        history.push(path);
    }
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open)
    }
    const visiable = (product) => {

        if (product.visiable === undefined || product.visiable === true) {

            settypedatas(
                typedata.map((x) =>
                (
                    x.id === product.id ? { ...product, visiable: false } : x
                ))
            );
        } else {
            settypedatas(
                typedata.map((x) =>
                (
                    x.id === product.id ? { ...product, visiable: true } : x
                ))
            );
        }

    };
    const TheWishdata = typedata.map((data, index) => {

        return (

            <Grid xs={12} onClick={() => visiable(data)} style={{ height: '30vh', marginBottom: '4vh', backgroundImage: `url(${(data.picture[1]) !== "s" ? data.picture[1] : data.picture})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'local' }}>

                <Grid xs={12} container alignItems='center' justifyContent='center' marginTop="1vh" style={{ visibility: data.visiable !== false && 'hidden', height: '27vh', backgroundColor: " rgba(0, 0, 0, 0.35)" }}>
                    <Grid xs={12} container alignItems='center' justifyContent='center'  >
                        <Typography color='white' variant='h6' textAlign='center' >
                            {data.description}
                        </Typography>
                        <Grid xs={10} textAlign='center' style={{ border: '1px solid black' }}>
                            <Typography variant='boyd2' >
                                <b>HKD {data.puzzleNeed} </b><img src={data.puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: 5 }} /> <b>HKD {data.puzzleNeed} </b><br />  or   {data.secondpuzzleNeed}    <img src={data.puzzleType} width='10%' alt='' style={{ position: 'relative', left: 2, top: 5 }} />
                                {data.secondpuzzleNeed}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={6} container alignItems='center' justifyContent='center' backgroundColor='gray' zIndex='2' >
                        <IconButton onClick={() => routeDetail(data.id)}>
                            <Visibility />
                        </IconButton>
                    </Grid>
                    <Grid xs={6} container alignItems='center' justifyContent='center' backgroundColor='gray' zIndex='2' >

                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid xs={12} container alignItems='center' justifyContent='center'  >
                    <Typography variant='boyd2' >
                        {data.head}
                    </Typography>
                </Grid>
                {typedata.length === index + 1 ? "" : <hr />}
            </Grid>
        )
    });
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
                                        }}>    {type}
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
                            Click To Search Your Favourite Product
                        </Typography>
                    </Grid>
                </Grid>
                <Swiper picture={typedata}/>
                <Grid container alignItems='center' justifyContent='center' xs={12} >
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
                <Grid xs={11.5} container alignItems='center' justifyContent='center' >
                    {TheWishdata}
                </Grid>
            </Grid>

            <Grid item xs={12} marginTop="15vh" >
                
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    )
}
