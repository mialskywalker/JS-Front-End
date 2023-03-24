function addressBook(input) {

    let people = {};

    for (const iterator of input) {
        let [ key, value ] = iterator.split(':');
        people[key] = value;
    }

    let sortedByName = Object.keys(people)
        .sort((nameA, nameB) => nameA.localeCompare(nameB));

    for (const key of sortedByName) {
        console.log(`${key} -> ${people[key]}`);
    }

}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);