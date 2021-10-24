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
const contentStyle = {
    margin: 'auto',
    background: '#cfcece',
    width: "100%",
    height: "40%",
    padding: "5px",
    borderRadius: "5%",
};

const StyledFab = styled(Fab)({
    position: 'fixed',
    zIndex: 3,
    top: "75vh",
    left: 0,

});
const StyledFab2 = styled(Fab)({
    position: 'relative',
    zIndex: 3,
    top: 0,
    left: "0%",


});

const data = [{
    Year: [2022, 2021],
    Month: ["December", "November", "October", "September", "August", "July", "June", "May", "April", "March", "February", "January"],
    Historyed: [
        { id: 0, icon: chasepuzzle, addorminus: "+", setname: "IN GAME CHASE PUZZLES USED", time: null, month: "May", year: 2021, num: 8, unit: "HKD", dtime: '2021/09/15', htime: '12:24' },
        { id: 1, icon: chasepuzzle, addorminus: "+", setname: "CHASE PUZZLES USED", time: "sunday", month: "May", year: 2021, num: 100, unit:"PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 2, icon: chasepuzzle, addorminus: "-", setname: "PUZZLECHASE ENTRY USED", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 3, icon: silverpuzzle, addorminus: "+", setname: "CHASE PUZZLES EARNED", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 4, icon: silverpuzzle, addorminus: "-", setname: "CHASE PUZZLES EARNED", time: null, month: "May", year: 2021, num: 100,unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 5, icon: chasepuzzle, addorminus: "-", setname: "CHASE PUZZLES EARNED", time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 6, icon: silverpuzzle, addorminus: "+", setname: "PUZZLECHASE ENTRY USED", time: null, month: "June", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 7, icon: silverpuzzle, addorminus: "+", setname: "CHASE PUZZLES USED", time: null, month: "July", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 8, icon: chasepuzzle, addorminus: "-", setname: "IN GAME CHASE PUZZLES USED", time: null, month: "July", year: 2022, num: 100, unit: "PCS", dtime: '2022/09/15', htime: '12:24' },
    ]
}
]
export default class MessageCenter extends Component {
   
    render() {

        const Newdata = data.map((item, index) => {

            return <Grid container
                direction="row"
                alignItems="center"
                style={{ backgroundColor: '#707070' }}
                height="100%" >

                {item.Year.map((theyear) => {
                    return <> {item.Month.map((themonth) => {
                        return <>

                            <Grid item xs={12} style={{ backgroundColor: '#8e8b91', textAlign: 'left' }}>
                                <Typography variant="body1" color="#ffffff" >
                                    {item.Historyed.map((checkMonth) => {
                                        if (checkMonth.month == themonth && checkMonth.year == theyear) {
                                            return themonth
                                        }

                                    }).indexOf(themonth) != -1 ? themonth + ' ' + theyear : ''}
                                </Typography>
                            </Grid>
                            {item.Historyed.map((item2) => {
                                if (item2.month == themonth && item2.year == theyear) {
                                    return <>
                                        <Grid container alignItems='center' xs={7.5} style={{ textAlign: 'left' }} height="8vh" >

                                            <Grid xs={0.5}>
                                                {item2.addorminus}
                                            </Grid >
                                            <Grid xs={1}>
                                                <img src={item2.icon} width="100%" float="left" />
                                            </Grid >
                                            <Grid xs={10}>
                                                <Typography variant="caption" color="balck" style={{ overflowWrap: 'break-word' }} display="inline">
                                                    {item2.setname}
                                                </Typography>
                                            </Grid >

                                        </Grid>
                                        <Grid container alignItems='center' xs={4.5} height="8vh" >
                                            <Grid container alignItems='center' xs={8} >
                                                <Typography>
                                                    <Typography variant="body2" style={{ float: 'right' }}>{item2.num}{item2.unit}</Typography>
                                                    <Typography variant="caption" style={{ float: 'right' }}>{item2.dtime}{item2.htime}</Typography>
                                                </Typography>
                                            </Grid>
                                            <Grid alignItems='center' xs={4} >
                                                <Typography style={{ float: 'right' }}>
                                                    <Link to={`/Wallet/TranscationHistory/${item2.id}/Detail`} style={{ textDecoration: 'none', color: 'black' }}  ><Typography><KeyboardArrowRightIcon /></Typography></Link>
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </>
                                }

                            })
                            }
                        </>
                    })
                    }   </>
                })
                }
           

            </Grid>



            // }
        })


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
                                            <Link to='/wallet'>
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
                            &gt;&gt;&gt;&gt;&gt; Check Details &gt;&gt;&gt;&gt;&gt;
                        </Typography>
                    </Grid>

                    {Newdata}

                </Grid>
                <Grid item xs={12} marginTop="0vh" >
                    <EndBar />
                </Grid>
            </Box>
        );
    }


}