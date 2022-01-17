import { styled } from '@mui/material/styles';
import React from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { Typography } from '@mui/material';
import Chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import tip from '../../../svgicon/Shop/word&button/tip.svg'
import { IconButton } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Collapse from "@mui/material/Collapse";
import Popup from 'reactjs-popup';
const Tooltip = () => (
    <Popup
        trigger={open => (

            <img src={tip} alt='' width='8%' style={{ position: 'relative', top: 4 }} />
        )}
        position="bottom center"

        {...{ contentStyle }}
        closeOnDocumentClick
    >
        <Typography variant='caption' > Adjust the slider to choose the mix of puzzles and cash you need to pay </Typography>
    </Popup>
);
const Tooltip2 = () => (
    <Popup
        trigger={<div className="button"> <div > <img src={tip} alt='' width='8%' style={{ position: 'relative', top: 4 }} />
        </div></div>}
        modal
        lockScroll
        nested
        closeOnDocumentClick={false}
    >
        {close => (
            <div className="modal" >
                <button className="close" onClick={close}>
                </button>
                <Grid xs={12} style={{overflow:'scroll'}} height='42vh' >
                    <Typography variant='h6' textAlign='center' color='white'>Puzzle earning on cash spending</Typography>
                    <Typography variant='caption' textAlign='center' color='white' >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita k
                    </Typography>
                </Grid>
            </div>
        )}
    </Popup>
);
const contentStyle = {
    background: 'white',
    width: "35%",
    height: "20%",
    borderRadius: "5%",
};
const PrettoSlider = styled(Slider)({
    color: '#bfbfbf',
    height: 8,
    '& .MuiSlider-track': {
        height: 10,
    },
    '& .MuiSlider-rail': {
        color: '#bfbfbf',
        height: 12,
        opacity: 1
    },
    '& .MuiSlider-thumb': {
        height: 22,
        width: 20,
        backgroundColor: '#FF00FF',

    },

});
function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
};
export default function Shopcartslider() {

    const [value1, setValue1] = React.useState([0]);

    const handleChange1 = (event, newValue, activeThumb) => {
        setValue1(newValue);
    };

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    }));
    const [expanded, setexpanded] = React.useState(false)
    return (
        <Grid xs={9}>
            <Grid xs={12} container alignItems='left' justifyContent='left'><Typography>Play with how you want yo pay

                <Tooltip />
            </Typography></Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'> <Typography variant='caption'>
                Combine your hard earned puzzles with cash to reduce
                your cost of purchase. You can decide your final mix before the checkout

            </Typography></Grid>
            <Grid xs={12} container alignItems='center'>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={0}
                    step={1}
                    min={0} max={100}
                    value={value1}
                    onChange={handleChange1}

                    {...{ contentStyle }}
                />
                <Grid xs={6} container alignItems='center'  ><Typography >CASH</Typography></Grid>
                <Grid xs={6} container alignItems='center' justifyContent='right' ><Typography >Puzzle</Typography></Grid>

                <Grid xs={6} container alignItems='center'  ><Typography variant='body2' >HKD {10 * value1}</Typography></Grid>
                <Grid xs={6} container alignItems='center' justifyContent='right' ><img src={Chasepuzzle} alt='' width="15%" style={{ position: 'relative', top: -2 }} /><Typography variant='body2' >{10 * (100 - value1)}</Typography></Grid>
                <Grid xs={12} container alignItems='center' justifyContent='right' style={{ border: '1.5px solid black', borderRadius: '10%', backgroundColor: "#bfbfbf" }}>
                    <Grid xs={7} container alignItems='center' justifyContent='left'>
                        <Typography variant='caption'> Puzzle you will earn
                        </Typography>
                    </Grid>
                    <Grid xs={3} container alignItems='center' justifyContent='right'>
                        <img src={Chasepuzzle} alt='' width='30%' style={{ position: 'relative', top: 0 }} />{10 * (100 - value1)}
                    </Grid>
                    <Grid xs={2} container alignItems='center' justifyContent='right'>
                        <ExpandMore
                            expand={expanded}
                            onClick={() => setexpanded(!expanded)}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <KeyboardArrowDown />
                        </ExpandMore>
                    </Grid>
                    <Collapse in={expanded} timeout="auto" unmountOnExit style={{ width: "100%" }} >
                        <Grid container xs={12} alignItems="left" justifyContent='left'>
                            <Grid container alignItems="center" justifyContent='left' xs={12}><Typography color="red" variant='caption'>Puzzles earning on cash spend <Tooltip2 /></Typography></Grid>
                        </Grid>
                    </Collapse>
                </Grid>
            </Grid>

        </Grid>
    )
}

