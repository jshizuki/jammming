import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// Components
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
// CSS styles
import styles from "./App.module.css";
// Spotify API
import { getAccessToken } from "./util/Spotify.js";
import { search } from "./util/Spotify.js";
import { savePlaylist } from "./util/Spotify.js";

function App() {
  const [userInput, setUserInput] = useState("");
  const [musicData, setMusicData] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [targetTracks, setTargetTracks] = useState([]);

  useEffect(() => {
    const token = getAccessToken();
    setIsAuthorized(!!token);
  }, []);

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    search(userInput).then((data) => {
      setMusicData(data);
    });
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handlePlaylistNameSubmit = (event) => {
    event.preventDefault();
    console.log(playlistName)
  };

  const handleTrackClick = (track) => {
    setTargetTracks((prev) => {
      if (prev.find((each) => each.id === track.id) === undefined) {
        return [...prev, track];
      } else {
        return [...prev];
      }
    });
  };

  const handlePlaylistTrackClick = (track) => {
    setTargetTracks((prev) => {
      return prev.filter((each) => {
        return each.id !== track.id;
      });
    });
  };

  const handleSaveToSpotify = (playlistName, targetTracks) => {
    const trackURIs = targetTracks.map((targetTrack) => {
      return targetTrack.uri;
    });
    savePlaylist(playlistName, trackURIs);
    setPlaylistName("");
    setTargetTracks([]);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.bg}></div>
      <ThemeProvider theme={theme}>
        <p className={styles.header}>
          Ja<span style={{ color: "#131c27" }}>mmm</span>ing
        </p>
        <SearchBar
          handleSearchSubmit={handleSearchSubmit}
          handleUserInputChange={handleUserInputChange}
        />
        <div className={styles.columns}>
          <SearchResults
            musicData={musicData}
            isAuthorized={isAuthorized}
            handleTrackClick={handleTrackClick}
          />
          <Playlist
            handlePlaylistNameChange={handlePlaylistNameChange}
            handlePlaylistNameSubmit={handlePlaylistNameSubmit}
            playlistName={playlistName}
            targetTracks={targetTracks}
            handlePlaylistTrackClick={handlePlaylistTrackClick}
            handleSaveToSpotify={handleSaveToSpotify}
          />
        </div>
        {/* Add other components here */}
      </ThemeProvider>
    </div>
  );
}

export default App;

// const musicData = [
//   {
//     id: 1,
//     name: "Baby One More Time",
//     artist: "Britney Spears",
//     album: "Baby One More Time",
//   },
//   {
//     id: 2,
//     name: "Don't Let Me Be The Last To Know",
//     artist: "Britney Spears",
//     album: "Oops I Did It Again",
//   },
//   {
//     id: 3,
//     name: "Not Myself Tonight",
//     artist: "Christina Aguilera",
//     album: "Bionic",
//   },
//   {
//     id: 4,
//     name: "Flowers",
//     artist: "Miley Cyrus",
//     album: "Endless Summer Vacation",
//   },
// ];
