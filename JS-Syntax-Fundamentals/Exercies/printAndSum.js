function solve(startingNum, endingNum) {

    let result = 0;
    let arr = [];

    for (let i = startingNum; i <= endingNum; i++) {
        result += i;    
        arr.push(i);    
    }

    console.log(arr.join(' '));
    console.log(`Sum: ${result}`);

}

solve(5, 10);
solve(0, 26);
solve(50, 60);