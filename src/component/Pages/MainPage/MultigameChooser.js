import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import Fab from '@mui/material/Fab';
import backgroundEnd from "../../../reed_bg.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import NavigationBar from '../../framework/navigationBar';
import EndBar from '../../framework/endbar';
import { Typography } from '@mui/material';
const StyledFab2 = styled(Fab)({
  position: 'fixed',
  zIndex: 3,
  bottom: "27%",
  left: "0%",

});
export default class MultigameChoose extends Component {
  render() {

    const data = [
      { id: 0, src: 'img/square.jpeg', name: "2048", number: 52 },
      { id: 1, src: 'img/square1.jpeg', name: "原神", number: 56 },
      { id: 2, src: 'img/square2.jpeg', name: "LoL", number: 55 },
      { id: 3, src: 'img/square.jpeg', name: "2048", number: 53 },
      { id: 4, src: 'img/square1.jpeg', name: "原神", number: 54 },
      { id: 5, src: 'img/square2.jpeg', name: "LoL", number: 51 },
      { id: 6, src: 'img/square.jpeg', name: "2048", number: 52 },
      { id: 7, src: 'img/square1.jpeg', name: "原神", number: 58 },
      { id: 8, src: 'img/square2.jpeg', name: "LoL", number: 88 },
      { id: 9, src: 'img/square.jpeg', name: "2048", number: 25 },
      { id: 10, src: 'img/square1.jpeg', name: "原神", number: 95 },
      { id: 11, src: 'img/square2.jpeg', name: "LoL", number: 85 },
      { id: 12, src: 'img/square.jpeg', name: "2048", number: 75 },
      { id: 13, src: 'img/square1.jpeg', name: "原神", number: 65 },
      { id: 14, src: 'img/square2.jpeg', name: "LoL", number: 55 },
      { id: 15, src: 'img/square.jpeg', name: "2048", number: 54 },
      { id: 16, src: 'img/square1.jpeg', name: "原神", number: 53 },
      { id: 17, src: 'img/square2.jpeg', name: "LoL", number: 52 },
      { id: 18, src: 'img/square.jpeg', name: "2048", number: 51 },
    ];
    return (

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          style={{ backgroundImage: `url(${backgroundEnd})`,backgroundSize: '100% ',backgroundAttachment:'fixed'}}
        >
          <Grid item xs={12} >
            <Link to='/'>
              <StyledFab2 size="small" color="secondary" aria-label="add">
                <ArrowBackIcon />
              </StyledFab2>
            </Link>
            <NavigationBar />
          </Grid>

          <Grid container item xs={12}    justifyContent='left' style={{ paddingTop:'2vh' ,backgroundAttachment:'fixed' }} >
            {data.map((pic) => (
              <Grid item xs={4} style={{ height: "23vh" }} key={pic.id} alignItems="center">
                <Link to={`multigameChooser/tournamentLobby/${pic.id}`}>
                  <div style={{ textAlign: 'center' }}><img src={pic.src} alt="img" width="80%" />
                  </div>
                </Link>
                <Typography variant="body2" style={{ textAlign: 'center' }}color='primary'>{pic.name}</Typography><Typography variant="body2" style={{ textAlign: 'center' }}color='primary'>{pic.number} PLAYING NOW</Typography>
              </Grid>
            ))}
            <Grid item xs={12} style={{ marginTop: "9vh" }}>
              <EndBar />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}