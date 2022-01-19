import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import backgroundEnd from "../../../reed_bg.svg"
import { Link } from "react-router-dom"
import NavigationBar from '../../framework/navigationBar';
import EndBar from '../../framework/endbarWithback';
import { Typography } from '@mui/material';
import database from '../../database'
const endbartype='Play'
export default class MultigameChoose extends Component {
  
  render() {

    const { MultiGameChoosedata } = database;
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
            {MultiGameChoosedata.map((pic) => (
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