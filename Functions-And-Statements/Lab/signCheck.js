function SignCheck(numOne, numTwo, numThree) {

    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        console.log("Positive");
    }
    else if (numOne < 0 && numTwo >= 0 && numThree >= 0) {
        console.log("Negative");
    }
    else if (numOne < 0 && numTwo < 0 && numThree >= 0) {
        console.log("Positive");
    }
    else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        console.log("Negative");
    }
    else if (numOne >= 0 && numTwo < 0 && numThree >= 0) {
        console.log("Negative");
    }
    else if (numOne >= 0 && numTwo < 0 && numThree < 0) {
        console.log("Positive");
    }
    else if (numOne >= 0 && numTwo >= 0 && numThree < 0) {
        console.log("Negative");
    }
    

}

SignCheck(5, 12, -15);
SignCheck(-6, -12, 14);
SignCheck(-1, -2, -3);
SignCheck(-5, 1, 1);