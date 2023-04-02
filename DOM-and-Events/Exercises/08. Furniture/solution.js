function solve() {

  const generatorButton = document.getElementsByTagName('button')[0];
  const generatorText = document.getElementsByTagName('textarea')[0];

  const buyButton = document.getElementsByTagName('button')[1];
  const buyArea = document.getElementsByTagName('textarea')[1];

  const table = document.querySelector('tbody');

  generatorButton.addEventListener('click', () => {
    const text = JSON.parse(generatorText.value);
    for (el of text) {
      const image = el.img;
      const name = el.name;
      const price = el.price;
      const factor = el.decFactor;

      const tdImg = document.createElement('td');
      const img = document.createElement('img');
      img.src = image;
      tdImg.appendChild(img);

      const tdName = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = name;
      tdName.appendChild(pName);

      const tdPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = price;
      tdPrice.appendChild(pPrice);

      const tdFactor = document.createElement('td');
      const pFactor = document.createElement('p');
      pFactor.textContent = factor;
      tdFactor.appendChild(pFactor);
      
      const tdCheck = document.createElement('td');
      const inputCheck = document.createElement('input');
      inputCheck.setAttribute('type', 'checkbox');
      tdCheck.appendChild(inputCheck);

      const tr = document.createElement('tr');
      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdFactor);
      tr.appendChild(tdCheck);

      table.appendChild(tr);
    }
  })

  buyButton.addEventListener('click', () => {
    const trs = Array.from(document.querySelectorAll('tbody > tr'));
    let names = [];
    let prices = 0;
    let factors = 0;
    let num = 0;

    for (tr of trs) {
      const checker = tr.children[4].children[0];
      const name = tr.children[1].children[0].textContent;
      const price = tr.children[2].children[0].textContent;
      const factor = tr.children[3].children[0].textContent;
      if (checker.checked){
        num += 1;
        names.push(name);
        prices += Number(price);
        factors += Number(factor);
      }

    }
    factors = factors / num;
    buyArea.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${prices.toFixed(2)}\nAverage decoration factor: ${factors}`;
  })
  
}