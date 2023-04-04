function loadCommits() {

    const BASE_URL = "https://api.github.com/repos";
    const username = document.getElementById("username").value;
    const repository = document.getElementById('repo').value;
    const URL = BASE_URL + "/" + username + "/" + repository + "/commits";
    const ul = document.getElementById('commits');

    ul.innerHTML = "";

    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            
            for (obj of data) {

                const newLi = document.createElement('li');
                
                const name = obj.commit.author.name;
                const comment = obj.commit.message;
                const result = `${name}: ${comment}`;
                newLi.textContent = result;
                ul.appendChild(newLi);

            }

        })
        .catch((err) => {
            console.error(err);
            const errorLi = document.createElement('li');
            errorLi.textContent = `Error: ${err.message} (Not Found)`;
            ul.appendChild(errorLi);
        })


}