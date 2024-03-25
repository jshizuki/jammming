import React from "react";
// Component
import Tracklist from "./Tracklist";
// CSS
import styles from "../css/SearchResults.module.css";

function SearchResults({ musicData, isAuthorized, handleTrackClick }) {
  return (
    <div className={styles.container}>
      <h2>
        <span style={{ color: "#fc5a4b" }}>Results</span>
      </h2>
      <hr className={styles.hr} />
      <Tracklist
        musicData={musicData}
        isAuthorized={isAuthorized}
        handleTrackClick={handleTrackClick}
      />
    </div>
  );
}

export default SearchResults;
