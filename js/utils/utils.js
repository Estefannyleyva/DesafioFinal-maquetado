export const generatePosts = (post, doc) => {
  const tagSplited = post.tags.split(' ');
  let marked = post.marked;
  let textMarked = "+";
  if (marked == true) {
    textMarked = "-";
  }
  const displayPosts = document.querySelector('#showPosts');
    displayPosts.innerHTML += `
    <div class="card">
      <div class="header-img-visibility">
        <img src="${post.headerImg}" class="card-img-top" alt="Header Image"/>
      </div>
  
      <div class="card-body">      
        <section class="container_img-text">
          <img class="card main__section--img" src="${post.userImg}" alt="">
          <p class="card text__name pt-2">${post.username}<br> <span class="text-muted">${post.date}</span></p>
        </section>
        <div class="ms-md-3 mt-2 mb-1">
          <a href="./article.html?id=${doc.id}" class="card-text">${post.title}</a>
        </div>
          <a class="hashtag-hover--gray ms-0 ms-md-2" href=""><span class="hashtag--gray">#</span>${tagSplited[0]}</a>
          <a class="hashtag-hover--green ms-1" href=""><span class="hashtag--green">#</span>${tagSplited[1]}</a>
          <a class="hashtag-hover--blue" href="#"><span class="hashtags--blue">#</span>${tagSplited[2]}</a>
          
          <section class="d-flex justify-content-between">
           <div>
            <button class="btn p-0 p-md-1" type="button"><img src="./assets/home/assets-mainsection/heart.svg" alt="Show reactions">${post.likes}<span class="reactions"> reactions</span></button>
            <button class="btn p-0 p-md-1" type="button"><img src="./assets/home/assets-mainsection/comments.svg" alt="Show comments">${post.comments}<span class="reactions"> comments</span></button>
          </div>
          <div>
            <span class="text-muted">${post.reading} read</span>
            <button type="button" data-bs-id="${doc.id}" class="btn btn-secondary markPost p-0">${textMarked}</button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalEdit${doc.id}" id="editModal" class="edit-button"><img src="./assets/home/assets-mainsection/editButton.svg" alt="boton de editar" /></button>
            <div class="modal fade" id="exampleModalEdit${doc.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New Post</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <input class="form-control" value="${doc.id}" id="id-${doc.id}" type="hidden">
                      <input class="form-control" value="${post.username}" id="username-${doc.id}" type="hidden">
                      <input class="form-control" value="${post.userImg}" id="user-img-${doc.id}" type="hidden">
                      <input class="form-control" value="${post.date}" id="date-${doc.id}" type="hidden">
                      <input class="form-control" value="${post.likes}" id="likes-${doc.id}" type="hidden">
                      <input class="form-control" value="${post.marked}" id="marked-${doc.id}" type="hidden">
                      <input class="form-control" value="${post.comments}" id="comments-${doc.id}" type="hidden">
                      <div class="mb-3">
                        <label for="title" class="col-form-label">Title</label>
                        <input class="form-control" value="${post.title}" id="title-${doc.id}" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="tags" class="col-form-label">Tags</label>
                        <input class="form-control" value="${post.tags}" id="tags-${doc.id}" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="reading" class="col-form-label">Reading Time</label>
                        <input class="form-control" value="${post.reading}" id="reading-${doc.id}" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="header-img" class="col-form-label">Header Img URL</label>
                        <input class="form-control" value="${post.headerImg}" id="header-img-${doc.id}" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="description" class="col-form-label">Post Description</label>
                        <input class="form-control" value="${post.description}" id="description-${doc.id}" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="post-img" class="col-form-label">Post Img URL</label>
                        <input class="form-control" value="${post.postImg}" id="post-img-${doc.id}" type="text">
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-bs-id="${doc.id}" id="updatePost">Update Post</button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" id="deletePost" data-bs-id="${doc.id}" class="btn btn-secondary delete-post-btn p-0 p-md-1"><img src="./assets/home/assets-mainsection/deleteButton.svg" alt="" /></button>
          </div>
        </section>
      </div>
    </div>
    `;
};
