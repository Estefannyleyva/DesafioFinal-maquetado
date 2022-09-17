export const generatePosts = (post, doc) => {
    const postView = document.querySelector('#list');
    taskList.innerHTML += `
    <div class="card"><a href="#" class="main-card"></a>
    <img src="${post.headerImg}" class="card-img-top" alt="..." />
    <div class="card-body">      
      <section class="container_img-text">
        <img class="card main__section--img" src="${post.userImg}" alt="">
        <a href="#" class="card text__name">${post.userName}<br> <span class="text-muted">${post.date}</span></a>
      </section>
      <div class="ms-md-5">
        <a href="./article.html" class="card-text">${post.title}</a>
      </div>
        <a href="#" class="ms-md-5 hashtag-hover--blue"><span class="hashtags--blue">#</span>news</a>
        <a href="#" class="hashtag-hover--orange"><span class="hashtags--orange">#</span>beginners</a>
        <a href="#" class="hashtag-hover--green"><span class="hashtags--green">#</span>tutorial</a>
        <a href="#" class="hashtag-hover--yellow"><span class="hashtags--yellow">#</span>python</a>
        <section class="d-flex justify-content-between ms-md-5">
          <div>
            <button class="btn" type="button"><img src="./assets/home/assets-mainsection/heart.svg" alt="">${post.likes} <span class="reactions">reactions</span></button>
            <button class="btn" type="button"><img src="./assets/home/assets-mainsection/comments.svg" alt="">2 <span class="reactions">comments</span></button>
          </div>
          <div>
            <span class="text-muted">${post.reading} min read</span>
            <button type="button" class="btn btn-secondary">Save</button>
          </div>
        </section>
    </div>
  </div>
    `;
};