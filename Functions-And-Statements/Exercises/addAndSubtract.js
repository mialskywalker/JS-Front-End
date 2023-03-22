function AddAndSubtract(first, second, third) {

    function sum(n1, n2){
        return n1 + n2;
    }

    function subtract(n1, n2) {
        return n1 - n2;
    }

    let numSum = sum(first, second);
    let result = subtract(numSum, third);
    console.log(result);

}

AddAndSubtract(23, 6, 10);
AddAndSubtract(1, 17, 30);
AddAndSubtract(42, 58, 100);