function deleteByEmail() {
    const mails = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const inputText = document.querySelector('input[name="email"]');
    let text = inputText.value;
    let removed = false;
    const result = document.getElementById('result');
    
    for (mail of mails) {
        let email = mail.textContent;
        if (email === text) {
            mail.parentElement.remove();
            removed = true;
        }
    }
    if (removed) {
        result.textContent = 'Deleted.';
    }
    else {
        result.textContent = 'Not found.';
    }
}