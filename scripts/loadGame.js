console.log("Loaded loadGame.js");

function loadGame() { //load game info from cookies
    multiplier = getUserData(6);
    amount = getUserData(4);
    totalPixels = getUserData(3);
    if (multiplier === "") {
        multiplier = 1;
    }
    //load owned
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
}