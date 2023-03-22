function CharactersInRange(first, second) {

    let n1 = first.charCodeAt(0);
    let n2 = second.charCodeAt(0);

    let start;
    let end;
    let arr = [];

    if (n1 < n2) {
        start = n1;
        end = n2;
    } else {
        start = n2;
        end = n1;
    }

    for (let i = start+1; i < end; i++) {
        arr.push(String.fromCharCode(i));
    }

    console.log(arr.join(' '));

}

CharactersInRange('a', 'd');
CharactersInRange('#', ':');
CharactersInRange('C', '#');