import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import ANIME from '../../../svgicon/Shop/Category/Type/ANIME.svg'
import BEAUTY from '../../../svgicon/Shop/Category/Type/BEAUTY.svg'
import COURSE from '../../../svgicon/Shop/Category/Type/COURSE.svg'
import DIGITAL from '../../../svgicon/Shop/Category/Type/DIGITAL.svg'
import GADET from '../../../svgicon/Shop/Category/Type/GADET.svg'
import GOURMENT from '../../../svgicon/Shop/Category/Type/GOURMENT.svg'
import TOY from '../../../svgicon/Shop/Category/Type/TOY.svg'
import VIRTUAL from '../../../svgicon/Shop/Category/Type/VIRTUAL.svg'

export default class Category extends Component {
  render() {

    const data = [
      { id: 0, src: ANIME,link:"/Shop/Category/ANIME",category: "ANIME" },
      { id: 1, src: BEAUTY,link:"/Shop/Category/BEAUTY", category: "BEAUTY" },
      { id: 2, src: COURSE ,link:"/Shop/Category/COURSE", category: "COURSE" },
      { id: 3, src: DIGITAL ,link:"/Shop/Category/DIGITAL" , category: "DIGITAL"},
      { id: 4, src: GADET,link:"/Shop/Category/GADET", category: "GADET" },
      { id: 5, src: GOURMENT,link:"/Shop/Category/GOURMENT", category: "GOURMENT"} ,
      { id: 6, src: TOY,link:"/Shop/Category/TOY" , category: "TOY"},
      { id: 7, src: VIRTUAL ,link:"/Shop/Category/VIRTUAL" , category: "VIRTUAL"},
    ];
    return (

      <Box sx={{ flexGrow: 1 }}>
        

          <Grid container item xs={12} justifyContent='center' >
            {data.map((pic) => (
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