function updateGUI() {
    document.getElementById("pixels").innerHTML = String(totalPixels.toFixed(0));
}

function updateOwnedGUI(item) {
    var id = item + "Own";
    console.log(owned[item]);
    document.getElementById(id).innerHTML = owned[item];
}