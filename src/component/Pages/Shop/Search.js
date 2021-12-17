import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import { Button, Grid } from '@mui/material';
export default function FreeSolo() {
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
          options={top100Search.map((option) => option.title)}
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
      {top100Search.map((content) => ( <Button variant='outlined' style={{margin:'2px'}}>{content.title}</Button>       ))}
      </Grid>
    </Grid>

  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Search = [
  { title: 'Apple', year: 1994 },
  { title: 'BENEFIT', year: 1972 },
  { title: 'SAMUSUNG', year: 1974 },
  { title: 'DR.REBORN', year: 2008 },
  { title: 'FITNESS CLUB', year: 1957 },
  { title: "LEGO", year: 1993 },
  { title: 'ONE PIECE', year: 1994 },
  { title: "IPAD", year: 1993 },
  { title: 'STAYCATION', year: 1994 },
  { title: "TREATMENT", year: 1993 },

];
