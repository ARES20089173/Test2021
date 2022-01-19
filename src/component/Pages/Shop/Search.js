import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import { Button, Grid } from '@mui/material';
import database from '../../database'
const { Searchdata } = database;
export default function Search() {
  const history = useHistory();

  const routeChange = () => {
      console.log("textmessage")
      let path = `#`;
      history.push(path);
      // history.goBack()
  }
  return (
    <Grid spacing={2} sx={{ width: "100%", marginTop: "6vh" }}>

      <Grid xs={12} sx={{ width: "100%", marginTop: "6vh" }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={ Searchdata.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="What are you looking for?"
              InputProps={{
                ...params.InputProps,
                type: 'search',
                endAdornment: (
                  <InputAdornment position="end" onClick={routeChange}>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
        />
      </Grid>
      <Grid xs={12} sx={{ width: "100%", marginTop: "1vh" }}>
      {Searchdata.map((content) => ( <Button variant='outlined' style={{margin:'2px'}}>{content.title}</Button>       ))}
      </Grid>
    </Grid>

  );
}
