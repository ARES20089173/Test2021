import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import PuzzleChase from '../../../svgicon/EndBaricon/PuzzleChase.svg'
import Ricon from '../../../svgicon/Componenticon/Ricon.svg'
import { Typography } from '@mui/material';
import { useHistory } from 'react-router';
import database from '../../database'
const {  Categorydata,ShopBottomlinkdata } = database;
export default function EndPage(){
        const history=useHistory()
      
        const linkdata = ShopBottomlinkdata 
        const routeChange3 = (value) => {
            console.log("textmessage")
            let path = `/Shop/Category/${value}`;
            history.push(path);
        }
        return (

            <Grid container xs={12} justifyContent='center' alignItems='center' style={{ backgroundColor: 'gray' }}>
                <Grid container xs={10} justifyContent='left' alignItems='center'>
                    
                    <Grid container xs={12} justifyContent='left' alignItems='center'>
                        <Typography style={{ textAlign: 'left', color: 'white' }}>Shop with Puzzles</Typography>
                    </Grid>
                    {Categorydata.map((pic, index) => (
                        <Grid item xs={12} key={pic.id} alignItems="center">
                            <Link to={pic.link} style={{ textDecoration: 'none' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <Typography color={pic.color} onClick={()=>routeChange3(pic.category)}>{pic.category}<br /></Typography>
                                </div>
                            </Link>
                            {Categorydata.length === index + 1 ? <hr /> : ""}
                        </Grid>
                    ))}
                    
                    <Grid item xs={12} justifyContent='left' alignItems='center'>
                        <Typography style={{ textAlign: 'left', wordWrap: 'break-word', color: 'white' }}>Subscribe to receive updates from
                            our emotionally REESers Newsletter your email</Typography>

                    <hr />
                    </Grid>
                    <Grid container xs={12} justifyContent='center' alignItems='center'>
                        <Grid xs={12} alignItems="center">
                            <Typography color='white' textAlign='center'>
                                <Link to={linkdata[0].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[0].linkName} </Link>
                                |  <Link to={linkdata[1].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[1].linkName}</Link>
                            </Typography>
                            <Typography color='white' textAlign='center'>
                                <Link to={linkdata[2].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[2].linkName} </Link>
                                |  <Link to={linkdata[3].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[3].linkName}</Link>
                            </Typography>
                            <Typography color='white' textAlign='center'>
                                <Link to={linkdata[4].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[4].linkName} </Link>
                            </Typography>
                            <Typography color='white' textAlign='center'>
                                <Link to={linkdata[5].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[5].linkName} </Link>
                                |  <Link to={linkdata[6].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[6].linkName}</Link>
                            </Typography>
                            <Typography color='white' textAlign='center'>
                                <Link to={linkdata[7].link} style={{ textDecoration: 'none', color: 'white' }}>{linkdata[7].linkName} </Link>
                            </Typography> </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={10} justifyContent='left' alignItems='center' marginTop='3vh'>
                    <Typography variant="caption" style={{ textAlign: 'center', wordWrap: 'break-word', color: 'white' }}>
                        copyright @ PUZZLECHASE is managed and operated by REES AG Limited
                    </Typography>
                </Grid>
                <Grid container xs={12} justifyContent='left' alignItems='center' marginTop='3vh'>
                    <Typography color='white' textAlign='center' variant='h3' >
                      <img src={Ricon} className="App-logo" alt="logo" width="20%" style={{position:'relative',top:18}}/>
                        |<img src={PuzzleChase} className="App-logo" alt="logo" width="25%" style={{position:'relative',top:8  }}/>
                    </Typography>

                </Grid>
            </Grid>
        );
    }
