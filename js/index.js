// Conexión con Firebase
import { Post } from "./classes/create.js";
import {
  getPosts,
  savePost,
  updatePost,
  deletePost,
} from "./firebase/firebase.js";
import { generatePosts } from "./utils/utils.js";

// Obtener datos de interfaz
const displayPosts = document.querySelector("#showPosts");

const buttonSavePost = document.querySelector("#savePost");
buttonSavePost.addEventListener("click", (event) => {
  event.preventDefault();
  const username = document.querySelector("#user-name").value;
  const userImg = document.querySelector("#user-url").value;
  const date = new Date().toDateString();
  const marked = true;
  const title = document.querySelector("#title").value;
  const tags = document.querySelector("#tags").value;
  const likes = Math.round(Math.random() * (50 - 0) + 0);
  const comments = Math.round(Math.random() * (50 - 0) + 0);
  const reading = document.querySelector("#reading").value;
  const headerImg = document.querySelector("#header-img").value;
  const description = document.querySelector("#description").value;
  const postImg = document.querySelector("#post-img").value;

  const post = new Post(
    username,
    userImg,
    date,
    title,
    tags,
    likes,
    comments,
    reading,
    headerImg,
    description,
    postImg,
    marked
  );
  savePost(post);
});

getPosts((posts) => {
  displayPosts.innerHTML = "";
  posts.forEach((doc) => {
    const post = doc.data();
    generatePosts(post, doc);
  });

  const buttonUpdatePosts = document.querySelectorAll("#updatePost");
  buttonUpdatePosts.forEach((buttonUpdatePost) => {
    buttonUpdatePost.addEventListener("click", (event) => {
      const postId = event.target.getAttribute("data-bs-id");
      event.preventDefault();
      const username = document.querySelector("#username-" + postId).value;
      const userImg = document.querySelector("#user-img-" + postId).value;
      const date = document.querySelector("#date-" + postId).value;
      let marked = document.querySelector("#marked-" + postId).value;
      if (marked == "true") {
        marked = true;
      } else {
        marked = false;
      }
      const likes = document.querySelector("#likes-" + postId).value;
      const comments = document.querySelector("#comments-" + postId).value;
      const title = document.querySelector("#title-" + postId).value;
      const tags = document.querySelector("#tags-" + postId).value;
      const reading = document.querySelector("#reading-" + postId).value;
      const headerImg = document.querySelector("#header-img-" + postId).value;
      const description = document.querySelector(
        "#description-" + postId
      ).value;
      const postImg = document.querySelector("#post-img-" + postId).value;

      const post = new Post(
        username,
        userImg,
        date,
        title,
        tags,
        likes,
        comments,
        reading,
        headerImg,
        description,
        postImg,
        marked
      );
      updatePost(postId, post);
      const updateModal = document.querySelector("#exampleModalEdit" + postId);
      const modal = bootstrap.Modal.getInstance(updateModal);
      modal.hide();
    });
  });

  const buttonMarkPosts = document.querySelectorAll(".markPost");
  buttonMarkPosts.forEach((buttonMarkPost) => {
    buttonMarkPost.addEventListener("click", (event) => {
      const postId = event.target.getAttribute("data-bs-id");
      event.preventDefault();
      const username = document.querySelector("#username-" + postId).value;
      const userImg = document.querySelector("#user-img-" + postId).value;
      const date = document.querySelector("#date-" + postId).value;
      const likes = document.querySelector("#likes-" + postId).value;
      const comments = document.querySelector("#comments-" + postId).value;
      const title = document.querySelector("#title-" + postId).value;
      const tags = document.querySelector("#tags-" + postId).value;
      const reading = document.querySelector("#reading-" + postId).value;
      const headerImg = document.querySelector("#header-img-" + postId).value;
      const description = document.querySelector(
        "#description-" + postId
      ).value;
      const postImg = document.querySelector("#post-img-" + postId).value;
      let marked = document.querySelector("#marked-" + postId).value;
      if (marked == "true") {
        marked = false;
      } else {
        marked = true;
      }

      const post = new Post(
        username,
        userImg,
        date,
        title,
        tags,
        likes,
        comments,
        reading,
        headerImg,
        description,
        postImg,
        marked
      );
      updatePost(postId, post);
    });
  });

  const buttonDeletePosts = document.querySelectorAll("#deletePost");
  buttonDeletePosts.forEach((buttonDeletePost) => {
    buttonDeletePost.addEventListener("click", (event) => {
      const postId = event.target.getAttribute("data-bs-id");
      deletePost(postId);
    });
  });
});
