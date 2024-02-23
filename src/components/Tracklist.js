import React from 'react';
import Track from './Track';

function Tracklist({ musicData }) {
  return (
    <>
      {musicData.map((music) => {
        return <Track key={music.id} music={music} />
      })}
    </>
  );
}

export default Tracklist;
