function colorize() {
    
    const evenTrs = Array.from(document.querySelectorAll('tr:nth-child(even)'));
    
    for (tr of evenTrs) {
        tr.style.backgroundColor = 'Teal';
    }

}