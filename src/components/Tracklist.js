import React from "react";
import Track from "./Track";

function Tracklist({ musicData, isAuthorized, handleTrackClick }) {
  if (isAuthorized) {
    return (
      <>
        {musicData.map((music) => {
          return (
            <Track
              key={music.id}
              music={music}
              handleTrackClick={handleTrackClick}
            />
          );
        })}
      </>
    );
  }
}

export default Tracklist;
