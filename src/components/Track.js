import React from "react";
// CSS
import styles from "../css/Track.module.css";

function Track({ music, handleTrackClick }) {
  return (
    <>
      <div className={styles.trackContainer}>
        <div key={music.id}>
          <div className={styles.nameAndPlayButton}>
            <h3>{music.name}</h3>
            <i class="fa-solid fa-circle-play"></i>
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
