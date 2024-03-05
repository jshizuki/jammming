import React from "react";
import Track from "./Track";

function Tracklist({ musicData, isAuthorized }) {
  if (isAuthorized) {
    return (
      <>
        {musicData.map((music) => {
          return <Track key={music.id} music={music} />;
        })}
      </>
    );
  }
}

export default Tracklist;
