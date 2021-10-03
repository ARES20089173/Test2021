import { Swiper, SwiperSlide } from "swiper/react";
import Typography from '@mui/material/Typography';
import pic1 from '../framework/img/300x100.jpeg'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid'
import * as React from 'react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.less"
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);
const price = [
    { id: 0, chasepuzzle: 0.15 },
    { id: 1, silverpuzzle: 2.00 }
]
export default function SwieprConent() {
    return (
        <>
            <Swiper pagination={true} className="mySwiper">
                <SwiperSlide>
                    <Grid xs={12}>
                        <Typography variant="body1" component="div" color='primary' textAlign='center'>
                            REES | Puzzle
                            Chase
                        </Typography>
                        <Typography variant="caption" component="div" color='primary' textAlign='center' marginLeft="12vh">
                            <img src={pic1} alt="inviteimage" />
                        </Typography>
                        <Grid item xs={12} height="42vh">
                            <Typography variant="body1" component="div" color='primary' textAlign='center' >
                                Before you purchase
                                REES Puzzles, understand
                                Puzzles
                            </Typography>
                            <Typography variant="body2" component="div" color='primary' textAlign='center' >
                                Current average (HKD)
                                chase puzzle: ${price[0].chasepuzzle}
                                silver puzzle:  ${price[1].silverpuzzle}
                            </Typography>
                            <Typography variant="caption" component="div" color='primary' textAlign='center' >
                                Rees puzzles is the token ,
                                for u to purchase items,
                                to game, to earn  and
                                to win.
                            </Typography>
                        </Grid>
                        <Typography variant="body2" component="div" color='primary' textAlign='center' marginTop="1vh">
                            POWERED BY [R]
                        </Typography>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid xs={12}>
                        <Typography variant="body1" component="div" color='primary' textAlign='center'>
                            REES | Puzzle
                            Chase
                        </Typography>
                        <Typography variant="caption" component="div" color='primary' textAlign='center' marginLeft="12vh">
                            <img src={pic1} alt="inviteimage" />
                        </Typography>
                        <Grid item xs={12} height="42vh">
                            <Typography variant="body1" component="div" color='primary' textAlign='center' >
                                How to get REES Puzzles?
                            </Typography>
                            <Typography variant="body2" component="div" color='primary' textAlign='center' >
                                if you want to buy your
                                favourite products in our stores,
                                You can purchse puzzles directly,
                                or through missions to get,
                                or play to earn on puzzleschase
                            </Typography>
                            <Typography variant="caption" component="div" color='primary' textAlign='center' >
                                if you want to buy your
                                favourite products in our stores,
                                You can purchse puzzles directly,
                                or through missions to get,
                                or play to earn on puzzleschase
                            </Typography>
                        </Grid>
                        <Typography variant="body2" component="div" color='primary' textAlign='center' marginTop="1vh">
                            POWERED BY [R]
                        </Typography>
                    </Grid>
                </SwiperSlide>


                <SwiperSlide>
                    <Grid xs={12}>
                        <Typography variant="body1" component="div" color='primary' textAlign='center'>
                            REES | Puzzle
                            Chase
                        </Typography>
                        <Typography variant="caption" component="div" color='primary' textAlign='center' marginLeft="12vh">
                            <img src={pic1} alt="inviteimage" />
                        </Typography>
                        <Grid item xs={12} height="42vh">
                            <Typography variant="body1" component="div" color='primary' textAlign='center' >
                                How much do I need?
                            </Typography>
                            <Typography variant="body2" component="div" color='primary' textAlign='center' >
                                the more you earn, the more
                                you purchase, earn puzzles is
                                the habits of metaverse players
                            </Typography>
                            <Typography variant="caption" component="div" color='primary' textAlign='center' >
                                The best way to estimate puzzles
                                is to try the transaction first and
                                see how much your shopping cart cost
                            </Typography>

                           Img Link for jump to puzzle purchase:<img src={pic1} alt="inviteimage" />
                        </Grid>
                        
                        <Typography variant="body2" component="div" color='primary' textAlign='center' marginTop="1vh">
                            POWERED BY [R]
                        </Typography>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </>
    )
}