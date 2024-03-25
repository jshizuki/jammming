import React from "react";
import styles from "../css/Track.module.css";

function PlaylistTrack({ targetTrack }) {
  return (
    <>
      <div className={styles.trackContainer}>
        <div key={targetTrack.id}>
          <h3>{targetTrack.name}</h3>
          <p>
            {targetTrack.artist} | {targetTrack.album}
          </p>
        </div>
        <h3 className={styles.plusSign}>+</h3>
      </div>
      <hr />
    </>
  );
}

export default PlaylistTrack;
