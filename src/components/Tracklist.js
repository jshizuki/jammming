import React from 'react';
import Track from './Track';

function Tracklist({ musicData }) {
  return (
    <div>
      {musicData.map((music) => {
        return <Track key={music.id} music={music} />
      })}
    </div>
  );
}

export default Tracklist;
