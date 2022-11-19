// Add js here.

// Load page
// let playButton = document.getElementById("play");
let loaded = document.querySelector("main");
let video = document.getElementById("videoplayer");
loaded.addEventListener("load", PageLoad());
function PageLoad(){
    video.load();
    video.loop = false;
    video.autoplay = false;
}

// Play the video
let playButton = document.getElementById("play");
playButton.addEventListener("click", playBegin);

function playBegin(){
    video.play();
}

// Pause the video
let pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", playPause);

function playPause(){
    video.pause();
}

// Slow down
let slowButton = document.getElementById("slower");
slowButton.addEventListener("click", slower);
function slower(){
    if (video.playbackRate!=0.5){
        video.playbackRate=video.playbackRate/2
    }
    else{
        alert("Video is at slowest speed!")
    }
}

// Speed up
let speedupButton = document.getElementById("faster");
speedupButton.addEventListener("click", faster);
function faster(){
    if (video.playbackRate!=2){
        video.playbackRate=video.playbackRate*2
    }
    else{
        alert("Video is at fastest speed!")
    }
}

// Skip ahead
let skipButton = document.getElementById("skip");
skipButton.addEventListener("click", skipAhead);
function skipAhead(){
    if (video.currentTime+15 >= video.seekable.end(0)){
        video.currentTime = video.seekable.start(0);
    }
    else{
        video.currentTime = video.currentTime + 15;
    }
}

// Mute
let muteButton = document.getElementById("mute");
muteButton.addEventListener("click", mute);
function mute(){
    if (video.muted){
        video.muted = false;
        muteButton.innerText = "Mute";
    }
    else{
        video.muted = true;
        muteButton.innerText = "Unmute";
    }
}

// Volume slider
let slider = document.getElementById("slider");
let volume = document.getElementById("volume");
volume.innerText = slider.value + "%";
slider.addEventListener("click", Slider);
function Slider(){
    video.volume = slider.value/100;
    volume.innerText = slider.value + "%";
}
