function oddOccurrences(text){

    elements = text.split(' ');
    let words = new Set();

    for (const el of elements){
        let filteredInput = elements.filter((w) => w.toLowerCase() === el.toLowerCase());
        if (filteredInput.length % 2 == 1) {
            words.add(el.toLowerCase());
        }
    }
    console.log(...words);

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food' );