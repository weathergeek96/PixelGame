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
console.log(owned.CreativeSushi, owned.sam)
multiplier = 1;
amount = 0;
totalPixels = 0;

function timer() {
    totalPixels = totalPixels + (amount * multiplier / 100);
    updateGUI();
}