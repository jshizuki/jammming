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
];

function App() {
  const [searchResults, setSearchResults] = useState(musicData);

  return (
    <div className={styles.appContainer}>
      <div className={styles.bg}></div>
      <ThemeProvider theme={theme}>
        <p className={styles.header}>
          Ja<span style={{ color: "#ff0000" }}>mmm</span>ing
        </p>
        <SearchBar />
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
