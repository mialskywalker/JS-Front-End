function storeProvision(firstArray, secondArray) {

    stock = {};

    for (let i = 0; i < firstArray.length; i++) {
        
        if (i % 2 === 0) {
            stock[firstArray[i]] = Number(firstArray[i+1]);
        }
        
    }

    for (let i = 0; i < secondArray.length; i++) {
        
        if (i % 2 === 0) {
            let name = secondArray[i];
            if (Object.keys(stock).includes(secondArray[i])) {
                stock[name] += Number(secondArray[i+1]);
            }
            else {
                stock[name] = Number(secondArray[i+1]);
            }
        }
       
    }
    
    for (const key in stock) {
        
        console.log(`${key} -> ${stock[key]}`);

    }

}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' 
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' 
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);