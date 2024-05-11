import React, { useState, useEffect } from "react";
import Track from "./Track";

function Tracklist({ musicData, isAuthorized, handleTrackClick }) {
  const [audio, setAudio] = useState(null);
  const [clickedTrack, setClickedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", handleAudioEnded);
      return () => {
        if (!audio.paused) {
          audio.pause();
          setIsPlaying(false);
        }
        audio.removeEventListener("ended", handleAudioEnded);
      };
    }
  }, [audio]);

  useEffect(() => {
    stopPlayingTrack();
  }, [musicData]);

  const stopPlayingTrack = () => {
    if (audio && !audio.paused) {
      audio.pause();
      setAudio(null);
      setClickedTrack(null);
      setIsPlaying(false);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false); // Update state to reflect audio playback state
  };

  const handlePlayClick = (track) => {
    if (audio === null && isPlaying === false) {
      const song = new Audio(track.previewUrl);
      song.play();
      setAudio(song);
      setIsPlaying(true);
      setClickedTrack(track.id);
    } else if (clickedTrack === track.id && isPlaying === true) {
      audio.pause();
      setIsPlaying(false);
    } else if (clickedTrack === track.id && isPlaying === false) {
      audio.play();
      setIsPlaying(true);
    } else if (clickedTrack !== track.id) {
      const song = new Audio(track.previewUrl);
      audio.pause();
      song.play();
      setAudio(song);
      setIsPlaying(true);
      setClickedTrack(track.id);
    }
  };

  if (isAuthorized) {
    return (
      <>
        {musicData.map((music, index) => {
          return (
            <Track
              key={music.id}
              music={music}
              handleTrackClick={handleTrackClick}
              handlePlayClick={handlePlayClick}
              isPlaying={isPlaying}
              clickedTrack={clickedTrack}
            />
          );
        })}
      </>
    );
  }
}

export default Tracklist;
