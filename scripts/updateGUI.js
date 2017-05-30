function updateGUI() {
    document.getElementById("pixels").innerHTML = String(totalPixels.toFixed(0));
    buttonColor();
    setCookie('amount', amount);
    setCookie('pixels', totalPixels);
    var ownedString = JSON.stringify(owned);
    setCookie('owned', ownedString);
    document.getElementById('amount').innerHTML = amount;
    //setCookie('own', owned);
}

function updateOwnedGUI(item) {
    var id = item + "Own";
    console.log(owned[item]);
    document.getElementById(id).innerHTML = owned[item];
}