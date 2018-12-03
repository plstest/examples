const renderPosts = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    const posts = document.querySelector(".posts");

    for (let post of json) {
      const { title, body } = post;
      const el = document.createElement("li");

      posts.appendChild(el).innerHTML =
        `
          <h2>${title}</h2>
          <p>${body}</p>
        `
    }
  });

