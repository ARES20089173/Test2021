import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavigationBar from '../../framework/navigationBar';
import EndBarWithback from '../../framework/endbarWithback';
import { Typography } from '@mui/material';
export default class MultigameChoose extends Component {
  render() {

    const data = [
      { id: 1, src: 'img/square.jpeg' ,name:"2048"},
      { id: 2, src: 'img/square1.jpeg',name:"原神"},
      { id: 3, src: 'img/square2.jpeg' ,name:"LoL"},
      { id: 4, src: 'img/square.jpeg',name:"2048" },
      { id: 5, src: 'img/square1.jpeg' ,name:"原神"},
      { id: 6, src: 'img/square2.jpeg',name:"LoL" },
      { id: 7, src: 'img/square.jpeg' ,name:"2048"},
      { id: 8, src: 'img/square1.jpeg' ,name:"原神"},
      { id: 9, src: 'img/square2.jpeg' ,name:"LoL"},
      { id: 10, src: 'img/square.jpeg' ,name:"2048"},
      { id: 11, src: 'img/square1.jpeg' ,name:"原神"},
      { id: 12, src: 'img/square2.jpeg' ,name:"LoL"},
      { id: 13, src: 'img/square.jpeg' ,name:"2048"},
      { id: 14, src: 'img/square1.jpeg' ,name:"原神"},
      { id: 15, src: 'img/square2.jpeg' ,name:"LoL"},
      { id: 16, src: 'img/square.jpeg' ,name:"2048"},
      { id: 17, src: 'img/square1.jpeg' ,name:"原神"},
      { id: 18, src: 'img/square2.jpeg' ,name:"LoL"},
      { id: 19, src: 'img/square2.jpeg' ,name:"LoL"},
    ];
    return (

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
        >
          <Grid item xs={12}  style={{marginBottom:"1.5vh"}}>
            <NavigationBar />
          </Grid>
          {data.map((pic) => (
            <Grid item xs={4} key={pic.id} alignItems="center"> <div style={{textAlign:'center'}}><img src={pic.src} alt="img"  width="50%" /><Typography>{pic.name}</Typography></div></Grid>
          ))}
          <Grid item xs={12}  style={{marginTop:"9vh"}}>
            <EndBarWithback />
          </Grid>
        </Grid>
      </Box>
    );
  }
}