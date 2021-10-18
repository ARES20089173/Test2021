import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import puzzle from '../../../puzzle.svg'
import { useParams } from "react-router";
import Popup from 'reactjs-popup';
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
import HomeIcon from '@mui/icons-material/Home'
import { Button } from "@mui/material";
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
    const AvatarD = Avatardata.filter(Avatared=>Avatared.id <6).map((Adata) => {
        return <Grid xs={4} container alignItems='center' justifyContent='center'bgcolor={bgSelect == Adata.id ? "red" : ""}>
          <img Click={handlebgChange}  value={Adata.id}src={Adata.headicon}  onClick={()=>handlebgChange(Adata.id)}defalutvalue={2} alt="headicon" width="85%" ></img>
          
        </Grid>
    })
    const AvatarDLock = Avatardata.filter(Avatared=>Avatared.id >=6).map((Adata) => {
        return <Grid xs={4} container alignItems='center' justifyContent='center'bgcolor={bgSelect == Adata.id ? "red" : ""}>
          <img Click={handlebgChange}  value={Adata.id}src={Adata.headicon}  onClick={()=>handlebgChange(Adata.id)}defalutvalue={2} alt="headicon" width="85%" ></img>
          
        </Grid>
    })

    return (
        <Box sx={{ flexGrow: 1 }}  >
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid xs={3} >
                        <Link to='/'>
                            <StyledFab size="small" color="secondary" aria-label="add">
                                <HomeIcon />
                            </StyledFab>
                        </Link>
                    </Grid>
                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0 }}>
                            <Toolbar>
                                <Link to={`/${id}/Profile`}>
                                    <StyledFab2 size="small" color="secondary" aria-label="add">
                                        <ArrowBackIcon />
                                    </StyledFab2>
                                </Link>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                    SELECT AVATAR  
                                </Typography>
                                <Grid xs={1}></Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Toolbar />
                </Box>
            </React.Fragment>
            <Grid container height="100%" >
                <Grid xs={12} height="2%" > </Grid>
                <Grid xs={12} container alignItems='center' justifyContent='center' height="40%"  >
                    <Grid xs={12} container alignItems='center' justifyContent='center' height="85%" bgcolor="#707070"  >
                        {AvatarD}
                    </Grid>

                    <Grid xs={12} height="15%"  container alignItems='center' justifyContent='center'>
                        <Grid xs={4} container bgcolor="red"  alignItems='center' justifyContent='center' color='white' height="80%" style={{ borderRadius: "25%" }}>
                            <Popup
                                className="content2"
                                trigger={<Typography color="primary" style={{ color: 'red', backgroundColor: "white" }} >SAVE Avatar</Typography>}
                                modal
                                lockScroll
                                nested
                                {...{ contentStyle }}
                            >
                                {close => (
                                    <div className="modal2">
                                        <button className="close" onClick={close}>
                                            <div className="close" >
                                                &times;
                                            </div>
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
                <Grid xs={12} container alignItems='center' justifyContent='center' height="58%"  >
                    <Grid xs={11} height="15%"  ><Button variant="contained" size='small' style={{ borderRadius: 50 }}>FOR MOER CHOICES, PLEASE COME VISIT OUR DIGITAL ART STORE</Button> </Grid>
                    <Grid xs={12} container alignItems='center' justifyContent='center' height="85%" bgcolor="#707070" >
                        {AvatarDLock}
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )
}
