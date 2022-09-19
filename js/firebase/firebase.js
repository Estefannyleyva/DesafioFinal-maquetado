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

export const savePost = (post) => {
    const objectToSave = {
      userName: post.userName,
      userImg: post.userImg, //hacer metodo para la fecha
      date: post.date,
      title: post.title,
      tags: post.tags,// separa por # o por espacio
      likes: post.likes,
      reading: post.reading,
      headerImg: post.headerImg,
      description: post.description,
      postImg: post.postImg
      
    };
    const canasta = collection(db, 'posts');
    addDoc(canasta, objectToSave);
};

export const deletePost = (id) => {
  const deletePost = doc(db, "posts", id)
    deleteDoc(deletePost);
}




/*export const deleteTask = (id) => {
    const array = id.split('deleteButton');
    const cleanId = array[1];
    deleteDoc(doc(db, 'tasks', cleanId));
};*/