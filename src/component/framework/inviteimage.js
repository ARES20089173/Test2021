import React from 'react';
import Grid from '@mui/material/Grid';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import pic1 from './img/testPic1.png'
import Typography from '@mui/material/Typography';
import 'reactjs-popup/dist/index.css';
import "../framework/css/cssModFLooby.css"
import Popup from 'reactjs-popup';
export default function inviteimages(){
    return(
        <><Popup
            trigger={<div className="button"> <div onClick={this.oneVoneModehandleClick}><a href><img src={pic1} width="100%" height="65vh" alt="inviteimage" /></a></div></div>}
            modal
            closeOnDocumentClick={false}
            lockScroll
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        <div className="close" onClick={this.handleClick}>
                            &times;
                        </div>
                    </button>
                    <Grid xs={12}>
                        <Typography variant="h4" component="div" color='primary' textAlign='center'>
                            How to play
                        </Typography>
                        <Typography variant="h" component="div" color='primary' textAlign='center'>
                 
                        </Typography>
                        <Grid item xs={12} height="45vh">
                            <div className="video-responsive">

                            </div>
                        </Grid>
                        <Typography variant="h4" component="div" color='primary' textAlign='center'>
                            POWERED BY R<KeyboardArrowDown />
                        </Typography>
                    </Grid>
                </div>
            )}
        </Popup></>
    );
}