function thePianist(input) {

    let n = input.shift();
    let pianoPieces = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift().split('|');
        let piece = line[0];
        let composer = line[1];
        let key = line[2];
        pianoPieces[piece] = { composer, key };
    }

    for (const line of input) {
        if (line === 'Stop') {
            break;
        }
        let splitLine = line.split('|');

        if (splitLine[0] === 'Add'){
            let piece = splitLine[1];
            let composer = splitLine[2];
            let key = splitLine[3];
            addPiece(piece, composer, key);
        }
        else if (splitLine[0] === 'Remove') {
            let piece = splitLine[1];
            removePiece(piece);
        }
        else if (splitLine[0] === 'ChangeKey') {
            let piece = splitLine[1];
            let key = splitLine[2];
            changePiece(piece, key);
        }
    }

    function addPiece(piece, composer, key) {
        if (pianoPieces.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
        } else {
            pianoPieces[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function removePiece(piece) {
        if (pianoPieces.hasOwnProperty(piece)) {
            delete pianoPieces[piece];
            console.log(`Successfully removed ${piece}!`);
        }
        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changePiece(piece, newKey) {
        if (pianoPieces.hasOwnProperty(piece)) {
            pianoPieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }
        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
    
    for (const key in pianoPieces) {
        console.log(`${key} -> Composer: ${pianoPieces[key].composer}, Key: ${pianoPieces[key].key}`);
    }
}


thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
]);

thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]);