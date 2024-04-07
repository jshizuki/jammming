import React, { useState, useEffect } from "react";
// CSS
import styles from "../css/Track.module.css";

function Track({ music, handleTrackClick }) {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", handleAudioEnded);
      return () => {
        if (!audio.paused) {
          audio.pause(); // Pause the audio if it's playing
          setIsPlaying(false); // Update state to reflect audio playback state
        }
        audio.removeEventListener("ended", handleAudioEnded);
      };
    }
  }, [audio])

  const handlePlayClick = (audioClip) => {
    if (!audio) {
      const newAudio = new Audio(audioClip);
      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);
    } else {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false); // Update state to reflect audio playback state
  };

  return (
    <>
      <div className={styles.trackContainer}>
        <div key={music.id}>
          <div className={styles.nameAndPlayButton}>
            {music.previewUrl !== null ? (
              <i
                className={
                  isPlaying
                    ? "fa-solid fa-circle-pause"
                    : "fa-regular fa-circle-play"
                }
                onClick={() => handlePlayClick(music.previewUrl)}
              ></i>
            ) : (
              ""
            )}
            <h3>{music.name}</h3>
          </div>
          <p>
            {music.artist} | {music.album}
          </p>
        </div>
        <h3 className={styles.plusSign} onClick={() => handleTrackClick(music)}>
          +
        </h3>
      </div>
      <hr />
    </>
  );
}

export default Track;
