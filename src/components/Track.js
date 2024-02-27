import React from "react";
// CSS
import styles from "../css/Track.module.css";

function Track({ music }) {
  return (
    <>
      <div className={styles.trackContainer}>
        <div key={music.id}>
          <h3>{music.name}</h3>
          <p>
            {music.artist} | {music.album}
          </p>
        </div>
        <h3 className={styles.plusSign}>+</h3>
      </div>
      <hr />
    </>
  );
}

export default Track;
