import { Swiper, SwiperSlide } from "swiper/react";
import Typography from '@mui/material/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid'
import PowerbyR from '../../svgicon/PowerBy/PowerByR.svg'

import Twopuzzle from '../../svgicon/EndBaricon/Twopuzzle.svg'
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
                    <Grid xs={12} container justifyContent='center' alignItems='center'>
                        <Typography variant="body1" component="div" color='white' textAlign='center'>
                            REES | Puzzle
                            Chase
                            <br />
                            <img src={Twopuzzle} alt="inviteimage" style={{ width: '30%', marginLeft: '35%' }} />
                        </Typography>
                        <Grid item xs={12} height="42vh">

                            <Typography variant="body1" component="div" color='white' textAlign='center' >
                                Before you purchase
                                REES Puzzles, understand
                                Puzzles
                            </Typography>
                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                Current average (HKD)
                                chase puzzle: ${price[0].chasepuzzle}
                                silver puzzle:  ${price[1].silverpuzzle}
                            </Typography>
                            <Typography variant="caption" component="div" color='white' textAlign='center' >
                                Rees puzzles is the token ,
                                for u to purchase items,
                                to game, to earn  and
                                to win.
                                <br />
                                <img src={PowerbyR} alt='' />
                            </Typography>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid xs={12} container justifyContent='center' alignItems='center'>
                        <Typography variant="body1" component="div" color='white' textAlign='center'>
                            REES | Puzzle
                            Chase
                            <br />
                            <img src={Twopuzzle} alt="inviteimage" style={{ width: '30%', marginLeft: '35%' }} />
                        </Typography>
                        <Grid item xs={12} height="42vh">
                            <Typography variant="body1" component="div" color='white' textAlign='center' >
                                How to get REES Puzzles?
                            </Typography>
                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                if you want to buy your
                                favourite products in our stores,
                                You can purchse puzzles directly,
                                or through missions to get,
                                or play to earn on puzzleschase
                            </Typography>
                            <Typography variant="caption" component="div" color='white' textAlign='center' >
                                if you want to buy your
                                favourite products in our stores,
                                You can purchse puzzles directly,
                                or through missions to get,
                                or play to earn on puzzleschase  <br />
                                <img src={PowerbyR} alt='' />
                            </Typography>
                        </Grid>
                    </Grid>
                </SwiperSlide>


                <SwiperSlide>
                    <Grid xs={12} container justifyContent='center' alignItems='center'>
                        <Typography variant="body1" component="div" color='white' textAlign='center'>
                            REES | Puzzle
                            Chase
                            <br />
                            <img src={Twopuzzle} alt="inviteimage" style={{ width: '30%', marginLeft: '35%' }} />
                        </Typography>
                        <Grid item xs={12} height="42vh">
                            <Typography variant="body1" component="div" color='white' textAlign='center' >
                                How much do I need?
                            </Typography>
                            <Typography variant="body2" component="div" color='white' textAlign='center' >
                                the more you earn, the more
                                you purchase, earn puzzles is
                                the habits of metaverse players
                            </Typography>
                            <Typography variant="caption" component="div" color='white' textAlign='center' >
                                The best way to estimate puzzles
                                is to try the transaction first and
                                see how much your shopping cart cost
                                <br />    
                                 <Typography color='white'>Img Link for jump to puzzle purchase:<br /></Typography>
                       
                                <img src={PowerbyR} alt='' />
                            </Typography>

                        </Grid>

                    </Grid>
                </SwiperSlide>
            </Swiper>
        </>
    )
}