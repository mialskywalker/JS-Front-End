function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    const personName = document.getElementById('person');
    const phoneNumber = document.getElementById('phone');
    const phonebookUl = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadPhones);
    createBtn.addEventListener('click', createPhone);


    // function loadPhones() {
    //     phonebookUl.innerHTML = '';
    //     fetch(BASE_URL)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             for (const id in data) {
    //                 const deleteBtn = document.createElement('button');
    //                 deleteBtn.textContent = 'Delete';
    //                 deleteBtn.id = id;
    //                 deleteBtn.addEventListener('click', deletePhone);
    //                 const newLi = document.createElement('li');
    //                 newLi.innerHTML = `${data[id].person}: ${data[id].phone}`;
    //                 newLi.appendChild(deleteBtn);
    //                 phonebookUl.appendChild(newLi);
    //             }
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         })
    // }

    async function loadPhones() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            let phonebookData = await phoneBookRes.json();
            phonebookData = Object.values(phonebookData);
            phonebookUl.innerHTML = '';
            for (const { phone, person, _id } of phonebookData) {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.textContent = 'Delete';
                button.id = _id;
                button.addEventListener('click', deletePhone);
                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(button);
                phonebookUl.appendChild(li);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function deletePhone(e) {
        const id = e.currentTarget.id;
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(loadPhones)
            .catch((err) => {
                console.error(err);
            })
    }

    function createPhone() {
        const person = personName.value;
        const phone = phoneNumber.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }

        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadPhones();
                personName.value = '';
                phoneNumber.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

attachEvents();