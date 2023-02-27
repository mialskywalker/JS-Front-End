function solve(arr) {

    arr.sort((a, b) => a.localeCompare(b));
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(`${i+1}.${arr[i]}`);

    }

    console.log(newArr.join('\n'));

}

solve(['John', 'Bob', 'Christina', 'Ema']);