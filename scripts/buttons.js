function PIXELATOR() {
    totalPixels = totalPixels + 1;
    updateGUI();
    console.log("PIXELATOR!!!");
}

function buyItem(item, itemCost, itemAmount) {
    console.log("buyFunctions")
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