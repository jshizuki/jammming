import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// CSS styles
import styles from "../css/SearchBar.module.css";
import theme from "../theme";

function SearchBar({ handleSearchSubmit, handleUserInputChange }) {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          id="outlined-basic"
          label="Search music"
          variant="outlined"
          onChange={handleUserInputChange}
          sx={theme.components.SearchBarTextField.styleOverrides.root}
        />
        <br />
        <Button type="submit" variant="contained">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
