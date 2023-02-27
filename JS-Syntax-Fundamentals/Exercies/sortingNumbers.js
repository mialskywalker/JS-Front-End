function solve(arr) {

    let currentMax;
    let currentMin;
    let newArr = [];

    while (arr.length > 0) {

        if (arr.length > 1) {
            currentMax = Math.max(...arr);
            currentMin = Math.min(...arr);
    
            newArr.push(currentMin);
            newArr.push(currentMax);
    
            let toRemoveMin = arr.indexOf(currentMin);
            arr.splice(toRemoveMin, 1);
    
            let toRemoveMax = arr.indexOf(currentMax);
            arr.splice(toRemoveMax, 1);
        }
        else {
            newArr.push(arr[0]);
            break;
        }
    }

    return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);