function Orders(product, quantity) {

    let result = 0;

    if (product === 'coffee') {
        result = 1.50 * quantity;
    }
    else if (product === 'water') {
        result = 1.00 * quantity;
    }
    else if (product === 'coke') {
        result = 1.40 * quantity;
    }
    else if (product === 'snacks') {
        result = 2.00 * quantity;
    }
    console.log(result.toFixed(2));

}

Orders('water', 5);
Orders('coffee', 2);