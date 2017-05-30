console.log("main loaded");
timerVar = setInterval(timer, 10);
var multiplier, amount, totalPixels;
var owned = {
    CreativeSushi: 0
    , sam: 0
    , StarLord: 0
    , WeatherGeek: 0
    , Benji: 0
    , MM4005: 0
}
multiplier = 1;
amount = 0;
totalPixels = 0;
amount = start('amount');
totalPixels = start('pixels');
owned = start('owned');
if (amount === "") {
    amount = 0;
}
if (totalPixels === "") {
    totalPixels = 0;
}
if (owned === "") {
    owned = {
        CreativeSushi: 0
        , sam: 0
        , StarLord: 0
        , WeatherGeek: 0
        , Benji: 0
        , MM4005: 0
    }
}

function timer() {
    totalPixels = totalPixels + (amount * multiplier / 100);
    updateGUI();
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
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