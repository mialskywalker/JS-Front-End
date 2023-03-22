function SimpleCalculator(numOne, numTwo, operator) {

    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    switch (operator) {
        case 'multiply':
            console.log(multiply(numOne, numTwo));
            break;
        case 'divide':
            console.log(divide(numOne, numTwo));
            break;
        case 'add':
            console.log(add(numOne, numTwo));
            break;
        case 'subtract':
            console.log(subtract(numOne, numTwo));
            break;
    }

}

SimpleCalculator(5, 5, 'multiply');
SimpleCalculator(40, 8, 'divide');
SimpleCalculator(12, 19, 'add');
SimpleCalculator(50, 13, 'subtract');