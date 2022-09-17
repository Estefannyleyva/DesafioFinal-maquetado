import {Post} from './classes/create.js';
import {getPosts, savePost} from './firebase/firebase.js';

const buttonSavePost = document.querySelector('#savePost');
buttonSavePost.addEventListener('click', (event) => {
    event.preventDefault();
    const userName = document.querySelector('#user-name').value;
    const userImg = document.querySelector('#user-url').value;
    const date = new Date().toDateString();
    console.log(date)
    const title = document.querySelector('#title').value;
    const tags = document.querySelector('#tags').value;
    const likes = Math.random() * (50 - 0) + 0;
    const reading = document.querySelector('#reading').value;
    const headerImg = document.querySelector('#header-img').value;
    const description = document.querySelector('#description').value;
    const postImg = document.querySelector('#post-img').value;
    
    const post = new Post(userName, userImg, date, title, tags, likes, reading, headerImg, description, postImg);
    console.log(post)
    savePost(post);

});


getPosts((ppllPosts) => {
    taskList.innerHTML = '';
    tasks.forEach(doc => {
        const task = doc.data();
        generateTask(task, doc);
    });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', ({target: {id}}) => { // destructuracion de datos

            //const id = event.getAttribute('id') no sabemos si funciona, pruebenlo
            deleteTask(id);
        });
    })
});

const tagsppllView = ['#', '#', '#', '#'];
tagsppllView.forEach(function(tagsPpll, index) {
    console.log(`${index} : ${tagsPpll}`);
});