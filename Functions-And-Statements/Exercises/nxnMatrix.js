function NxNMatrix(n) {

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([])
        for (let index = 0; index < n; index++) {
            arr[i].push(n);
            
        }
        
    }

    for (let index = 0; index < arr.length; index++) {
        
        console.log(arr[index].join(' '));
    }

}

NxNMatrix(3);
NxNMatrix(7);
NxNMatrix(2);