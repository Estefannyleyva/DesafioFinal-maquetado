import {Post} from './classes/create.js';
import {savePost} from './firebase/firebase.js';

const buttonSavePost = document.querySelector('#savePost');
buttonSavePost.addEventListener('click', (event) => {
    event.preventDefault();
    const userName = document.querySelector('#user-name').value;
    const userImg = document.querySelector('#user-url').value;
    const title = document.querySelector('#title').value;
    const tags = document.querySelector('#tags').value;
    const reading = document.querySelector('#reading').value;
    const headerImg = document.querySelector('#header-img').value;
    const description = document.querySelector('#description').value;
    const postImg = document.querySelector('#post-img').value;
    console.log(userName,userImg,title,tags,reading,headerImg,description,postImg)
    const post = new Post(userName, userImg, title, tags, reading, headerImg, description, postImg);
    savePost(post);
    modal.style.display = 'none';
    
});