import React from "react";
import TextField from "@mui/material/TextField";
// CSS
import styles from "../css/Playlist.module.css";
import theme from "../theme";
import PlaylistTrack from "./PlaylistTrack";

function Playlist({
  handlePlaylistNameChange,
  handlePlaylistNameSubmit,
  playlistName,
  showPlaylistForm,
  targetTracks,
  handleSaveToSpotify
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
      {targetTracks.map((targetTrack) => {
        return <PlaylistTrack key={targetTrack.id} targetTrack={targetTrack} />;
      })}
      <button onClick={handleSaveToSpotify}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
