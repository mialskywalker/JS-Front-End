function wordsUppercase(input) {

    let uppercase = [];
    let words = input.match(/\w+/g);
    for (word of words) {
        uppercase.push(word.toUpperCase());
    }
    console.log(uppercase.join(', '));

}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');