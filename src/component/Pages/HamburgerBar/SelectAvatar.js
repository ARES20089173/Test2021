import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import puzzle from '../../../puzzle.svg'
import { useParams } from "react-router";
import Popup from 'reactjs-popup';
import EndBar from '../../framework/pureEndbar';
import 'reactjs-popup/dist/index.css';
import face1 from '../../../face_1.svg'
import face2 from '../../../face_2.svg'
import face3 from '../../../face_3.svg'
import face4 from '../../../face_4.svg'
import face5 from '../../../face_5.svg'
import face6 from '../../../face_6.svg'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import saveAvatar from '../../../svgicon/Hamburgarbaricon/SaveAvatar.svg';
import digitalStore from '../../../svgicon/Hamburgarbaricon/DigitalStore.svg';
const contentStyle = {
    margin: 'auto',
    background: '#242634',
    width: "95%",
    border:'none',
    height: "40%",
    padding: "5px",
    borderRadius: "5%",
};

const Avatardata = [
    { id: 0, headicon: face1 },
    { id: 1, headicon: face2 },
    { id: 2, headicon: face3 },
    { id: 3, headicon: face4 },
    { id: 4, headicon: face5 },
    { id: 5, headicon: face6 },
    { id: 6, headicon: face4 },
    { id: 7, headicon: face5 },
    { id: 8, headicon: face6 },
    { id: 9, headicon: face4 },
    { id: 10, headicon: face5 },
    { id: 11, headicon: face6 },
    { id: 12, headicon: face4 },
    { id: 13, headicon: face5 },
    { id: 14, headicon: face6 },

]
export default function SelectAvatar() {

    const { id } = useParams();
    const [bgSelect, setbgSelect] = React.useState(Avatardata[id].id);
    const handlebgChange = (e) => {
        setbgSelect(e)
    };
    const AvatarD = Avatardata.filter(Avatared => Avatared.id < 6).map((Adata) => {
        return <Grid xs={4} container alignItems='center' justifyContent='center' marginTop="1vh" bgcolor={bgSelect == Adata.id ? "red" : ""}>
            <img Click={handlebgChange} value={Adata.id} src={Adata.headicon} onClick={() => handlebgChange(Adata.id)} defalutvalue={2} alt="headicon" width="85%" ></img>

        </Grid>
    })
    const AvatarDLock = Avatardata.filter(Avatared => Avatared.id >= 6).map((Adata) => {
        return <Grid xs={4} container alignItems='center' justifyContent='center'  marginTop="1vh" bgcolor={bgSelect == Adata.id ? "red" : ""}>
            <img Click={handlebgChange} value={Adata.id} src={Adata.headicon} onClick={() => handlebgChange(Adata.id)} defalutvalue={2} alt="headicon" width="85%" ></img>

        </Grid>
    })

    return (
        <Box sx={{ flexGrow: 1 }}  style={{backgroundColor:'#242634'}}>
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid xs={3} >
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
                        <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634", borderBottom: '1px solid black' }}>
                            <Toolbar>
                                <Grid container xs={12} justifyContent='center' alignItems='center'>
                                    <Grid xs={2}>
                                        <Link to={`/1/Profile`} style={{ position: 'relative', top: 3, right: 10 }}>
                                            <img src={back} alt='' width="75%" />
                                        </Link>
                                    </Grid>
                                    <Grid xs={8}>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                            textAlign: 'center'
                                        }}>     SELECT AVATAR
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
            <Grid xs={12} height="2vh" bgcolor="#8e8b91" >   </Grid>
            <Grid container height="100%" >
                
               <Grid xs={12} container alignItems='center' justifyContent='center' height="40%"  >
       
                    <Grid xs={12} container alignItems='center' justifyContent='center' height="85%" bgcolor="#242634"  >
                    
                        {AvatarD}
                    </Grid>

                    <Grid xs={12} height="15%" container alignItems='center' justifyContent='center' marginTop='1vh'marginBottom='1vh'>
                        <Grid xs={12} container alignItems='center' justifyContent='center'  height="80%">
                            <Popup
                                className="content2"
                                trigger={<img src={saveAvatar} alt='' width="50%"/>}
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
                                            <Typography variant="h4" component="div" color='primary' textAlign='center' >
                                                Avatar save successfully
                                            </Typography>
                                        </Grid>
                                    </div>
                                )}
                            </Popup>
                        </Grid>


                    </Grid>
                </Grid>
                <Grid xs={12} container alignItems='center' justifyContent='center' height="58%"   >
                    <Grid xs={11}  ><img src={digitalStore} alt='' width="100%"/></Grid>
                    <Grid xs={12} container alignItems='center' justifyContent='center' height="85%" bgcolor="#242634" >
                        {AvatarDLock}
                    </Grid>

                </Grid>
            </Grid> 
             <Grid item xs={12} marginTop="0vh" >
                    <EndBar />
                </Grid>
        </Box>
    )
}
