import React from "react";
import TextField from "@mui/material/TextField";
// CSS
import styles from "../css/Playlist.module.css";
import theme from "../theme";

function Playlist({
  handlePlaylistNameChange,
  handlePlaylistNameSubmit,
  playlistName,
  showPlaylistForm,
}) {
  return (
    <div className={styles.container}>
      {showPlaylistForm === true ? (
        <form onSubmit={handlePlaylistNameSubmit}>
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={handlePlaylistNameChange}
            value={playlistName}
            placeholder="Create a new playlist"
            sx={theme.components.PlaylistTextField.styleOverrides.root}
          ></TextField>
          <br />
          <br />
        </form>
      ) : (
        <div>
          <h2>
            <span style={{ color: "#fc5a4b" }}>{playlistName}</span>
          </h2>
          <hr />
        </div>
      )}
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
