function Employees(input) {

    let people = {};

    for (let i = 0; i < input.length; i++) {
        
        let name = input[i];
        people[i] = [name, name.length];
    }
    
    for (const iterator in people) {
        console.log(`Name: ${people[iterator][0]} -- Personal Number: ${people[iterator][1]}`);
    }

}


Employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

Employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);