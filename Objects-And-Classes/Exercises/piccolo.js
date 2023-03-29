function piccolo(input) {

    let parkingLot = new Set();

    for (const line of input) {
        let [ command, number ] = line.split(', ');
        if (command === 'IN') {
            parkingLot.add(number);
        }
        else if (command === "OUT") {
            parkingLot.delete(number);
        }
    }

    if (parkingLot.size === 0){
        console.log('Parking Lot is Empty');
    } else {
        Array.from(parkingLot)
            .sort((carA, carB) => {
                return carA.localeCompare(carB);
            }).forEach(num => console.log(num));
    }
    
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',    
    'OUT, CA2844AA',    
    'OUT, CA1234TA'
]);