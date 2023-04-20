

// Play music functionality
document.addEventListener('DOMContentLoaded', () => {

    // Music switch
    const soundCloud = document.querySelector(".sound-cloud");
    const off = document.getElementById("off");
    const on = document.getElementById("on");
    const myAudio = document.getElementById("myAudio");

    off.addEventListener("click", () => soundTrack("off"));
    on.addEventListener("click", () => soundTrack("on"));

    const soundTrack = (soundState) => {
        if (soundState === "off") {
            on.style.display = "block";
            off.style.display = "none";
            soundCloud.style.color = "#fdbf2d";
            myAudio.play();
        } else if (soundState === "on") {
            on.style.display = "none";
            off.style.display = "block";
            soundCloud.style.color = "#a51515";
            myAudio.pause();
        }
    };
});

// Navbar
const myFunc = (navCondition) => {
    if (navCondition === 'open') {
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if (navCondition === 'close') {
        SideNav.classList.remove('show-nav');
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    }
}