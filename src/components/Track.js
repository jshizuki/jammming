import React from "react";
// CSS
import styles from "../css/Track.module.css";

function Track({music}) {
  return (
    <div key={music.id} className={styles.container}>
      <h3>{music.name}</h3>
      <p>{music.artist} | {music.album} </p>
      <hr />
    </div>
  );
}

export default Track;
