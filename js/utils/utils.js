
export const generatePosts = (post, doc) => {
  const tagSplited = post.tags.split(' ');
  const displayPosts = document.querySelector('#showPosts');
    displayPosts.innerHTML += `
    <div class="card">
      <img src="${post.headerImg}" class="card-img-top" alt="Header Image"/>
      <div class="card-body">      
        <section class="container_img-text">
          <img class="card main__section--img" src="${post.userImg}" alt="">
          <p class="card text__name">${post.username}<br> <span class="text-muted">${post.date}</span></p>
        </section>
        <div class="ms-md-5" >
          <a href="./article.html?id=${doc.id}" class="card-text anchor">${post.title}</a>
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
            <span class="text-muted">${post.reading} read</span>
            <button type="button" id="edit${doc.id}" class="btn btn-secondary">Edit</button>
            <button type="button" id="delete${doc.id}" class="btn btn-secondary">Delete</button>
          </div>
        </section>
      </div>
    </div>
    `;
    
};
