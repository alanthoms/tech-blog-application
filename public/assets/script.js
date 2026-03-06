let token = localStorage.getItem("authToken");
let username = localStorage.getItem("usernameLocal");

if (token) {
  document.getElementById("auth-container").classList.add("hidden");
  document.getElementById("app-container").classList.remove("hidden");
  const welcome = document.getElementById("welcomeh2");
  welcome.innerHTML = `Welcome, ${username}!`;
  // 3. Re-fetch the data
  fetchPosts();
}

function register() {
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("register-password").value;
  fetch("http://localhost:3001/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.errors) {
        alert(data.errors[0].message);
      } else {
        alert("User registered successfully");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function login() {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  fetch("http://localhost:3001/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      // Save the token in the local storage
      if (data.token) {
        localStorage.setItem("authToken", data.token);

        localStorage.setItem("usernameLocal", data.userData.username);
        username = data.userData.username;
        token = data.token;

        alert(`Welcome, ${data.userData.username}!`);

        const welcome = document.getElementById("welcomeh2");
        welcome.innerHTML = `Welcome, ${username}!`;
        // Fetch the posts list
        fetchPosts();

        // Hide the auth container and show the app container as we're now logged in
        document.getElementById("auth-container").classList.add("hidden");
        document.getElementById("app-container").classList.remove("hidden");
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function logout() {
  fetch("http://localhost:3001/api/users/logout", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  }).then(() => {
    // Clear the token from the local storage as we're now logged out
    localStorage.removeItem("authToken");
    localStorage.removeItem("usernameLocal");
    username = null;
    token = null;
    document.getElementById("auth-container").classList.remove("hidden");
    document.getElementById("app-container").classList.add("hidden");
  });
}

function deletePost(id) {
  if (!confirm("Are you sure?" + username)) return;
  fetch(`http://localhost:3001/api/posts/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      if (res.ok) {
        fetchPosts();
      } else {
        alert("Couldnot delete");
      }
    })
    .catch((err) => console.error("delete error", err));
}

function fetchPosts() {
  const filterCategory = document.getElementById("filter-category").value;
  let url = "http://localhost:3001/api/posts";
  if (filterCategory) {
    url += `?category=${filterCategory}`;
  }
  fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((posts) => {
      const postsContainer = document.getElementById("posts");
      postsContainer.innerHTML = "";
      posts.forEach((post) => {
        const div = document.createElement("div");
        div.className = "cardDiv";
        div.innerHTML = `<h3>${post.title}</h3><h3>${post.category.category_name}</h3><p>${
          post.content
        }</p><small>By: ${post.postedBy} on ${new Date(
          post.createdOn,
        ).toLocaleString()}</small>`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => {
          openEditModal(post);
        };
        deleteButton.onclick = () => {
          deletePost(post.id);
        };
        if (post.postedBy === username) {
          const buttonDiv = document.createElement("div");
          buttonDiv.className = "button-div";
          buttonDiv.append(editButton);
          buttonDiv.append(deleteButton);

          div.append(buttonDiv);
        }

        postsContainer.appendChild(div);
      });
    });
}

function createPost() {
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;
  const category = document.getElementById("post-category").value;
  if (!title || !content) {
    alert("Please fill title and content");
    return;
  }
  fetch("http://localhost:3001/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      content,
      postedBy: username,
      category_id: parseInt(category),
    }),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Post created successfully"); // Clear inputs
      document.getElementById("post-title").value = "";
      document.getElementById("post-content").value = "";
      fetchPosts();
    });
}

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function openEditModal(post) {
  currentEditingPostId = post.id;
  document.getElementById("edit-title").value = post.title;
  document.getElementById("edit-content").value = post.content;
  document.getElementById("edit-category").value = post.category_id;
  modal.style.display = "block";
}

function saveEditModal() {
  modalTitle = document.getElementById("edit-title").value;
  modalContent = document.getElementById("edit-content").value;
  modalCategory = document.getElementById("edit-category").value;
  if (!modalTitle || !modalContent) {
    alert("Please fill title and content");
    return;
  }
  fetch(`http://localhost:3001/api/posts/${currentEditingPostId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: modalTitle,
      content: modalContent,
      postedBy: username,
      category_id: parseInt(modalCategory),
    }),
  })
    .then((res) => res.json())
    .then(() => {
      modal.style.display = "none";
      alert("Edit Saved");
      fetchPosts();
    });
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
