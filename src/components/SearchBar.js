import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function SearchBar() {
  return (
    <div>
      <form>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br />
        <Button variant="contained">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
