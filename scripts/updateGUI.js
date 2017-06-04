function updateGUI() {
    document.getElementById("pixels").innerHTML = String(totalPixels.toFixed(0));
    buttonColor();
    setCookie('amount', amount);
    setCookie('pixels', totalPixels);
    setCookie('multiplier', multiplier);
    var ownedString = JSON.stringify(owned);
    setCookie('owned', ownedString);
    document.getElementById('amount').innerHTML = amount;
    //setCookie('own', owned);
}

function updateOwnedGUI(item) {
    var id = item + "Own";
    document.getElementById(id).innerHTML = owned[item];
}

function updateHighscoreGUI(rawData) {
    var json = JSON.parse(rawData);
    var scoreArray = json.users.records;
    var sArrayLen = scoreArray.length;
    var x = 0;
    var text = "<h4>Player - Score</h4> <br>";
    while (x < sArrayLen) {
        var playerArray = scoreArray[x];
        text = text + playerArray[1] + " - " + playerArray[3] + "<br>";
        x = x + 1;
    }
    document.getElementById("scores").innerHTML = text;
}