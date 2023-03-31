function addItem() {
    const ulContainer = document.getElementById('items');
    
    const inputText = document.getElementById('newItemText');
    let li = document.createElement("li");
    let text = inputText.value;
    li.textContent = text;
    ulContainer.appendChild(li);
   
}