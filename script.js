document.addEventListener("DOMContentLoaded", function(){
    let video = document.getElementById("myVideo");
    let button = document.getElementById("mybutton");

    button.addEventListener("click", function(){
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
        let container = document.getElementById("registerContainer");
        container.style.display = (container.style.display === "none") ? "block" : "none";
    }
});

document.getElementById("mybutton").addEventListener("click", function() {
    let container = document.getElementById("registerContainer");
    container.style.display = (container.style.display === "none") ? "block" : "none";
});