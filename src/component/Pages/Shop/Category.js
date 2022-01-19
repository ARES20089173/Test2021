import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import database from '../../database'
const { Categorydata } = database;
export default class Category extends Component {
  render() {
 
    return (

      <Box sx={{ flexGrow: 1 }}>
        

          <Grid container item xs={12} justifyContent='center' >
            {Categorydata.map((pic) => (
              <Grid item xs={6} key={pic.id} alignItems="center">
                <Link to={pic.link}>
                  <div style={{ textAlign: 'center' }}>
                      <img src={pic.src} alt="img" width="95%" />
                       
                  </div>
                </Link>
              </Grid>

            ))}
          </Grid>
      </Box>
    );
  }
}