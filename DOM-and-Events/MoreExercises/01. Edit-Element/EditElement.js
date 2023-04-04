function editElement(element, text, replace) {
    
    const newText = element.textContent.replace(text, replace);
    element.textContent = newText;
}