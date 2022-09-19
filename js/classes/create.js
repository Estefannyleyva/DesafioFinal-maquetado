export class Post {
  constructor(
    username,
    userImg,
    date,
    title,
    tags,
    likes,
    comments,
    reading,
    headerImg,
    description,
    postImg,
    marked
  ) {
    this.username = username;
    this.userImg = userImg;
    this.date = date;
    this.title = title;
    this.tags = tags;
    this.likes = likes;
    this.comments = comments;
    this.reading = reading;
    this.headerImg = headerImg;
    this.description = description;
    this.postImg = postImg;
    this.marked = marked;
  }
  addLike() {
    this.likes++;
  }
}
// si alguien le da click en like aumenta el valor
