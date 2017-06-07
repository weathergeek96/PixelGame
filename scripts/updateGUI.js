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

function updateHighscoreGUI() {
    var rawData = getScore();
    var json = JSON.parse(rawData);
    console.log(json);
    var scoreArray = json.users.records;
    console.log(scoreArray);
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