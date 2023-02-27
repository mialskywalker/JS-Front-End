function solve(fruit, weight, pricePerKilo) {

    weight = weight / 1000;
    let totalPrice = weight * pricePerKilo;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);    

}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);