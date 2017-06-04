function checkLoginCookie() {
    var user = getCookie("username");
    var pass = getCookie("password");
    if (user != "") {
        alert("Welcome again " + user);
    }
    else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            var check1 = checkUser(user);
            if (check1 != undefined) {
                var check = check1[2];
                console.log("checkLoginCookie() var check:" + check);
                var id = check1[0];
                console.log("checkLoginCookie() var id:" + id)
            }
            else {
                check = undefined;
            }
            if (check != undefined && check != null && check != "") {
                pass = prompt("Please enter your password:", "");
                if (pass != "" && pass != null && pass === check) {
                    setCookie("username", user);
                    setCookie("password", pass);
                    var id = getUserID(user);
                    console.log("var id = " + id);
                    setCookie("userID", id);
                    alert("Welcome again " + user);
                }
                else {
                    alert("Incorrect password");
                }
            }
            else {
                createUser(user);
            }
        }
    }
}

function checkUser(username) {
    var rawData = getLogins();
    var json = JSON.parse(rawData);
    var userArray = json.users.records;
    var uArrayLen = userArray.length;
    var x = 0;
    while (x < uArrayLen) {
        var playerArray = userArray[x];
        //console.log("playerArray: " + playerArray[1] + " username: " + username);
        if (playerArray[1] === username) {
            //console.log("THIS IS IT!");
            console.log(playerArray[2]);
            return playerArray;
        }
        x = x + 1;
    }
}

function createUser(username) {
    pass = prompt("You do not have a user account. No worries, we will create one for you! Please enter your desired password:", "");
    if (pass != "" && pass != null) {
        alert("Welcome " + username + " Your new password is: " + pass);
        sendUser(username, pass);
        var id = getUserID(username);
        setCookie("userID", id);
        setCookie("username", username);
        setCookie("password", pass);
    }
}
checkLoginCookie();