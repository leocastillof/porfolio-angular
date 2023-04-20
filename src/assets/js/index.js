

// Play music functionality
document.addEventListener('DOMContentLoaded', () => {
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

document.addEventListener("DOMContentLoaded", function () {
    const section_home = document.querySelector('#section-home');

    var dots = [],
        mouse = {
            x: 0,
            y: 0,
        };

    var Dot = function () {
        this.x = 0;
        this.y = 0;
        this.node = (function () {
            var n = document.createElement("div");
            n.className = "trail";
            document.body.appendChild(n);
            return n;
        })();
    };

    Dot.prototype.draw = function () {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };

    for (var i = 0; i < 12; i++) {
        var d = new Dot();
        dots.push(d);
    }

    function draw() {
        var x = mouse.x,
            y = mouse.y;

        dots.forEach(function (dot, index, dots) {
            var nextDot = dots[index + 1] || dots[0];

            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * 0.6;
            y += (nextDot.y - dot.y) * 0.6;
        });
    }

    if (section_home) {
        section_home.addEventListener("mousemove", function (event) {
            mouse.x = event.pageX;
            mouse.y = event.pageY;
        });
    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    animate();
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


// Functionality ends here
$(document).ready(function () {
    if (!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")) {
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})