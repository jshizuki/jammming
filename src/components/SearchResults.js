import React from "react";
// Component
import Tracklist from './Tracklist';
// CSS
import styles from "../css/SearchResults.module.css";

function SearchResults({ musicData }) {
  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <Tracklist musicData={musicData} />
    </div>
  );
}

export default SearchResults;
