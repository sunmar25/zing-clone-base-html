const player = document.getElementById('music');
const progressTimePlay = document.getElementById('progress_time_play');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const duration = document.getElementById('time_duration');
const playPause = document.getElementById('play_pause');
const volume = document.getElementById('volume');
const progressVolume = document.getElementById('progress_volume');
var intervalId = null;

// Update the progress bar
function updateProgressBar() {
    let percentage = Math.floor((100 / player.duration) * player.currentTime);
    progressTimePlay.style.width = percentage + "%";
}
// Update count time
function updateCountTime() {
    let currentTime = Math.floor(player.currentTime);
    minute.innerText = '0' + Math.floor(currentTime / 60);

    if ((currentTime - (Math.floor(currentTime / 60) * 60)) < 10) {
        second.innerText = '0' + String(currentTime - (Math.floor(currentTime / 60) * 60));
    } else {
        second.innerText = currentTime - (Math.floor(currentTime / 60) * 60);
    }
}
//time - duration
window.onload = function(){
    let _minute =Math.floor(player.duration / 60);
        let _second =Math.floor(player.duration - _minute * 60);
        duration.innerText = `0${_minute}:${_second}`;
}
//play - pause
playPause.addEventListener('click',playOrPause);
function playOrPause(){
    let interval = Loop();//call Loop
    if(player.paused){
       intervalId = interval; 
    }
    if(player.duration > 0 && player.paused){
        player.play();
        playPause.classList.remove("far","fa-play-circle");
        playPause.classList.add("far","fa-pause-circle");
        
    }else{
        player.pause();
        playPause.classList.remove("far","fa-pause-circle"); 
        playPause.classList.add("far","fa-play-circle");
        //clear all interval 
        clearInterval(interval);
        clearInterval(intervalId);
    }

}
//Volume Up, Down
function Volume(){
    if(player.volume == 0){
        console.log("0.5");
        player.volume = 0.5;
        progressVolume.style.width = "50%";
        volume.classList.remove("fas", "fa-volume-mute")
        volume.classList.add("fas", "fa-volume-down");
    }else{
        if(player.volume == 0.5){
            console.log("1");
            player.volume = 1;
            progressVolume.style.width = "100%";
            volume.classList.remove("fas", "fa-volume-down");
            volume.classList.add("fas", "fa-volume-up");
        }else{
            console.log("mute");
            player.volume = 0;
            progressVolume.style.width = "0%";
            volume.classList.remove("fas", "fa-volume-up");
            volume.classList.add("fas", "fa-volume-mute");
        }
    }
}
volume.addEventListener('click',Volume);

//Loop update
function Loop(){
    const _clearInterval = setInterval(() => {
        updateCountTime();
        updateProgressBar();
        console.log('hello');
        if(player.currentTime == player.duration){
            clearInterval(_clearInterval);
            playPause.classList.remove("far","fa-pause-circle"); 
            playPause.classList.add("far","fa-play-circle");
        }
    }, 1000);
    return _clearInterval;
}
