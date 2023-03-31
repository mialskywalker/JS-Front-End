function extractText() {
    const liItems = Array.from(document.querySelectorAll('ul > li'));
    const textArea = document.getElementById('result');

    for (li of liItems) {
        textArea.textContent += li.textContent + '\n';
    }
}