import { getPostView} from './firebase/firebase.js';

const querystring = window.location.search;
    console.log(querystring)
    const params = new URLSearchParams(querystring)
    let id = params.get('id');
    console.log(id)
let post = await getPostView(id);
 
const generateViewPost = (post) =>{
    console.log(post)
    const likesPostView = document.querySelector('#likes-postView')
    likesPostView.innerText = post.likes
    const tagSplited = post.tags.split(' ');
    const viewPost = document.querySelector('#getPost-view');
    viewPost.innerHTML =`
      <img class="img img__initial"
      src="${post.headerImg}"
      alt="">
      <section class="px-md-5">
        <div class="d-flex mt-3">
          <img src="${post.userImg}" alt="" class="user-img-postView">
          <div class="ms-2">
            <p>
              <a class="user__name--post" href="">${post.username}</a>
              <br>
              <small class="text-muted">${post.date}</small>
            </p>
          </div>  
        </div>
        <h1>${post.title}</h1>
        <a class="hashtag-hover--gray ms-2" href=""><span class="hashtag--gray">#</span>${tagSplited[0]}</a>
        <a class="hashtag-hover--green ms-2" href=""><span class="hashtag--green">#</span>${tagSplited[1]}</a>
        <a class="hashtag-hover--yellow ms-2" href=""> <span class="hashtag--yellow">#</span>${tagSplited[2]}</a>
        <p>
          ${post.description}
        </p>
        <img class="img img__initial"
        src="${post.postImg}"
        alt="">
    </section>`
  };
  generateViewPost(post)