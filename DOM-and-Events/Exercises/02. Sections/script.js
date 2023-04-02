function create(words) {
   
   const content = document.getElementById('content');

   for (word of words) {
      const div = document.createElement('div');

      const paragraph = document.createElement('p');
      paragraph.style.display = 'none';
      paragraph.textContent = word;
      
      div.appendChild(paragraph);
      div.addEventListener('click', () => {
         paragraph.style.display ='block';
      })
      content.appendChild(div);

   }

}