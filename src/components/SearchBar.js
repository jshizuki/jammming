import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
// CSS styles
import styles from '../css/SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.container}>
      <form>
        <TextField id="outlined-basic" label="Search music" variant="outlined"/><br />
        <Button variant="contained">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
