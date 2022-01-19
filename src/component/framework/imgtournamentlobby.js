import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Popup from 'reactjs-popup';
const StyledFab2 = styled(Fab)({
    position: 'absolute',
    zIndex: 0,
    top:0,
    left:0,
    right: 0,
});
export default function ImgTournamentLobby() {
    return (
             <Popup
             trigger={
                 <div className="button">
                     <div >

                         <StyledFab2 size="small" color="secondary" aria-label="add" >
                             <KeyboardArrowRightIcon />
                         </StyledFab2>
                     </div>
                 </div>

             }
             modal
             lockScroll
             closeOnDocumentClick={false}
             nested
         >
             {close => (
                 <div className="modal">
                     <button className="close" onClick={close}>
                         
                     </button>
                     <Grid xs={12} >
                         Game Content
                     </Grid>
                 </div>
             )}
         </Popup>
    );
}
