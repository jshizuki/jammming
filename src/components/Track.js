import React, { useState, useEffect } from "react";
// CSS
import styles from "../css/Track.module.css";

function Track({ music, handleTrackClick, isPlaying, handlePlayClick, clickedTrack }) {

  return (
    <>
      <div className={styles.trackContainer}>
        <div key={music.id}>
          <div className={styles.nameAndPlayButton}>
            {music.previewUrl !== null ? (
              <i
                className={
                  isPlaying && music.id === clickedTrack
                    ? "fa-solid fa-circle-pause"
                    : "fa-regular fa-circle-play"
                }
                onClick={() => handlePlayClick(music)}
              ></i>
            ) : (
              ""
            )}
            <h3>{music.name}</h3>
          </div>
          <p>
            {music.artist} | {music.album}
          </p>
        </div>
        <h3 className={styles.plusSign} onClick={() => handleTrackClick(music)}>
          +
        </h3>
      </div>
      <hr />
    </>
  );
}

export default Track;
