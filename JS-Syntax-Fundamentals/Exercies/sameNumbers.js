function solve(number) {

    let arr = number.toString().split('');
    arr = arr.map(Number);
    let first = arr[0];
    let same;

    for (const iterator of arr) {
        if (first === iterator) {
            same = true;
        }
        else {
            same = false;
        }
    }

    let result = arr.reduce((a, b) => a + b, 0);

    console.log(same);
    console.log(result);

}

solve(2222222);
solve(1234);