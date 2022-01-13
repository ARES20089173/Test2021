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
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
import BigRicon from '../../../svgicon/Componenticon/BigRicon.svg'
import Ricon from '../../../svgicon/Componenticon/Ricon.svg'
import Shopicon from '../../../svgicon/Componenticon/Shopicon.svg'
import Gifticon from '../../../svgicon/Componenticon/Gift.svg'
import Gicon1 from '../../../svgicon/GameIcon/Gicon1.svg'
import Gicon2 from '../../../svgicon/GameIcon/Gicon2.svg'
import Gicon3 from '../../../svgicon/GameIcon/Gicon3.svg'
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
        { id: 0,Amount:100, icon: chasepuzzle,icontype:BigRicon,addorminus: "+", setname: "Purchased",haveReceptionPuzzle:chasepuzzle,haveHKD:15,haveReception:'Reload',time: null, month: "May", year: 2021, num: 8, unit: "HKD", dtime: '15', htime: '12:24' },
        { id: 1,Amount:100, icon: chasepuzzle, icontype:Gifticon,addorminus: "+", setname: "Entry", time: "sunday", haveReceptionPuzzle:'',haveReception:'',month: "May",haveHKD:'', year: 2021, num: 100, unit:"PCS", dtime: '15', htime: '12:24' },
        { id: 2,Amount:100, icon: chasepuzzle, icontype:Gicon3,addorminus: "-", setname: "Rewards", time: "sunday",haveReceptionPuzzle:'' ,haveReception:'',month: "May",haveHKD:'', year: 2021, num: 100, unit: "PCS", dtime: '25', htime: '12:24' },
        { id: 3,Amount:100, icon: silverpuzzle,icontype:Shopicon, addorminus: "+", setname: "Assam Chic", haveReceptionPuzzle:'',haveHKD:'',haveReception:'used', time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '25', htime: '12:24' },
        { id: 4, Amount:100,icon: silverpuzzle,icontype:Gicon1, addorminus: "-", setname: "Rewards",haveReceptionPuzzle:'', haveHKD:'',haveReception:'', time: null, month: "May", year: 2021, num: 100,unit: "PCS", dtime: '25', htime: '12:24' },
        { id: 5, Amount:100,icon: chasepuzzle, icontype:Gicon2,addorminus: "-", setname: "Rewards", haveReceptionPuzzle:'',haveHKD:'',haveReception:'',time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '3', htime: '12:24' },
        { id: 6, Amount:100,icon: silverpuzzle, icontype:Gicon3,addorminus: "+", setname: "Rewards",haveReceptionPuzzle:'', haveHKD:'',haveReception:'',time: null, month: "June", year: 2021, num: 100, unit: "PCS", dtime: '2', htime: '12:24' },
        { id: 7,Amount:100, icon: silverpuzzle,icontype:Shopicon, addorminus: "+", setname: "Rewards",haveReceptionPuzzle:'',haveHKD:'',haveReception:'', time: null, month: "July", year: 2021, num: 100, unit: "PCS", dtime: '1', htime: '12:24' },
        { id: 8, Amount:100,icon: chasepuzzle, icontype:Gifticon,addorminus: "-", setname: "Bonus", haveReceptionPuzzle:silverpuzzle,haveHKD:'',haveReception:'',time: null, month: "July", year: 2022, num: 100, unit: "PCS", dtime: '25', htime: '12:24' },
    ]
}
]
const endbartype='Pure'
export default class MessageCenter extends Component {
   
    render() {

        const Newdata = data.map((item, index) => {

            return <Grid container
                direction="row"
                alignItems="center"
                style={{ backgroundColor: '#35394C' }}
                height="100%" >

                {item.Year.map((theyear) => {
                    return <> {item.Month.map((themonth) => {
                        return <>

                            <Grid item xs={12} style={{ backgroundColor: '#33363C', textAlign: 'left' }}>
                                <Typography variant="body1" color="#ffffff" >
                                    {item.Historyed.map((checkMonth) => {
                                        if (checkMonth.month == themonth && checkMonth.year == theyear) {
                                            return themonth
                                        }

                                    }).indexOf(themonth) != -1 ? themonth + ' ' + theyear : ''}
                                </Typography>
                            </Grid>
                            {item.Historyed.map((item2,indexed) => {
                                if (item2.month == themonth && item2.year == theyear) {
                                    return <>
                                        <Grid container alignItems='center' xs={8} style={{ textAlign: 'left',borderRight:'1px solid black' ,backgroundColor:data[0].Historyed[indexed].id%2==0?"#242634":'#35394C'}} height="8vh" >

                                            <Grid xs={2} container alignItems='center' justifyContent='center'>
                                                <img src={item2.icontype} alt='' width='80%'/>
                                            </Grid >
                                            <Grid xs={5} >
                                            <Typography variant='caption' noWrap style={{textAlign:'center', color:'white'}}>{item2.month} {item2.dtime}<br/><Typography variant='caption' noWrap style={{color:data[0].Historyed[indexed].setname=="Purchased"?'#FF4079':'#90ABBD'}}>{item2.setname }</Typography>{item2.haveReceptionPuzzle==''?'':<img src={item2.haveReceptionPuzzle} alt='' width='15%' />}</Typography>
                                            </Grid >
                                            <Grid xs={5}style={{textAlign:'center'}}>
                                            <Typography variant='caption' noWrap style={{textAlign:'center', color:'white'}}>{item2.addorminus}{item2.num}<img src={item2.icon} alt='' width='15%' /><br/>{item2.haveHKD ==''?'':'HKD$'+item2.haveHKD}</Typography>
                                           </Grid >

                                        </Grid>
                                        <Grid container alignItems='center' xs={4} height="8vh" style={{backgroundColor:data[0].Historyed[indexed].id%2==0?"#242634":'#35394C'}}>
                                            <Grid container alignItems='center' justifyContent='center' xs={10} style={{textAlign:'center'}} >
                                                    <Typography variant="body2" style={{ textAlign:'center', color:'white'}}>{item2.Amount}<img src={item2.icon} alt='' width='21%' /></Typography>
                                     
                                            </Grid>
                                            <Grid alignItems='center'justifyContent='center'  xs={2} >
                                                <Typography style={{ float: 'right' }}>
                                                    <Link to={`/Wallet/TranscationHistory/${item2.id}/Detail`} style={{ textDecoration: 'none', color: 'black',position:'relative',top:'0.6vh' }}  ><Typography style={{ color:'white'}}>{item2.haveReception==''?'':<KeyboardArrowRightIcon />}</Typography></Link>
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
                                        <Grid xs={8} >
                                            <Typography variant="body1" component="div" sx={{ textAlign: 'center' }} >
                                                TRANSACTION HISTORY
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} >     </Grid>
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
                    <Grid item xs={12} height="3vh" style={{ backgroundColor: '#33363C', textAlign: 'center' }}>
                        <Typography variant="body1" color="#ffffff" >
                            &gt;&gt;&gt;&gt;&gt; Check Details &gt;&gt;&gt;&gt;&gt;
                        </Typography>
                    </Grid>

                    {Newdata}

                </Grid>
                <Grid item xs={12} marginTop="0vh" >
                <EndBar endbartype={endbartype}/>
                </Grid>
            </Box>
        );
    }


}