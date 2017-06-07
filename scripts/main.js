console.log("main loaded");
//Check for currently logged in user
checkLoginCookie();
// Timer
timerVar = setInterval(timer, 10);
//Update DataBase
setInterval(sendUserData, 30000);
setTimeout(sendUserData, 2000);
//update highscore GUI
setTimeout(updateHighscoreGUI, 2000);
//load game info from cookies
loadGame();

function timer() {
    totalPixels = totalPixels + (amount * multiplier / 100);
    updateGUI();
}