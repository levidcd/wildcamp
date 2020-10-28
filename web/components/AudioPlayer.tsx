import React, { useState } from "react";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import styles from "./AudioPlayer.module.scss";

import AudioManager from "../lib/AudioManager";

const audioManager = new AudioManager("music");

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  function bf() {
    if (audioManager.isInit) {
      if (audioManager.paused) {
        audioManager.play();
      } else {
        audioManager.pause(); // 这个就是暂停
      }
      setIsPlaying(!audioManager.paused);
    } else {
      audioManager.reInit().play();
      setIsPlaying(!audioManager.paused);
    }
  }

  const playOrPause = (e: any) => {
    bf();
  };

  if (audioManager.isInit) {
    if (audioManager.paused === isPlaying) {
      setIsPlaying(!audioManager.paused);
    }
  }

  return (
    <div>
      <div
        className={styles.audioPlayer}
        onClick={(e) => {
          playOrPause(e);
        }}
      >
        {!isPlaying ? (
          <PlayCircleOutlined
            style={{ fontSize: "30px", color: "rgba(176, 14, 37, 0.7)" }}
          />
        ) : (
          <PauseCircleOutlined
            style={{ fontSize: "30px", color: "rgba(176, 14, 37, 0.7)" }}
          />
        )}
      </div>

      <audio id="music" loop preload="auto">
        <source src="/audio/Promise.mp3" type="audio/mpeg" />
        您的浏览器不支持 audio 元素。
      </audio>
    </div>
  );
};

export default AudioPlayer;
