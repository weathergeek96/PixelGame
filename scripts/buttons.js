function PIXELATOR() {
    totalPixels = totalPixels + 1;
    updateGUI();
    console.log("PIXELATOR!!!");
}

function buyItem(item) {
    var itemCost = cost[item];
    var itemAmount = itemAmountObj[item];
    console.log("buyItem var itemCost: " + itemCost);
    if (itemCost > totalPixels) {
        document.getElementById(item).className = "btn btn-danger";
        console.log("Buy failed. Insufficiant Funds");
    }
    else {
        amount = amount + itemAmount;
        totalPixels = totalPixels - itemCost;
        owned[item] = owned[item] + 1;
        updateOwnedGUI(item);
    }
}

function buyPowerUp(item) {
    var itemCost = powerUpCost[item];
    if (itemCost > totalPixels) {
        console.log("Buy failed. Insufficiant Funds");
    }
    else {
        multiplier = multiplier + powerUpMultiplier[item];
        totalPixels = totalPixels - itemCost;
        powerUpOwned[item] = powerUpOwned[item] + 1;
        updateOwnedGUI(item);
    }
}