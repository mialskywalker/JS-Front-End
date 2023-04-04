function loadRepos() {
	const BASE_URL = "https://api.github.com/users/";
	const username = document.getElementById('username').value;
	const URL = BASE_URL + username + "/repos";
	const ul = document.getElementById('repos');

	ul.innerHTML = "";

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			for (obj of data) {
				const newLi = document.createElement('li');
				const newA = document.createElement('a');
				newA.textContent = obj.full_name;
				newA.href = obj.html_url;
				newLi.appendChild(newA);
				ul.appendChild(newLi);
			}
		})
		.catch((err) => {
			console.error(err);
			const errorLi = document.createElement('li');
			errorLi.textContent = err;
			ul.appendChild(errorLi);
		})
	

}