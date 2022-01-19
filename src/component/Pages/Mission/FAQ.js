import React from "react";
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import back from '../../../svgicon/Componenticon/Back.svg'
import HomeIcon from '../../../svgicon/EndBaricon/BackHome.svg';
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EndBar from '../../framework/endbarWithback';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { useHistory } from "react-router";
import database from '../../database'
const { Faqdata } = database;

export default function FAQ() {
    const endbartype='Pure'
    const history = useHistory();

    const routeChange = () => {
        history.goBack()
    }
    const [selectedIndex, setSelectedIndex] = React.useState("")

    const handleClick = index => {
        if (selectedIndex === index) {
            setSelectedIndex("")
        } else {
            setSelectedIndex(index)
        }
    } 
    return (

        <Box sx={{ flexGrow: 1 }} bgcolor="#242634" height="100%">

            <Link to='/'>
                <img src={HomeIcon} alt='' width="15%" style={{
                    position: 'fixed',
                    zIndex: 3,
                    top: "72vh",
                    left: 0,
                }} />
            </Link>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item xs={12} >
                    <React.Fragment>
                        <Box sx={{ flexGrow: 1 }}>
                            <CssBaseline />
                            <AppBar position="fixed" align='center' elevation={0} sx={{ top: 0, backgroundColor: "#242634" }}>
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{}}>
                                            <img src={back} alt='' width="40%" onClick={routeChange} style={{
                                                position: 'relative',
                                                zIndex: 3,
                                                top: 5,
                                                left: "-40%",
                                            }} />
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} style={{
                                        position: 'relative',
                                        zIndex: 3,
                                        left: "-16%",
                                    }}>
                                        FAQ
                                    </Typography>

                                </Toolbar>
                            </AppBar>
                        </Box>
                    </React.Fragment>
                    <Toolbar />
                </Grid>
                <Grid container item xs={12} justifyContent='center' style={{ paddingTop: '0vh' }} >
                    <Grid container justifyContent='center' alignItems='center' xs={12} height="3vh" style={{ backgroundColor: '#8e8b91', textAlign: 'center' }}></Grid>
                    <Grid xs={12} color='white' height='80vh'>
                        <List sx={{ height: "100%" }} >

                            {Faqdata.map((text, index) => (
                                <Grid xs={12} onClick={() => {
                                    handleClick(index)
                                }}>
                                    <ListItem button key={text.id} color='white'>
                                        <ListItemText >
                                            <Typography variant='caption' style={{ display: 'inline-block' }} >{text.question}</Typography>
                                        </ListItemText>
                                        {index === selectedIndex ?  <KeyboardArrowUp/>: <KeyboardArrowDown />}
                               
                                    </ListItem>
                                        <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>

                                            <Typography variant='caption' style={{ display: 'inline-block' ,marginLeft:'4%'}} >{text.answer}</Typography>

                                        </Collapse>
                                </Grid>
                            ))}
                        </List>
                    </Grid>
                </Grid>

                <Grid item xs={12} marginTop="0vh" >
                <EndBar endbartype={endbartype}/>
                  </Grid>
            </Grid>
        </Box >

    )
}


