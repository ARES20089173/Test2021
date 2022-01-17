import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import BigRicon from '../../../svgicon/Componenticon/BigRicon.svg'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom"
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import EndBar from '../../framework/endbarWithback';
import back from '../../../svgicon/Componenticon/Back.svg'
import chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import silverpuzzle from '../../../svgicon/Componenticon/SilverPuzzle.svg'
import Creditcard from '../../../svgicon/WalletTrans/Creditcard.svg'
import Money from '../../../svgicon/WalletTrans/Money.svg'
import Shopcar from '../../../svgicon/WalletTrans/Shopcar.svg'
import TandC from '../../../svgicon/Componenticon/T&C.svg';

import { useParams } from "react-router";
const data = [{
    Year: [2022, 2021],
    Month: ["December", "November", "October", "September", "August", "July", "June", "May", "April", "March", "February", "January"],
    Historyed: [
        { id: 0, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', icon: chasepuzzle, ReesPay: 1, MerchantID: 123, TournamentNo: 1234, Amount: 0, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "+", setType: "CHASE PUZZLES RELOADED", time: null, month: "May", year: 2021, num: 8, unit: "HKD", dtime: '2021/09/15', htime: '12:24' },
        { id: 1, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack', icon: chasepuzzle, ReesPay: 123, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "+", setType: " ", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 2, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack',  icon: chasepuzzle, ReesPay: 123, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "-", setType: "", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 3, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack', icon: silverpuzzle, ReesPay: 2, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "+", setType: "CHASE PUZZLES USED", time: "sunday", month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 4, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack', icon: silverpuzzle, ReesPay: 123, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "-", setType: "", time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 5, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack',  icon: chasepuzzle, ReesPay: 123, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "-", setType: "", time: null, month: "May", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 6, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack', icon: silverpuzzle, ReesPay: 123, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "+", setType: "", time: null, month: "June", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 7, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack', icon: silverpuzzle, ReesPay: 123, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "+", setType: "", time: null, month: "July", year: 2021, num: 100, unit: "PCS", dtime: '2021/09/15', htime: '12:24' },
        { id: 8, Billto: 'Alipay xxxx', DocumentID: 666, OrderID: 999, Pay: 'HK $78', Name: 'Jay', Seller: 'Google Play', Product: '117 crystal pack', ReesID: '123456', email: 'b1234@gmail.com', Pack: '117 crystal pack', icon: chasepuzzle, ReesPay: 123, MerchantID: 123, TournamentNo: 1234, Amount: 4321, Remark: "Look so good", Operator: "something", ShopAddress: "king's road xxx shop", RefNo: 123, addorminus: "-", setType: "", time: null, month: "July", year: 2022, num: 100, unit: "PCS", dtime: '2022/09/15', htime: '12:24' },
    ]
}
]
export default function Detail() {
    const endbartype='Pure'
    const { id } = useParams();
    const setType = data[0].Historyed[id].setType
    const ReesID = data[0].Historyed[id].ReesID
    const Email = data[0].Historyed[id].email
    const Seller = data[0].Historyed[id].Seller
    const Product = data[0].Historyed[id].Product
    const OrderID = data[0].Historyed[id].OrderID
    const DocumentID = data[0].Historyed[id].DocumentID
    const Pay = data[0].Historyed[id].Pay
    const Name = data[0].Historyed[id].Name
    const ReesPay = data.map((item, index) => { return <>  {item.Historyed[id].ReesPay}   </> })
    const MerchantID = data.map((item, index) => { return <>  {item.Historyed[id].MerchantID}   </> })
    const TournamentNo = data.map((item, index) => { return <>  {item.Historyed[id].TournamentNo}   </> })
    const Amount = data.map((item, index) => { return <>  {item.Historyed[id].Amount}   </> })
    const Remark = data.map((item, index) => { return <>  {item.Historyed[id].Remark}   </> })
    const Operator = data.map((item, index) => { return <>  {item.Historyed[id].Operator}   </> })
    const ShopAddress = data.map((item, index) => { return <>  {item.Historyed[id].ShopAddress}   </> })
    const RefNo = data.map((item, index) => { return <>  {item.Historyed[id].RefNo}   </> })
    const Date = data.map((item, index) => { return <>  {item.Historyed[id].dtime}   </> })
    const Dtime = data.map((item, index) => { return <>  {item.Historyed[id].htime}   </> })

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
                <Grid container xs={12} justifyContent="center"
                    alignItems="center" height="3vh" style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}>
                    <Typography variant="body1" color="#ffffff" >
                        {setType}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container height="70vh" justifyContent="center" display={setType === "CHASE PUZZLES USED" ? '' : 'none'}>
                <Grid item xs={11} container height="10%" style={{ borderBottom: "1px solid white" }} >
                    <Grid item xs={6} container alignItems='center'>
                        <Typography color='white' variant="body2">Rees Pay<br />{ReesPay}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white' variant="body2">Merchant ID<br />{MerchantID}</Typography>
                    </Grid>
                </Grid>


                <Grid item xs={11} container height="13%"  >
                    <Grid item xs={6} container alignItems='center'>
                        <Typography color='white' variant="body2">Shop Address<br />{ShopAddress}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white' variant="body2">Ref No<br />{RefNo}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={11} container height="13%"  >
                    <Grid item xs={6} container alignItems='center'>
                        <Typography color='white' variant="body2">Operator<br />{Operator}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white' variant="body2">Date<br />{Date}|{Dtime}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={11} container height="13%"  >
                    <Grid item xs={6} container alignItems='center'>
                        <Typography color='white' variant="body2">Tournament NO<br />{TournamentNo}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white' variant="body2">Amonut<br />{Amount}
                            {data.map((item, index) => { return <>  <img src={item.Historyed[id].icon} alt="" width="25%" />  </> })}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={11} container height="15%" style={{ borderBottom: "1px solid white" }} >
                    <Grid item xs={12} alignItems='center'>
                        <Typography color='white ' variant="body2" style={{ wordWrap: 'break-word' }}>Remark<br />{Remark}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={11} container height="12%"   >
                    <Grid item xs={9} container alignItems='center'>
                        <Typography color='white' variant="body2">No payment yet<br />Buy now play with ReesPay</Typography>
                    </Grid>
                    <Grid item xs={2} container alignItems='center' >
                        <img src={TandC} alt='' width="130%"/>
                    </Grid>
                </Grid>

                <Grid item xs={12} height="20%" >
                </Grid>
            </Grid>
            <Grid item xs={12} container height="70vh" justifyContent="center" display={setType === "CHASE PUZZLES RELOADED" ? '' : 'none'}>
                <Grid item xs={11} container height="15%" style={{ borderBottom: "1px solid white" }} >
                    <Grid item xs={9} container alignItems='center'>
                        <img src={BigRicon} alt='' width="20%" />
                    </Grid>
                    <Grid item xs={2} container alignItems='center'>
                        <Typography variant='body1' color='white'>Receipt</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={11} container height="13%"  >
                    <Grid item xs={6} container height="13%">
                        <Typography color='white' variant="body2">Rees ID.<br />{ReesID}<br />{Email}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' justifyContent='center' >
                        <Typography color='white' variant="body2">Billed to<br />{RefNo}<br />Name: {Name}<br />Address: {ShopAddress}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={11} container height="10%"  >

                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white' variant="body2">Date<br />{Date}|{Dtime}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={11} container height="10%" style={{ borderBottom: "1px solid white" }} >
                    <Grid item xs={6} container alignItems='center'>
                        <Typography color='white' variant="body2">Order ID<br />{OrderID}</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white' variant="body2">Document ID<br />{DocumentID}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid xs={11} color='white' height="5%"   >
                    {Product}
                </Grid>

                <Grid item xs={11} container height="10%"  >
                    <Grid item xs={1} container alignItems='center'>
                        <img src={Creditcard} alt='' width='80%'/>
                    </Grid>
                    <Grid item xs={5} container alignItems='center'>
                        <Typography color='white' variant="body2">Seller<br />{Seller}</Typography>
                    </Grid>
                    <Grid item xs={1} container alignItems='center'>
                        <img src={Shopcar} alt='' width='80%'/>
                    </Grid>
                    <Grid item xs={5} container alignItems='center' >
                        <Typography color='white' variant="body2">Product<br />{Product}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={11} container height="10%"  >
                <Grid item xs={1} container alignItems='center'>
                        <img src={Money} alt='' width='80%'/>
                    </Grid>
                    <Grid item xs={6} container alignItems='center' >
                        <Typography color='white' variant="body2">Total Amount<br />{Pay}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} height="8%" >
                </Grid>
            </Grid>
            <Grid item xs={12} marginTop={setType === "CHASE PUZZLES RELOADE" ? "0vh" : '8vh'} >
            <EndBar endbartype={endbartype}/>
            </Grid>
        </Box>
    );
}

