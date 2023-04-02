function addItem() {
    const menu = document.getElementById('menu');
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const option = document.createElement('option');

    option.textContent = textInput.value;
    option.value = valueInput.value;
    menu.appendChild(option);

    textInput.value = '';
    valueInput.value = '';

}