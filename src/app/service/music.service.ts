import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private soundCloud: HTMLElement;
  private off: HTMLElement;
  private on: HTMLElement;
  private myAudio: HTMLAudioElement;
  private btnBars: HTMLElement;
  private btnTimes: HTMLElement;
  private sideNav: HTMLElement;
  constructor() { }

  setupMusicControls() {
    this.soundCloud = document.querySelector(".sound-cloud");
    this.off = document.getElementById("off");
    this.on = document.getElementById("on");
    this.myAudio = document.getElementById("myAudio") as HTMLAudioElement;
    this.btnBars = document.querySelector('.bars');
    this.btnTimes = document.querySelector('.times');
    this.sideNav = document.querySelector('.aside');

    if (this.off || this.on) {
      this.off.addEventListener("click", () => this.soundTrack("off"));
      this.on.addEventListener("click", () => this.soundTrack("on"));
    }

    this.btnBars.addEventListener('click', () => this.myFunc('open'));
    this.btnTimes.addEventListener('click', () => this.myFunc('close'));
  }

  soundTrack(soundState: string): void {
    if (soundState === "off") {
      this.on.style.display = "block";
      this.off.style.display = "none";
      this.soundCloud.style.color = "#fdbf2d";
      this.myAudio.play();
    } else if (soundState === "on") {
      this.on.style.display = "none";
      this.off.style.display = "block";
      this.soundCloud.style.color = "#a51515";
      this.myAudio.pause();
    }
  }

  myFunc(navCondition: string): void {
    if (navCondition === 'open') {
      this.sideNav.classList.add('show-nav');
      this.btnTimes.style.display = "block";
      this.btnBars.style.display = "none";
    } else if (navCondition === 'close') {
      this.sideNav.classList.remove('show-nav');
      this.btnTimes.style.display = "none";
      this.btnBars.style.display = "block";
    }
  }
}
