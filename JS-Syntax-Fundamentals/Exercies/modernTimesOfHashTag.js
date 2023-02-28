function solve(text) {

    text = text.split(' ');
    let arr = [];

    for (let index = 0; index < text.length; index++) {
        if (text[index][0] === '#' && text[index].length > 1 && /^[#+A-Za-z]*$/.test(text[index])) {
            arr.push(text[index].slice(1));
            text[index].slice(1)
        }
    }

    console.log(arr.join('\n'));

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
