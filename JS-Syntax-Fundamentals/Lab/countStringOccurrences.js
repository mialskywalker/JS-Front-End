function solve(text, word) {

    let wordCount = 0;
    let words = text.split(' ');

    for (let wd of words) {
        if (wd === word) {
            wordCount += 1;
        }
    }

    console.log(wordCount);

}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');