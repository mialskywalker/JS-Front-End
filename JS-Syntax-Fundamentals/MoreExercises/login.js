function Login(input) {

    let username = input.shift();
    let i = 1;
    
    for (const element of input) {

        let password = element.split("").reverse().join('');
        if (username === password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else {
            if (i === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            else {
                console.log(`Incorrect password. Try again.`);
            }
        }
        i += 1;
    }
}

Login(['Acer','login','go','let me in','recA']);
Login(['momo','omom']);
Login(['sunny','rainy','cloudy','sunny','not sunny']);
