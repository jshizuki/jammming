import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// Components
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
// CSS styles
import styles from "./App.module.css";

const musicData = [
  {
    id: 1,
    name: "Baby One More Time",
    artist: "Britney Spears",
    album: "Baby One More Time",
  },
  {
    id: 2,
    name: "Don't Let Me Be The Last To Know",
    artist: "Britney Spears",
    album: "Oops I Did It Again",
  },
  {
    id: 3,
    name: "Not Myself Tonight",
    artist: "Christina Aguilera",
    album: "Bionic",
  },
  {
    id: 4,
    name: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
  },
];

function App() {
  const [userInput, setUserInput] = useState();

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return console.log(userInput);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.bg}></div>
      <ThemeProvider theme={theme}>
        <p className={styles.header}>
          Ja<span style={{ color: "#ff0000" }}>mmm</span>ing
        </p>
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <div className={styles.columns}>
          <SearchResults musicData={musicData} />
          <Playlist />
        </div>
        {/* Add other components here */}
      </ThemeProvider>
    </div>
  );
}

export default App;
