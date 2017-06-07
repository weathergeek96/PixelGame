console.log("main loaded");
// Timer
timerVar = setInterval(timer, 10);
//Update DataBase
setInterval(sendUserData, 30000);
setTimeout(sendUserData, 2000);
//update highscore GUI
setTimeout(updateHighscoreGUI, 2000);
//load game info from cookies
loadGame();
//Check for currently logged in user
checkLoginCookie();

function timer() {
    totalPixels = totalPixels + (amount * multiplier / 100);
    updateGUI();
}