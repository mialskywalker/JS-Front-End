function solve(text) {

    let arr = [];
    let words = [];
    let word = '';
    
    for (let i = 0; i < text.length; i++) {
        arr.push(text[i]);        
    }

    while (arr.length > 0) {

        if (arr[0] === arr[0].toUpperCase() && word.length === 0) {
            word = arr[0];

            if (arr.length === 1) {
                words.push(word);
            }

            arr.shift();
        }
        else if (arr[0] === arr[0].toUpperCase() && word.length > 0) {
            words.push(word);
            word = '';
        }
        else if (arr[0] === arr[0].toLowerCase()) {
            word += arr[0];

            if (arr.length === 1) {
                words.push(word);
            }

            arr.shift();
        }

    }

    console.log(words.join(', '));

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');