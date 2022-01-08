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
import PuzzleChase from '../../../svgicon/EndBaricon/PuzzleChase.svg'
import Ricon from '../../../svgicon/Componenticon/Ricon.svg'
import { Typography } from '@mui/material';
import { useHistory } from 'react-router';
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
export default function EndPage(){
        const history=useHistory()
        const data = [
            { id: 0, src: ANIME, link: "#", name: "ANIME", color: 'red' },
            { id: 1, src: BEAUTY, link: "#", name: "BEAUTY", color: 'pink' },
            { id: 2, src: COURSE, link: "#", name: "COURSE", color: 'white' },
            { id: 3, src: DIGITAL, link: "#", name: "DIGITAL", color: 'blue' },
            { id: 4, src: GADET, link: "#", name: "GADET", color: 'green' },
            { id: 5, src: GOURMENT, link: "#", name: "GOURMENT", color: 'yellow' },
            { id: 6, src: TOY, link: "#", name: "TOY", color: 'orange' },
            { id: 7, src: VIRTUAL, link: "#", name: "VIRTUAL", color: 'purple' },
        ];
        const linkdata = [
            { id: 0, linkName: "About us", link: "/" },
            { id: 1, linkName: "FAQ", link: "/MissionMain/FAQ" },
            { id: 2, linkName: "Press", link: "/" },
            { id: 3, linkName: "Terms & Conditions", link: "/" },
            { id: 4, linkName: "Partnership Opportunities", link: "/" },
            { id: 5, linkName: "Disclaimer", link: "/" },
            { id: 6, linkName: "Privacy Policy", link: "/MissionMain/Policy" },
            { id: 7, linkName: "Terms of Services", link: "/MissionMain/Service" },
        ]
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
                    {data.map((pic, index) => (
                        <Grid item xs={12} key={pic.id} alignItems="center">
                            <Link to={pic.link} style={{ textDecoration: 'none' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <Typography color={pic.color} onClick={()=>routeChange3(pic.name)}>{pic.name}<br /></Typography>
                                </div>
                            </Link>
                            {data.length == index + 1 ? <hr /> : ""}
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
                    <Typography color='white' textAlign='center' variant='h3' color='black'>
                      <img src={Ricon} className="App-logo" alt="logo" width="20%" style={{position:'relative',top:18}}/>
                        |<img src={PuzzleChase} className="App-logo" alt="logo" width="25%" style={{position:'relative',top:8  }}/>
                    </Typography>

                </Grid>
            </Grid>
        );
    }
