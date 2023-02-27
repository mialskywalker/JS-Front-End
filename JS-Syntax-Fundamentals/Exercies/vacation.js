function solve(groupOfPeople, typeOfGroup, dayOfWeek) {

    let result = 0;
    let discount = 0;
    let price = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (typeOfGroup === "Students") {
                price = 8.45;
                result = groupOfPeople * price;
                if (groupOfPeople >= 30) {
                    discount = result * 0.15;
                }
                result -= discount; 
            }
            else if (typeOfGroup === "Business") {
                price = 10.90;
                result = groupOfPeople * price;
                if (groupOfPeople >= 100) {
                    discount = price * 10;
                }
                result -= discount;
            }
            else if (typeOfGroup === "Regular") {
                price = 15;
                result = groupOfPeople * price;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    discount = result * 0.05;
                }
                result -= discount;
            }
            break;
        
        case "Saturday":
            if (typeOfGroup === "Students") {
                price = 9.80;
                result = groupOfPeople * price;
                if (groupOfPeople >= 30) {
                    discount = result * 0.15;
                }
                result -= discount; 
            }
            else if (typeOfGroup === "Business") {
                price = 15.60;
                result = groupOfPeople * price;
                if (groupOfPeople >= 100) {
                    discount = price * 10;
                }
                result -= discount;
            }
            else if (typeOfGroup === "Regular") {
                price = 20;
                result = groupOfPeople * price;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    discount = result * 0.05;
                }
                result -= discount;
            }
            break;
        
        case "Sunday":
            if (typeOfGroup === "Students") {
                price = 10.46;
                result = groupOfPeople * price;
                if (groupOfPeople >= 30) {
                    discount = result * 0.15;
                }
                result -= discount; 
            }
            else if (typeOfGroup === "Business") {
                price = 16;
                result = groupOfPeople * price;
                if (groupOfPeople >= 100) {
                    discount = price * 10;
                }
                result -= discount;
            }
            else if (typeOfGroup === "Regular") {
                price = 22.50;
                result = groupOfPeople * price;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    discount = result * 0.05;
                }
                result -= discount;
            }
            break;
    }

    console.log(`Total price: ${result.toFixed(2)}`)

}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");