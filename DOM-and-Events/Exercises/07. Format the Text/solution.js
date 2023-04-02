function solve() {

  const output = document.getElementById('output');
  const inputText = document.getElementById('input').value;

  const text = inputText.split('.');
  text.pop();
  
  while (text.length > 0) {
    
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text.splice(0, 3).join('.') + '.';
    output.appendChild(newParagraph);

  }

}