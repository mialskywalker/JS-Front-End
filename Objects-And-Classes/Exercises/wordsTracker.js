function wordsTracker(input) {

    let searchedWords = input.shift().split(' ');
    let words = [];
    
    for (const word of searchedWords) {
        let filteredInput = input.filter((w) => w === word);
        words.push({ name: word, count: filteredInput.length });
    }

    let sortedWords = words
                        .sort((a, b) => {
                            return b.count - a.count;
                        }).forEach(word => console.log(`${word.name} - ${word.count}`));
    

}


wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',    
    'to', 'count', 'the', 'occurrences', 'of',    
    'the', 'words', 'this', 'and', 'sentence',    
    'because', 'this', 'is', 'your', 'task' 
]);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',    
    'another', 'the', 'And', 'finally', 'the',    
    'the', 'sentence'
]);