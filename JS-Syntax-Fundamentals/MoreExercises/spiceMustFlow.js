function spiceMustFlow(startingYield) {

    let days = 0;
    let spice = 0;

    while (startingYield >= 100) {
        spice += startingYield;
        startingYield -= 10;
        if (spice >= 26){
            spice -= 26;
        }else {
            break;
        }
        days += 1;
    }
    if (spice >= 26) {
        spice -= 26;
    }
    console.log(days);
    console.log(spice);
}

spiceMustFlow(111);
spiceMustFlow(450);