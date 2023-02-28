function solve(word, text) {

    text = text.split(' ');
    let check;
    
    for (let i = 0; i < text.length; i++) {
        
        word = word.toLowerCase();
        text[i] = text[i].toLowerCase();

        if (word === text[i]) {
            check = true;
            break;
        }
        else {
            check = false;
        }

    }

    if (check) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }

}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');