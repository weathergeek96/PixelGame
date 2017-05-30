eventTimerVar = setInterval(eventTimer, 5000);
var tones1 = new Audio('./sounds/tones1.wav');
console.log("loaded event generator.");

function callOut() {
    tones1.play();
    createCall();
}

function callEvent() {
    if (onRun === "N") {
        var x = Math.floor((Math.random() * 10) + 1);
        x = 1;
        if (x == 1) {
            callOut();
        }
    }
}

function eventTimer() {
    var x = Math.floor((Math.random() * 10) + 1);
    x = 7;
    if (x == 7) {
        callEvent();
    }
}