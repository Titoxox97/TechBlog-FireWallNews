let form = document.querySelector(".new-post");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let title = document.querySelector("#post-title").value;
  let body = document.querySelector("#post-content").value;

  fetch("/api/posts", {
    method: "post",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
