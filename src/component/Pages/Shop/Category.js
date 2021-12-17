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
export default class Category extends Component {
  render() {

    const data = [
      { id: 0, src: ANIME,link:"#" },
      { id: 1, src: BEAUTY,link:"#" },
      { id: 2, src: COURSE ,link:"#" },
      { id: 3, src: DIGITAL ,link:"#" },
      { id: 4, src: GADET,link:"#" },
      { id: 5, src: GOURMENT,link:"#"} ,
      { id: 6, src: TOY,link:"#" },
      { id: 7, src: VIRTUAL ,link:"#" },
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