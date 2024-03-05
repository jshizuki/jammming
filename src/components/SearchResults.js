import React from "react";
// Component
import Tracklist from './Tracklist';
// CSS
import styles from "../css/SearchResults.module.css";

function SearchResults({musicData, isAuthorized}) {
  return (
    <div className={styles.container}>
      <h2><span style={{color: "#fc5a4b"}}>Results</span></h2>
      <hr />
      <Tracklist musicData={musicData} isAuthorized={isAuthorized} />
    </div>
  );
}

export default SearchResults;
