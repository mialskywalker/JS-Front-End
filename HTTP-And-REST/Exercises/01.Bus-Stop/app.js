function getInfo() {
    
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const textInput = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const ulContainer = document.getElementById('buses');

    const text = textInput.value;
    ulContainer.innerHTML = '';
    textInput.value = '';

    fetch(`${BASE_URL}${text}`)
        .then((res) => res.json())
        .then((data) => {
            const stop = data.name;
            const buses = data.buses;
            stopName.textContent = stop;
            for (bus in buses){
                li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                ulContainer.appendChild(li);
            }
        })
        .catch((err) => {
            console.error(err);
            stopName.textContent = "Error";
            ulContainer.innerHTML = '';
        })
    


}