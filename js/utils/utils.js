
export const generatePosts = (post, doc) => {
  const tagSplited = post.tags.split(' ');
  const displayPosts = document.querySelector('#showPosts');
    displayPosts.innerHTML += `
    <div class="card"><a href="#" class="main-card"></a>
      <img src="${post.headerImg}" class="card-img-top" alt="Header Image"/>
      <div class="card-body">      
        <section class="container_img-text">
          <img class="card main__section--img" src="${post.userImg}" alt="">
          <a href="#" class="card text__name">${post.username}<br> <span class="text-muted">${post.date}</span></a>
        </section>
        <div class="ms-md-5">
          <a href="./article.html" class="card-text anchorId-firestore" id="${doc.id}">${post.title}</a>
        </div>
        <a href="#" class="ms-md-5 hashtag-hover--blue"><span class="hashtags--blue">#</span>${tagSplited[0]}</a>
        <a href="#" class="hashtag-hover--orange"><span class="hashtags--orange">#</span>${tagSplited[1]}</a>
        <a href="#" class="hashtag-hover--green"><span class="hashtags--green">#</span>${tagSplited[2]}</a>
        <section class="d-flex justify-content-between ms-md-5">
          <div>
            <button class="btn" type="button"><img src="./assets/home/assets-mainsection/heart.svg" alt="Show reactions">${post.likes}<span class="reactions"> reactions</span></button>
            <button class="btn" type="button"><img src="./assets/home/assets-mainsection/comments.svg" alt="Show comments">${post.comments}<span class="reactions"> comments</span></button>
          </div>
          <div>
            <span class="text-muted">${post.reading} min read</span>
            <button type="button" class="btn btn-secondary">Save</button>
            <button type="button" id="edit${doc.id}" class="btn btn-secondary">Edit</button>
            <button type="button" id="delete${doc.id}" class="btn btn-secondary">Delete</button>
          </div>
        </section>
      </div>
    </div>
    `;
};


export const generateViewPost = (post) =>{
  const likesPostView = document.querySelector('#likes-postView')
  likesPostView.innerText = post.likes
  const tagSplited = post.tags.split(' ');
  const viewPost = document.querySelector('#getPost-view');
  viewPost.innerHTML +=`
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