console.log("main loaded");
timerVar = setInterval(timer, 10);
var multiplier, amount, totalPixels;
var workers = ["CreativeSushi", "sam", "StarLord", "WeatherGeek", "Benji", "MM4005"];
var owned = {
    CreativeSushi: 0
    , sam: 0
    , StarLord: 0
    , WeatherGeek: 0
    , Benji: 0
    , MM4005: 0
}
var cost = {
    CreativeSushi: 1000000
    , sam: 2500
    , StarLord: 25
    , WeatherGeek: 500000
    , Benji: 100000
    , MM4005: 1000
}
multiplier = 1;
amount = checkCookie('amount');
totalPixels = checkCookie('pixels');
var ownedString = getCookie('owned');
if (ownedString != "") {
    owned = JSON.parse(ownedString);
    loadOwned();
}
console.log(totalPixels);

function timer() {
    totalPixels = totalPixels + (amount * multiplier / 100);
    updateGUI();
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var x = getCookie(cname);
    if (x != "") {
        return parseInt(x);
    }
    else {
        return 0;
    }
}

function buttonColor() {
    var x = workers.length;
    while (x > 0) {
        x = x - 1;
        worker = workers[x];
        if (cost[worker] > totalPixels) {
            document.getElementById(worker).className = "btn btn-danger";
        }
        else {
            document.getElementById(worker).className = "btn btn-success";
        }
    }
}

function loadOwned() {
    var x = workers.length;
    while (x > 0) {
        x = x - 1;
        worker = workers[x];
        var id = worker + "Own";
        console.log(owned[worker]);
        document.getElementById(id).innerHTML = owned[worker];
    }
}