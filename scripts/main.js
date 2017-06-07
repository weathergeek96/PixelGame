console.log("main loaded");
// Timer
timerVar = setInterval(timer, 10);
//Update DataBase
setInterval(sendUserData, 60000);
setTimeout(sendUserData, 2000);
//update highscore GUI
setTimeout(getScore, 2000);
//Intial setup vars and objects
var multiplier, amount, totalPixels;
var workers = ["CreativeSushi", "sam", "StarLord", "WeatherGeek", "Benji", "MM4005", "Scruffy", "Sarah.Oswin", "Shearsquid", "LuminousKnight", "Fluffyn", "Llamataco", "Garbagefield"];
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
    , Garbagefield: 0
};
var cost = {
    CreativeSushi: 1000000
    , sam: 2500
    , StarLord: 100
    , WeatherGeek: 500000
    , Benji: 100000
    , MM4005: 1000
    , Scruffy: 10000000
    , 'Sarah.Oswin': 25000
    , Shearsquid: 50000
    , LuminousKnight: 500
    , Fluffyn: 250000
    , Llamataco: 750000
    , Garbagefield: 10000
}
var itemAmountObj = {
    CreativeSushi: 10000
    , sam: 25
    , StarLord: 1
    , WeatherGeek: 5000
    , Benji: 1000
    , MM4005: 10
    , Scruffy: 100000
    , 'Sarah.Oswin': 250
    , Shearsquid: 500
    , LuminousKnight: 5
    , Fluffyn: 2500
    , Llamataco: 7500
    , Garbagefield: 100
}
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
//load game info from cookies
loadGame();

function timer() {
    totalPixels = totalPixels + (amount * multiplier / 100);
    updateGUI();
}