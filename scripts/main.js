console.log("main loaded");
timerVar = setInterval(timer, 10);
setInterval(sendUserData, 60000);
setTimeout(sendUserData, 2000);
var multiplier, amount, totalPixels;
var workers = ["CreativeSushi", "sam", "StarLord", "WeatherGeek", "Benji", "MM4005", "Scruffy", "Sarah.Oswin", "Shearsquid", "LuminousKnight", "Fluffyn", "Llamataco"];
var owned = {
    CreativeSushi: 0
    , sam: 0
    , StarLord: 0
    , WeatherGeek: 0
    , Benji: 0
    , MM4005: 0
    , Scruffy: 0
    , 'Sarah.Oswin': 0
    , Shearsquid: 0
    , LuminousKnight: 0
    , Fluffyn: 0
    , Llamataco: 0
};
var cost = {
    CreativeSushi: 1000000
    , sam: 2500
    , StarLord: 25
    , WeatherGeek: 500000
    , Benji: 100000
    , MM4005: 1000
    , Scruffy: 10000000
    , 'Sarah.Oswin': 25000
    , Shearsquid: 50000
    , LuminousKnight: 100
    , Fluffyn: 250000
    , Llamataco: 750000
};
var powerUpCost = {
    Starwars_Meme: 1000000
    , Almond_Activator: 2000000
};
var powerUpMultiplier = {
    Starwars_Meme: 1
    , Almond_Activator: 3
};
var powerUpOwned = {
    Starwars_Meme: 0
    , Almond_Activator: 0
};
multiplier = getCookie('multplier');
if (multiplier === "") {
    multiplier = 1;
}
amount = checkCookie('amount');
totalPixels = checkCookie('pixels');
var ownedString = getCookie('owned');
if (ownedString != "") {
    owned = JSON.parse(ownedString);
    console.log("Loaded from cookie");
    var x = workers.length;
    while (x > 0) {
        x = x - 1;
        worker = workers[x];
        checkObj = owned[worker];
        if (checkObj === undefined) {
            console.log("consider it undefined");
            owned[worker] = 0;
        }
    }
    setTimeout(loadOwned, 1000);
}
console.log(totalPixels);
var rawScore;
getScore();

function timer() {
    totalPixels = totalPixels + (amount * multiplier / 100);
    updateGUI();
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
        var workerSelect = workers[x];
        var id = workerSelect + "Own";
        document.getElementById(id).innerHTML = owned[workerSelect];
    }
}