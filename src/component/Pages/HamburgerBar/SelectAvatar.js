import React from "react";
import AppBar from '@mui/material/AppBar';
import { useParams } from "react-router";
import Popup from 'reactjs-popup';
import EndBar from '../../framework/endbarWithback';
import 'reactjs-popup/dist/index.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import back from '../../../svgicon/Componenticon/Back.svg'
import saveAvatar from '../../../svgicon/Hamburgarbaricon/SaveAvatar.svg';
import digitalStore from '../../../svgicon/Hamburgarbaricon/DigitalStore.svg';
import database from '../../database'
const { Avatardata } = database;

const contentStyle = {
    margin: 'auto',
    background: '#242634',
    width: "95%",
    border:'none',
    height: "40%",
    padding: "5px",
    borderRadius: "5%",
};
export default function SelectAvatar() {
    const endbartype='Pure'
    const { id } = useParams();
    const [bgSelect, setbgSelect] = React.useState(Avatardata[id].id);
    const handlebgChange = (e) => {
        setbgSelect(e)
    };
    const AvatarD = Avatardata.filter(Avatared => Avatared.id < 6).map((Adata) => {
        return <Grid xs={4} container alignItems='center' justifyContent='center' marginTop="1vh" bgcolor={bgSelect === Adata.id ? "red" : ""}>
            <img Click={handlebgChange} value={Adata.id} src={Adata.headicon} onClick={() => handlebgChange(Adata.id)} defalutvalue={2} alt="headicon" width="85%" ></img>

        </Grid>
    })
    const AvatarDLock = Avatardata.filter(Avatared => Avatared.id >= 6).map((Adata) => {
        return <Grid xs={4} container alignItems='center' justifyContent='center'  marginTop="1vh" bgcolor={bgSelect === Adata.id ? "red" : ""}>
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
             <EndBar endbartype={endbartype}/>
                </Grid>
        </Box>
    )
}
