import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import backgroundEnd from "../../../reed_bg.svg"
import { Link } from "react-router-dom"
import Gicon1 from '../../../svgicon/GameIcon/Gicon1.svg'
import Gicon2 from '../../../svgicon/GameIcon/Gicon2.svg'
import Gicon3 from '../../../svgicon/GameIcon/Gicon3.svg'
import Gicon4 from '../../../svgicon/GameIcon/Gicon4.svg'
import Gicon5 from '../../../svgicon/GameIcon/Gicon5.svg'
import Gicon6 from '../../../svgicon/GameIcon/Gicon6.svg'
import Gicon7 from '../../../svgicon/GameIcon/Gicon7.svg'
import Gicon8 from '../../../svgicon/GameIcon/Gicon8.svg'
import Gicon9 from '../../../svgicon/GameIcon/Gicon9.svg'
import Gicon10 from '../../../svgicon/GameIcon/Gicon10.svg'
import Gicon11 from '../../../svgicon/GameIcon/Gicon11.svg'
import Gicon12 from '../../../svgicon/GameIcon/Gicon12.svg'
import Gicon13 from '../../../svgicon/GameIcon/Gicon13.svg'
import Gicon14 from '../../../svgicon/GameIcon/Gicon14.svg'
import Gicon15 from '../../../svgicon/GameIcon/Gicon15.svg'
import NavigationBar from '../../framework/navigationBar';
import EndBar from '../../framework/endbarWithback';
import { Typography } from '@mui/material';
// const StyledFab2 = styled(Fab)({
//   position: 'fixed',
//   zIndex: 3,
//   bottom: "27%",
//   left: "0%",

<link
  rel="preconnect" href="https://fonts.gstatic.com"
  href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap" rel="stylesheet"
/>
// });

const endbartype='Play'
export default class MultigameChoose extends Component {
  
  render() {

    const data = [
      { id: 0, src: Gicon1, name: "Onmyoji Arena", number: 52 },
      { id: 1, src: Gicon2, name: "TOM & JERRY: CHASE", number: 56 },
      { id: 2, src: Gicon3, name: "Super Mecha Champions", number: 55 },
      { id: 3, src: Gicon4, name: "Side Force Don't Fall", number: 53 },
      { id: 4, src: Gicon5, name: "Seven Squids", number: 54 },
      { id: 5, src: Gicon6, name: "Punch Box", number: 51 },
      { id: 6, src: Gicon7, name: "Iron Space", number: 52 },
      { id: 7, src: Gicon8, name: "Candy Robber", number: 58 },
      { id: 8, src: Gicon9, name: "Fruit Matching", number: 88 },
      { id: 9, src: Gicon10, name: "Falling Cubes", number: 25 },
      { id: 10, src: Gicon11, name: "Box Tower ", number: 95 },
      { id: 11, src: Gicon12, name: "Jumper Frog", number: 85 },
      { id: 12, src: Gicon13, name: "2048", number: 75 },
      { id: 13, src: Gicon14, name: "HEXTRIS", number: 65 },
      { id: 14, src: Gicon15, name: "FISHING FRENZY", number: 55 },
    ];
    return (

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          style={{ backgroundImage: `url(${backgroundEnd})`, backgroundSize: '100% ', backgroundAttachment: 'fixed' }}
        >
          <Grid item xs={12} >
            <NavigationBar />
          </Grid>

          <Grid container item xs={12} justifyContent='center' style={{ paddingTop: '2vh', backgroundAttachment: 'fixed' }} >
            {data.map((pic) => (
              <Grid item xs={3.9} style={{ height: "23vh" }} key={pic.id} alignItems="center">
                <Link to={`multigameChooser/tournamentLobby/${pic.id}`}>
                  <div style={{ textAlign: 'center' }}><img src={pic.src} alt="img" width="80%" />
                  </div>
                </Link>
                <Typography variant="body2" noWrap style={{ textAlign: 'center', fontFamily: 'Hanalei Fill' }} color='white' >{pic.name} <br /> <Typography noWrap variant="caption" align='center' style={{ textAlign: 'center' }} color='white'>{pic.number} PLAYING NOW</Typography>
                </Typography>
              </Grid>

            ))}
            <Grid item xs={12} >
              <EndBar endbartype={endbartype}/>
            </Grid>

            <Grid item xs={12} style={{ height: "28vh" }} />

          </Grid>
        </Grid>
      </Box>
    );
  }
}