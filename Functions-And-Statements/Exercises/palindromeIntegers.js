function PalindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i].toString().split('');
        let reversed = [...num];
        reversed = reversed.reverse();
        num = num.map(Number)
        reversed = reversed.map(Number);

        let first = num.join('');
        let second = reversed.join('');
        
        if (first === second){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

PalindromeIntegers([123, 323, 421, 121]);
PalindromeIntegers([32, 2, 232, 1010]);