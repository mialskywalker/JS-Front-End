function City(obj) {

    const tuples = Object.entries(obj);
    for (const [key, value] of tuples) {
        console.log(`${key} -> ${value}`);
    }

}

City({
    name: "Plovdiv",    
    area: 389,    
    population: 1162358,    
    country: "Bulgaria",    
    postCode: "4000"
    });