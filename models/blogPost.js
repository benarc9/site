var mysql = require('mysql');

var schema = mysql.createConnection().

class BlogPost{
    text = "Text Undefined!";
    title = "Title Undefined!";
    date = "Date Undefined!";
    postId = "Missing Post ID!";
    
    constructor (postId, text, title, date){
        this.postId = postId;
        this.text = text;
        this.title = title;
        this.date = date;
    }
}

module.exports = BlogPost;