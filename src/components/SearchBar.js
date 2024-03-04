import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// CSS styles
import styles from "../css/SearchBar.module.css";

function SearchBar({ handleSubmit, handleChange }) {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Search music"
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <Button type="submit" variant="contained">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
