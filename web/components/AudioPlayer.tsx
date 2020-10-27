import React from "react";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import styles from './AudioPlayer.module.scss'

const AudioPlayer = () => {

  // function rbf() {
  //   let audio: any = document.getElementById("music");
  //   audio.currentTime = 0;
  // }

  function bf() {
    var audio: any = document.getElementById("music");
    if (audio !== null) {
      //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
      if (audio.paused) {
        audio.play(); //audio.play();// 这个就是播放
      } else {
        audio.pause(); // 这个就是暂停
      }
    }
  }

  const playOrPause = (e: any) => {
    console.log(e.target);
    bf()
  };

  return (
    <div>
      <div className={styles.audioPlayer}
        onClick={(e) => {
          playOrPause(e);
        }}
      >
        {true ? (
          <PlayCircleOutlined style={{ fontSize: "40px" }} />
        ) : (
          <PauseCircleOutlined style={{ fontSize: "40px" }} />
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
