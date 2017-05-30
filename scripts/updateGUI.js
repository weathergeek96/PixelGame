function updateGUI() {
    document.getElementById("pixels").innerHTML = String(totalPixels.toFixed(0));
    setCookie('amount', amount);
    setCookie('pixels', totalPixels);
    setCookie('own', owned);
}

function updateOwnedGUI(item) {
    var id = item + "Own";
    console.log(owned[item]);
    document.getElementById(id).innerHTML = owned[item];
}