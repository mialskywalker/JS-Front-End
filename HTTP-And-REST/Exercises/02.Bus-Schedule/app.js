function solve() {

    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const text = document.querySelector('#info > .info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stopId = 'depot';
    let stopName = '';

    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        fetch(`${BASE_URL}${stopId}`)
            .then((res) => res.json())
            .then((data) => {
                text.textContent = `Next stop ${data.name}`;
                stopId = data.next;
                stopName = data.name;
            })
            .catch(() => {
                text.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })


    }

    async function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        text.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();