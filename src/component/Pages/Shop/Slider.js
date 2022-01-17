import { styled } from '@mui/material/styles';
import React from 'react';
import '../../framework/css/cssFGamechooser.css'
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { Typography } from '@mui/material';
import Chasepuzzle from '../../../svgicon/Componenticon/Chasepuzzle.svg'
import { useHistory } from "react-router-dom";
import Showme from '../../../svgicon/Shop/word&button/Showme.svg'
const minDistance = 20000;

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#FF00FF',
    height: 3,
    padding: '13px 0',

    '& .MuiSlider-track': {
        height: 10,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#22466E',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 12,
    },
}));

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
export default function Gamechooser() {
    const history = useHistory();
    const routeChange = () => {

        console.log("textmessage")
        let path = `#`;
        history.push(path);
        // history.goBack()
    }
    const [value1, setValue1] = React.useState([500, 50000]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    return (
        <Grid xs={9}>
            <Grid xs={12} container alignItems='center' justifyContent='center'><Typography>Show me what's possible with  </Typography></Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'> <Typography>
                {value1[0]}-{value1[1]}
            </Typography><img src={Chasepuzzle} alt='' width="8%" style={{ position: 'relative', top: -2 }} /></Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center'>
                <AirbnbSlider
                    components={{ Thumb: AirbnbThumbComponent }}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    valueLabelDisplay="auto"
                    disableSwap
                    value={value1}
                    min={0} max={100000}
                    step={100}
                    onChange={handleChange1}
                />
                <Grid xs={6} container alignItems='center'  ><Typography >0</Typography><img src={Chasepuzzle} alt='' width="15%" style={{ position: 'relative', top: -2 }} /></Grid>
                <Grid xs={6} container alignItems='center' justifyContent='right' ><Typography >100,000</Typography><img src={Chasepuzzle} alt='' width="15%" style={{ position: 'relative', top: -2 }} /></Grid>
            </Grid>
            <Grid xs={12} container alignItems='center' justifyContent='center' marginTop='1vh'>
                <img src={Showme} alt='' width="50%" onClick={routeChange} />
            </Grid>
        </Grid>
    )
}

