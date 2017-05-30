console.log("callouts loaded.");
siren = new Audio('sounds/siren2.wav');
siren.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCall() {
    var xmlhttp = new XMLHttpRequest();
    var call;
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            call = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", "./json/callOutSample.json", true);
    xmlhttp.send();
    console.log(call["CallName"]);
    return call;
}

function createCall() {
    //var call = getCall();
    var call = callData;
    var age = getRandom(call.Age1, call.Age2);
    console.log(call);
    var dispatchText = "Unit 602, please respond Code " + call.DispatchPriority + " to 1008 London Rd for a " + age + " y/o " + call.Gender + " complaining of " + call.Complaint + ".";
    updateText(dispatchText);
    onRun = "Y";
}

function onScene() {
    updateText("Unit 602, I have you on scene at TIME.");
    siren.pause();
}

function getVitals() {
    var call = callData;
    var BP = getRandom(call.BPs1, call.BPs2) + "/" + getRandom(call.BPd1, call.BPd2);
    var HR = getRandom(call.HR1, call.HR2);
    var PulseOX = getRandom(call.PulseOX1, call.PulseOX2);
    var RR = getRandom(call.RR1, call.RR2);
    var BGL = getRandom(call.BGL1, call.BGL2);
    updateText("BP: " + BP + " HR: " + HR + " Pulse Ox: " + PulseOX + " RR: " + RR + " BGL: " + BGL)
}