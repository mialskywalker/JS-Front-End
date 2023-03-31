function addItem() {
    const ulContainer = document.getElementById('items');
    const inputText = document.getElementById('newItemText');
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    li.textContent = inputText.value;
    anchor.textContent = '[Delete]';
    anchor.setAttribute('href', '#');
    anchor.addEventListener('click', deleteHandler);
    li.appendChild(anchor);
    ulContainer.appendChild(li);
    inputText.value = '';

    function deleteHandler(e) {
        const eAnchor = e.currentTarget
        eAnchor.parentElement.remove();
    }
}