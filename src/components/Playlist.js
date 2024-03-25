import React from "react";
import TextField from "@mui/material/TextField";
// CSS
import styles from "../css/Playlist.module.css";
import theme from "../theme";
import PlaylistTrack from "./PlaylistTrack";
// Material UI
import Button from "@mui/material/Button";

function Playlist({
  handlePlaylistNameChange,
  handlePlaylistNameSubmit,
  playlistName,
  showPlaylistForm,
  targetTracks,
  handleSaveToSpotify,
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
      <div className={styles.button}>
        <Button
          variant="contained"
          onClick={handleSaveToSpotify}
          sx={theme.components.PlaylistSaveButton.styleOverrides.root}
        >
          Save to Spotify
        </Button>
      </div>
    </div>
  );
}

export default Playlist;
