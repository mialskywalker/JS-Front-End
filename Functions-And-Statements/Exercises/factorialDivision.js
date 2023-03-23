function FactorialDivision(numOne, numTwo) {

    let firstFactorial = 1;
    let secondFactorial = 1;
    let result = 0;

    for (let i = 1; i <= numOne; i++) {
        firstFactorial *= i
    }
    for (let i = 1; i <= numTwo; i++) {
        secondFactorial *= i;
    }

    result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));

}

FactorialDivision(5, 2);
FactorialDivision(6, 2);