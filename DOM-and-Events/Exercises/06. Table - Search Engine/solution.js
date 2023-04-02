function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      const textInput = document.getElementById('searchField');
      const tds = Array.from(document.querySelectorAll('tbody > tr > td'));
      const trs = Array.from(document.querySelectorAll('tbody > tr'));
      
      for (tr of trs) {
         tr.classList.remove('select');
      }

      for (td of tds) {
         if (td.textContent.includes(textInput.value)) {
            const newTr = td.parentElement;
            newTr.classList.add('select');
         }
      }
      textInput.value = '';

   }
}