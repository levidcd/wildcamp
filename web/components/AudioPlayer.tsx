import React, { useState } from "react";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import styles from "./AudioPlayer.module.scss";

import AudioManager from "../lib/AudioManager";

const audioManager = new AudioManager("music");

console.log(audioManager);

const AudioPlayer = () => {
  // function rbf() {
  //   let audio: any = document.getElementById("music");
  //   audio.currentTime = 0;
  // }

  // function bf() {
  //   var audio: any = document.getElementById("music");
  //   if (audio !== null) {
  //     //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
  //     if (audio.paused) {
  //       audio.play(); //audio.play();// 这个就是播放
  //     } else {
  //       audio.pause(); // 这个就是暂停
  //     }
  //   }
  // }
  function bf() {
    // var audio: any = document.getElementById("music");
    if (audioManager.isInit) {
      if (audioManager.paused) {
        audioManager.play();
      } else {
        audioManager.pause(); // 这个就是暂停
      }
      setIsPlaying(!audioManager.paused);
    } else {
      audioManager.init();
    }
  }

  const playOrPause = (e: any) => {
    bf();
  };

  const [isPlaying, setIsPlaying] = useState(false);

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
