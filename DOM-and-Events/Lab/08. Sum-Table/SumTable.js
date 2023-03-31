function sumTable() {

    const tds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    
    let sum = 0;

    for (td of tds) {
        let total = Number(td.textContent);
        sum += total;
        if (td.id === 'sum') {
            td.textContent = sum;
        }
    }

}