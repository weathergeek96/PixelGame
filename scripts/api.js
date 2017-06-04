console.log("api.js loaded");

function getScore() {
    var response;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = this.responseText;
            updateHighscoreGUI(response);
        }
    };
    xhttp.open("GET", "http://simplegenius.pro/pixelgame/api.php/users", true);
    xhttp.send();
}

function getLogins() {
    var response;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://simplegenius.pro/pixelgame/api.php/users", false);
    xhttp.send();
    return xhttp.responseText;
}

function getUserID(user) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://simplegenius.pro/pixelgame/api.php/users?filter=username,eq," + user, false);
    xhttp.send();
    var response = xhttp.responseText;
    var json = JSON.parse(response);
    var parsed = json.users.records;
    var sendResponse = parsed[0];
    return sendResponse[0];
}

function sendUser(username, password) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Successfully sent new user");
        }
    };
    xhttp.open("POST", "http://simplegenius.pro/pixelgame/api.php/users", true);
    xhttp.send("username=" + username + "&password=" + password + "&score=0");
}

function sendUserData() {
    var amount = getCookie("amount");
    var pixels = totalPixels;
    var ownedString = JSON.stringify(owned);
    var multiplier = getCookie("multiplier");
    var id = getCookie("userID");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Successfully talked to the API");
        }
    };
    xhttp.open("PUT", "http://simplegenius.pro/pixelgame/api.php/users/" + id, true);
    xhttp.send("score=" + pixels + "&amount=" + amount + "&owned=" + ownedString + "&multiplier=" + multiplier);
}