function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const msgArea = document.getElementById('messages');
    const nameInput = document.querySelector("#controls > div > input[name='author']");
    const msgInput = document.querySelector("#controls > div > input[name='content']");
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', createMessage);
    refreshBtn.addEventListener('click', getMessages);

    function createMessage() {
        const author = nameInput.value;
        const content = msgInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ author, content })
        }

        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .catch((err) => {
                console.error(err);
            })
        nameInput.value = '';
        msgInput.value = '';
    }

    function getMessages() {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                for (const el in data) {
                    const name = data[el].author;
                    const message = data[el].content;
                    msgArea.textContent += `${name}: ${message}\n`;
                }
                msgArea.textContent = msgArea.textContent.trim();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    
}

attachEvents();