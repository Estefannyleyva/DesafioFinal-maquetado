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


export const getPosts = (callback) => { //Annie
  //const tasksCollection = collection(db, 'tasks').orderBy("title", "asc");
  const ppllPosts = collection(db, 'posts');
  // [{}, {}, {}, {}]
  onSnapshot(ppllPosts, callback);
};

export const getPost = (callback) => {
  //const tasksCollection = collection(db, 'tasks').orderBy("title", "asc");
  const tasksCollection = collection(db, 'posts');
  // [{}, {}, {}, {}]
  onSnapshot(tasksCollection, callback);
};

