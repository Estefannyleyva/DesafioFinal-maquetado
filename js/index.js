// Conexión con Firebase
import { Post} from './classes/create.js';
import { getPosts, savePost, deletePost } from './firebase/firebase.js';
import { generatePosts } from './utils/utils.js';

// Obtener datos de interfaz
const displayPosts = document.querySelector('#showPosts');


const buttonSavePost = document.querySelector('#savePost');
buttonSavePost.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.querySelector('#user-name').value;
    const userImg = document.querySelector('#user-url').value;
    const date = new Date().toDateString();
    const title = document.querySelector('#title').value;
    const tags = document.querySelector('#tags').value;
    const likes = Math.round(Math.random() * (50 - 0) + 0);
    const comments = Math.round(Math.random() * (50 - 0) + 0);
    const reading = document.querySelector('#reading').value;
    const headerImg = document.querySelector('#header-img').value;
    const description = document.querySelector('#description').value;
    const postImg = document.querySelector('#post-img').value;
    
    const post = new Post(username, userImg, date, title, tags, likes, comments, reading, headerImg, description, postImg);
    console.log(post)
    savePost(post);
});



getPosts((posts) => {
    displayPosts.innerHTML = '';
    posts.forEach(doc => {
        const post = doc.data();
        generatePosts(post, doc);
    
    });
    
    const deleteButtons = document.querySelectorAll(".delete-post-btn") // [button1,button2,button3]
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', idButton => {
            const id = deleteButton.getAttribute("data-id")
            deletePost(id)
        })  
    })
})





