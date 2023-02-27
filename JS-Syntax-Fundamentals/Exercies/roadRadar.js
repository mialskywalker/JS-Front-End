function solve(speed, zone) {

    let difference = 0;
    let limit;
    let keyword;

    switch (zone) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if (speed > limit) {
        difference = speed - limit;

        if (difference <= 20) {
            keyword = 'speeding';
        }
        else if (difference > 20 && difference <= 40) {
            keyword = 'excessive speeding';
        }
        else if (difference > 40) {
            keyword = 'reckless driving';
        }
        
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${keyword}`);
    }
    else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }

}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');