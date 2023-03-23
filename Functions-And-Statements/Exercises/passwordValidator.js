function PasswordValidator(password) {

    let result = '';
    let passLength;
    let passConstr;
    let passDigits; 

    if (6 <= password.length && password.length <= 10) {
        
        passLength = true;
    
    } else {
        passLength = false;
    }

    let pattern = /^[a-zA-Z0-9]*$/;
    if (password.match(pattern)) {
        
        passConstr = true;

    } else {
        passConstr = false;
    }

    let digits = 0;
    let dPattern = /\d/;
    for (let i = 0; i < password.length; i++) {
        if (password[i].match(dPattern)) {
            digits += 1;
        }
            
    }

    if (digits >= 2) {

        passDigits = true;

    } else {
        passDigits = false;
    }

    if (passLength && passConstr && passDigits) {
        console.log('Password is valid');
    }
    
    if (!passLength) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!passConstr) {
        console.log('Password must consist only of letters and digits');
    }
    if (!passDigits) {
        console.log('Password must have at least 2 digits');
    }

}

PasswordValidator('logIn');
PasswordValidator('MyPass123');
PasswordValidator('Pa$s%s');