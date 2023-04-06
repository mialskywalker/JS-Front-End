function attachEvents() {
    
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/';
    const loadBtn = document.getElementById('btnLoadPosts');
    const posts = document.getElementById('posts');
    const viewBtn = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postParagraph = document.getElementById('post-body');
    const postUl = document.getElementById('post-comments');
    
    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', postView);

    function loadPosts() {
        posts.innerHTML = '';
        fetch(`${BASE_URL}posts`)
            .then((res) => res.json())
            .then((data) => {
                for (const post in data) {
                    const title = data[post].title;
                    const id = post;

                    const option = document.createElement('option');
                    option.textContent = title;
                    option.value = id;
                    posts.appendChild(option);
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function postView() {
        postUl.innerHTML = '';
        postTitle.textContent = '';
        postParagraph.textContent = '';
        const postIndex = posts.selectedIndex;
        const currentPost = posts.item(postIndex);
        fetch(`${BASE_URL}comments`)
            .then((res) => res.json())
            .then((data) => {                             

                postTitle.textContent = currentPost.textContent;

                for (const el in data) {
                    const id = data[el].postId;
                    if (id === currentPost.value) {
                        const comment = data[el].text;
                        const li = document.createElement('li');
                        li.textContent = comment;
                        postUl.appendChild(li);
                    }
                    
                }
                
            })
            .catch((err) => {
                console.error(err);
            })

            fetch(`${BASE_URL}posts`)
                    .then((re) => re.json())
                    .then((obj) => {
                        for (const o in obj) {
                            if (o === currentPost.value) {
                                postParagraph.textContent = obj[o].body;
                            }
                        }
                    })
                    .catch((er) => {
                        console.error(er);
                    })

    }


}

attachEvents();