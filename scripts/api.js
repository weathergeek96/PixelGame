function sendScore() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Successfully talked to the API");
        }
    };
    xhttp.open("POST", "http://simplegenius.pro/pixelgame/api.php/highscoresusername=Caleb&score=3647747", true);
    xhttp.send();
}
console.log("api.js loaded")