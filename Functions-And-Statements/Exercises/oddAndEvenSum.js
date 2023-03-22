function OddAndEvenSum(number) {

    let stringDigits = number.toString().split('');
    let digits = stringDigits.map(Number);
    
    let odd = [];
    let even = [];

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            even.push(digits[i]);
        } else {
            odd.push(digits[i]);
        }
    }

    let oddSum = odd.reduce((a, b) => a + b, 0);
    let evenSum = even.reduce((a, b) => a + b, 0);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

OddAndEvenSum(1000435);
OddAndEvenSum(3495892137259234);