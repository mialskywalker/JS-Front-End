function SmallestOfThreeNumbers(first, second, third) {

    if (first <= second && first <= third) {
        console.log(first);
    }
    else if (second <= first && second <= third) {
        console.log(second);
    }
    else if (third <= first && third <= second) {
        console.log(third);
    }

}

SmallestOfThreeNumbers(2, 5, 3);
SmallestOfThreeNumbers(600, 342, 123);
SmallestOfThreeNumbers(25, 21, 4);
SmallestOfThreeNumbers(2, 2, 2);