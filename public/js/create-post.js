let form = document.querySelector(".new-post");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let title = document.querySelector("#post-title").value;
  let content = document.querySelector("#post-content").value;

  fetch("/api/posts", {
    method: "post",
    data: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "content-type": "application/JSON",
    },
  });
});
