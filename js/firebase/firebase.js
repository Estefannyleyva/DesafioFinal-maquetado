import { getFirestore, addDoc, deleteDoc, updateDoc, getDoc, collection, onSnapshot, doc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyACuaskt6H9j6bjsLKurzIMihNWzHtf8cM",
    authDomain: "devtoproject-cd612.firebaseapp.com",
    projectId: "devtoproject-cd612",
    storageBucket: "devtoproject-cd612.appspot.com",
    messagingSenderId: "701387350012",
    appId: "1:701387350012:web:7b26b6d8b8b4b9688c9c79",
    measurementId: "G-GHWESJG1NH"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connection with Firestore
const db = getFirestore();


/**
 * Create post
 * @param {object} post 
 */

export const savePost = (post) => {
    const objectToSave = {
      userName: post.userName,
      userImg: post.userImg, //hacer metodo para la fecha
      date: new Date().toISOString(),
      title: post.title,
      tags: post.tags,// separa por # o por espacio
      likes: post.likes,
      reading: post.reading,
      headerImg: post.headerImg,
      likes: Math.random() * (50 - 0) + 0,
      description: post.description,
      postImg: post.postImg
    };
    const canasta = collection(db, 'posts');
    addDoc(canasta, objectToSave);
};


/**
 * Update post by id
 * @param {number} id 
 * @param {object} post 
 */
 export const updatePost = (id, post) => {
  const uniqueId = id.split('edit')[1]; // Dividir y obtener ID 
  const objectToUpdate = {
    userName: post.userName,
    userImg: post.userImg, // Hacer metodo para la fecha
    title: post.title,
    tags: post.tags,// Separa por # o por espacio
    reading: post.reading,
    headerImg: post.headerImg,
    description: post.description,
    postImg: post.postImg
  };
  const post = doc(db, 'posts', uniqueId);
  updateDoc(post, objectToUpdate);
};







/**
 * Get all Posts
 * @param {callback} callback 
 */
 export const getPosts = (callback) => {
  const posts = collection(db, 'posts');
  onSnapshot(posts, callback);
};
// Traer todos los posts de la db 


export const getPost = (callback) => {
  //const tasksCollection = collection(db, 'tasks').orderBy("title", "asc");
  const tasksCollection = collection(db, 'posts');
  // [{}, {}, {}, {}]
  onSnapshot(tasksCollection, callback);
};

