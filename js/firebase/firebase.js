import {
  getFirestore,
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  onSnapshot,
  doc, 
  getDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyACuaskt6H9j6bjsLKurzIMihNWzHtf8cM",
  authDomain: "devtoproject-cd612.firebaseapp.com",
  projectId: "devtoproject-cd612",
  storageBucket: "devtoproject-cd612.appspot.com",
  messagingSenderId: "701387350012",
  appId: "1:701387350012:web:7b26b6d8b8b4b9688c9c79",
  // measurementId: "G-GHWESJG1NH"
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
      username: post.username,
      userImg: post.userImg, 
      date: post.date,
      title: post.title,
      tags: post.tags,
      likes: post.likes,
      reading: post.reading,
      headerImg: post.headerImg,
      likes: post.likes,
      comments: post.comments,
      description: post.description,
      postImg: post.postImg,
      marked: post.marked
    };
    const container = collection(db, 'posts');
    addDoc(container, objectToSave);
};

/**
 * Update post by id
 * @param {number} id
 * @param {object} post
 */
export const updatePost = (id, post) => {
  const objectToUpdate = {
    username: post.username,
    userImg: post.userImg,
    date: post.date,
    title: post.title,
    tags: post.tags,
    likes: post.likes,
    reading: post.reading,
    headerImg: post.headerImg,
    likes: post.likes,
    comments: post.comments,
    description: post.description,
    postImg: post.postImg,
    marked: post.marked
  };

  const postToUpdate = doc(db, 'posts', id);
  updateDoc(postToUpdate, objectToUpdate);
};

/**
 * Delete post by id
 * @param {number} id
 */
export const deletePost = (id) => {
  const postToDelete = doc(db, 'posts', id);
  deleteDoc(postToDelete);
};

/**
 * Get all Posts
 * @param {callback} callback
 */
export const getPosts = (callback) => {
  const posts = collection(db, 'posts');
  onSnapshot(posts, callback);
};

/**
 * Get Post by id
 * @param {number} id
 */


export const getPostView = async (id) => {
  const postDataInfo = doc(db, "posts", id);
  const getPostView = await getDoc(postDataInfo)
  return getPostView.data();
};

