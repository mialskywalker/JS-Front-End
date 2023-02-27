function solve(words, text) {

    let wordsToSwap = words.split(', ');
    let textToSwap = text.split(' ');

    for (let index = 0; index < textToSwap.length; index++) {
        if (textToSwap[index][0] === '*') {

            let toFind = textToSwap[index].length;
            var i = 0;
            while (wordsToSwap.length > 0) {
                if (wordsToSwap.length === 1) {
                    textToSwap[index] = wordsToSwap[0];
                    wordsToSwap.splice(i, 1);
                    break;
                } 
                else if (wordsToSwap[i].length === toFind) {
                    textToSwap[index] = wordsToSwap[i];
                    wordsToSwap.splice(i, 1);
                    break;
                }
                i += 1
            }
        }
    }

    console.log(textToSwap.join(' '));

}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');