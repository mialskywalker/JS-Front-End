function solve(typeOfDay, personAge) {

    let ticket;
    let error;

    switch (typeOfDay) {
        case 'Weekday':
            if (0 <= personAge && personAge <= 18) {
                ticket = 12;
            }
            else if (18 < personAge && personAge <= 64) {
                ticket = 18;
            }
            else if (64 < personAge && personAge <= 122) {
                ticket = 12;
            }
            else {
                error = true;
            }
            break;
        
        case 'Weekend':
            if (0 <= personAge && personAge <= 18) {
                ticket = 15;
            }
            else if (18 < personAge && personAge <= 64) {
                ticket = 20;
            }
            else if (64 < personAge && personAge <= 122) {
                ticket = 15;
            }
            else {
                error = true;
            }
            break;
        
        case 'Holiday':
            if (0 <= personAge && personAge <= 18) {
                ticket = 5;
            }
            else if (18 < personAge && personAge <= 64) {
                ticket = 12;
            }
            else if (64 < personAge && personAge <= 122) {
                ticket = 10;
            }
            else {
                error = true;
            }
            break;
    }

    if (error) {
        console.log('Error!');
    } else {
        console.log(`${ticket}$`)
    }

}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);