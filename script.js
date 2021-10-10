let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let stop_btn = document.getElementById("stop-btn");

play_btn.addEventListener("click", () => {
    cancion.play();
});

pause_btn.addEventListener("click", () => {
    cancion.pause();
});

stop_btn.addEventListener("click", () => {
    cancion.stop();
});
