"use strict";

function currentTime() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("clock").innerText = hour + " : " + minute + " : " + second;

    let settingClock = setTimeout(function(){
        currentTime();}, 1000);
}

currentTime();


