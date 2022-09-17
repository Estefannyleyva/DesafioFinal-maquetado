// export class Post {
//     constructor(title, description, comments, likes) {
//         this.title = title;
//         this.description = description;
//         this.comments = comments;
//         this.likes = likes;
//     }

//     comentar(comment) {
//         this.comments.push(comment)
//     }

//     addLike() {
//         this.likes++;
//     }
// }}
// creacion de objeto post para la base de datos
export class Post {
    constructor(userName, userImg, date, title,tags,likes,reading,headerImg, description, postImg){
        this.userName = userName;
        this.userImg = userImg;
        this.date = date;
        this.title = title;
        this.tags = tags;
        this.likes = likes;
        this.reading = reading;
        this.headerImg = headerImg;
        this.description = description;
        this.postImg = postImg;
    }
    addLike() {
        this.likes++;
    }
};
// si alguien le da click en like aumenta el valor

