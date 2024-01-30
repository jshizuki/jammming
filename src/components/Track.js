import React from "react";

function Track({music}) {
  return (
    <div key={music.id}>
      <p>Name: {music.name}</p>
      <p>Artist: {music.artist}</p>
      <p>Album: {music.album}</p>
    </div>
  );
}

export default Track;
