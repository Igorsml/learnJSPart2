const root = document.querySelector("#root");

async function getUserComments() {
  const comments = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=12"
  )
    .then((response) => response.json())
    .then((data) => {
      for (const comment of data) {
        root.insertAdjacentHTML(
          "beforeend",
          `
          <div class="comment">
            <div class="comment-body">
              <h2><i class='bx bx-edit-alt' ></i> ${comment.name}</h2>
              <p class="comment-body__email"><i class='bx bx-envelope'></i> ${comment.email}</p>
              <p class="comment-body__description"><i class='bx bx-water' ></i> ${comment.body}</p>
            </div>
          </div>
          `
        );
      }
    })
    .catch((err) => console.log(err.message));
}

getUserComments();
