// interface AudioElement {
//   dom: Element;
// }
// interface AudioEnity {}

class AudioManager {
  #ele: string;
  #audioPlayer: AudioContext | HTMLElement | null;
  isInit: Boolean;
  paused: Boolean;

  constructor(ele: string = "") {
    this.#ele = ele;
    this.#audioPlayer = null;
    this.isInit = false;
    this.paused = true;
    this.init();
  }
  play() {
    if (!this.#audioPlayer) {
      this.init();
    }
    this.#audioPlayer.play();
    this.paused = false;
  }
  pause() {
    if (!this.#audioPlayer) {
      this.init();
    }
    this.#audioPlayer.pause();
    this.paused = true;
  }
  fastSeek(time: string | number) {
    this.#audioPlayer.fastSeek(time);
  }
  getStartDate() {
    return this.#audioPlayer.getStartDate();
  }
  init() {
    if (typeof document !== "undefined") {
      const audioElement = document.getElementById(this.#ele);
      this.#audioPlayer = audioElement;
      this.isInit = true;
      this.paused = true;
      this.#audioPlayer.addEventListener("playing", function () {
        console.log('播放中');
      });
      this.#audioPlayer.addEventListener("timeupdate", function () {
        console.log('播放中');
      });
      this.#audioPlayer.addEventListener("pause", function () {
        console.log('暂停');
      });
    }
  }
}

export default AudioManager;
