function loadRepos() {
   const BASE_URL = "https://api.github.com/users/testnakov/repos";
   const divText = document.getElementById('res');

   fetch(BASE_URL)
      .then((res) => res.text())
      .then((data) => {
         divText.textContent = data;
      })
      .catch((err) => {
         console.error(err);
      })

}