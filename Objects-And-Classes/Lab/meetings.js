function meetings(arr) {

    let meeting = {};

    for (const iterator of arr) {
        [ key, value ] = iterator.split(' ');
        if (key in meeting) {
            console.log(`Conflict on ${key}!`);
        } else {
            meeting[key] = value;
            console.log(`Scheduled for ${key}`);
        }
    }

    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }

}


meetings(
    ['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
    );
meetings(
    ['Friday Bob', 
    'Saturday Ted',
    'Monday Bill',
    'Monday John', 
    'Wednesday George']
    );