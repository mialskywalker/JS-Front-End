function towns(input) {

    let townObjects = {};

    for (const i in input) {
        
        let [ town, latitude, longitude ] = input[i].split(' | ');

        // townObjects.Town = town;
        // townObjects.Latitude = Number(latitude).toFixed(2);
        // townObjects.Longitude = Number(longitude).toFixed(2);
        townObjects[i] = [ town, Number(latitude).toFixed(2), Number(longitude).toFixed(2) ];

    }

    for (const index in townObjects) {
        console.log(`{ town: '${townObjects[index][0]}', latitude: '${townObjects[index][1]}', longitude: '${townObjects[index][2]}' }`);
    }

}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);

towns([
    'Plovdiv | 136.45 | 812.575'
]);