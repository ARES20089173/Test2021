import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import EndBar from '../../framework/pureEndbar';
import back from '../../../svgicon/Componenticon/Back.svg'
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'

import { useParams } from "react-router";
import { Button } from "@mui/material";




const data = [{
    Year: [2022, 2021],
    Month: ["December", "November", "October", "September", "August", "July", "June", "May", "April", "March", "February", "January"],
    Historyed: [
        { id: 0, icon: chasepuzzle,ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123,addorminus: "+", setname: "IN GAME CHASE PUZZLES USED", time: null, month: "May", year: 2021, num: 8, unit: "HKD", dtime: '2021/09/15', htime: '12:24' },
        { id: 1, icon: chasepuzzle, ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123,addorminus: "+", setname: "CHASE PUZZLES USED", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 2, icon: chasepuzzle, ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123,addorminus: "-", setname: "PUZZLECHASE ENTRY USED", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 3, icon: silverpuzzle,ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123, addorminus: "+", setname: "CHASE PUZZLES EARNED", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 4, icon: silverpuzzle,ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123, addorminus: "-", setname: "CHASE PUZZLES EARNED", time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 5, icon: chasepuzzle,ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123, addorminus: "-", setname: "CHASE PUZZLES EARNED", time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 6, icon: silverpuzzle,ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123, addorminus: "+", setname: "PUZZLECHASE ENTRY USED", time: null, month: "June", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 7, icon: silverpuzzle, ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123,addorminus: "+", setname: "CHASE PUZZLES USED", time: null, month: "July", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 8, icon: chasepuzzle, ReesPay:123, MerchantID:123,TournamentNo:1234,Amount:4321,Remark:"Look so good",Operator:"something", ShopAddress:"king's road xxx shop",RefNo:123,addorminus: "-", setname: "IN GAME CHASE PUZZLES USED", time: null, month: "July", year: 2022, num: 100, unit: "PCS", dtime: '2022/09/15', htime: '12:24' },
    ]
}
]
export default function Detail() {

    const { id } = useParams();
    const seticon =data.map((item, index) => { return <>  {item.Historyed[id].icon}   </>  })
    const setname =data.map((item, index) => { return <>  {item.Historyed[id].setname}   </>  })
    const ReesPay =data.map((item, index) => { return <>  {item.Historyed[id].ReesPay}   </>  })
    const MerchantID =data.map((item, index) => { return <>  {item.Historyed[id].MerchantID}   </>  })
    const TournamentNo =data.map((item, index) => { return <>  {item.Historyed[id].TournamentNo}   </>  })
    const Amount =data.map((item, index) => { return <>  {item.Historyed[id].Amount}   </>  })
    const Remark =data.map((item, index) => { return <>  {item.Historyed[id].Remark}   </>  })
    const Operator =data.map((item, index) => { return <>  {item.Historyed[id].Operator}   </>  })
    const ShopAddress =data.map((item, index) => { return <>  {item.Historyed[id].ShopAddress}   </>  })
    const RefNo =data.map((item, index) => { return <>  {item.Historyed[id].RefNo}   </>  })
    const Date =data.map((item, index) => { return <>  {item.Historyed[id].dtime}   </>  })
    const Dtime =data.map((item, index) => { return <>  {item.Historyed[id].htime}   </>  })
    
    return (

        <Box sx={{ flexGrow: 1 }} bgcolor='#242634'>
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid xs={3}>
                        <Link to='/'>
                            <img src={HomeIcon} alt='' width="15%" style={{
                                position: 'fixed',
                                zIndex: 3,
                                top: "72vh",
                                left: 0,
                            }} />
                        </Link>
                    </Grid>
                    <Grid xs={8} >
                        <CssBaseline />
                        <AppBar position="fixed" align='center' sx={{ top: 0, backgroundColor: "#242634" }}>
                            <Toolbar >
                                <Grid xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid xs={2} >
                                        <Link to='/wallet/TranscationHistory'>
                                            <img src={back} alt='' width="80%" style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                top: 5,
                                                left: "-40%",
                                            }} />
                                        </Link>
                                    </Grid>
                                    <Grid xs={10} >
                                        <Typography variant="body1" component="div" sx={{ textAlign: 'center' }} style={{
                                            position: 'relative',
                                            zIndex: 3,
                                            left: "-10%",
                                        }} >
                                            TRANSACTION HISTORY
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Toolbar />
                </Box>
            </React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} height="3vh" style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}>
                    <Typography variant="body1" color="#ffffff" >
                       {setname}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container height="80vh" justifyContent="center" >
                <Grid item xs={11} container height="15%" style={{ borderBottom: "1px solid white" }} >
                    <Grid item xs={6} container alignItems='center'>
                        <Typography color='white'>Rees Pay<br />{ReesPay}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white'>Merchant ID<br />{MerchantID}</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={11} container height="15%"  >
                    <Grid item xs={6} container alignItems='center'>
                        <Typography color='white'>Tournament NO<br />{TournamentNo}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white'>Amonut<br />{Amount}
                   { data.map((item, index) => { return <>  <img src={item.Historyed[id].icon}  alt="" width="25%"/>  </>  })}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={11} container height="10%"  >

                </Grid>
                <Grid item xs={11} container height="20%" style={{ borderBottom: "1px solid white" }} >
                    <Grid item xs={12} alignItems='center'>
                        <Typography color='white ' style={{ wordWrap: 'break-word' }}>Remark<br />xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={11} container height="10%"   >
                    <Grid item xs={9} container alignItems='center'>
                        <Typography color='white'>No payment yet<br />Buy now play with ReesPay</Typography>
                    </Grid>
                    <Grid item xs={2} container alignItems='center' >
                        <Button variant='outlined'>T&C</Button>
                    </Grid>
                </Grid>

                <Grid item xs={12} height="30%" >
                </Grid>
            </Grid>
            <Grid item xs={12} marginTop="0vh" >
                <EndBar />
            </Grid>
        </Box>
    );
}

