// video
const play = document.querySelector(".main .play");

function player() {
    const video = document.querySelector(".main video");
    if (video.paused == true) {
        play.style.display = "none";
        video.play();
    } else {
        play.style.display = "block";
        video.pause();
    }
}

const tombol = document.querySelector(".main");
tombol.addEventListener("click", () => {
    player();
})

// slide

var card = document.querySelectorAll(".four-group .card");
var slide = document.querySelectorAll(".four-group .tombol");
var index = 0;

slide[1].addEventListener("click", () => {
    index++;
    for (let i of card) {
        if (index == 0) { $(i).animate({ left: '0px' }); }
        if (index == 1) { $(i).animate({ left: '-780px' }); }
        if (index == 2) { $(i).animate({ left: '-1560px' }); }
        if (index > 2) { index = 2 }
    }
})

slide[0].addEventListener("click", () => {
    index--;
    for (let i of card) {
        if (index == 0) { $(i).animate({ left: '0px' }); }
        if (index == 1) { $(i).animate({ left: '-780px' }); }
        if (index == 2) { $(i).animate({ left: '-1560px' }); }
        if (index < 0) { index = 0 }
    }
})