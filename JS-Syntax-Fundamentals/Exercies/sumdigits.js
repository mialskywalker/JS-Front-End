function solve(number) {

    let arr = number.toString().split('');
    arr = arr.map(Number);
    let result = arr.reduce((a, b) => a + b, 0);

    console.log(result);

}

solve(245678);
solve(97561);
solve(543);