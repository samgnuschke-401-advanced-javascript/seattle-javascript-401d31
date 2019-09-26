import uuid from 'uuid/v4';

export class User {
  constructor(name) {
    this.id = uuid();
    this.name = name;
    this.isOnline = false;
  }

  logIn() {
    this.isOnline = true;
  }

  logOff() {
    this.isOnline = false;
  }
}

export class Image {
  constructor(url, title = null) {
    this.id = uuid();
    this.title = title;
    this.url = url;
    this.createdAt = new Date();
    this.comments = [];
  }

  comment(commentId) {
    this.comments.push(commentId);
  }
}

export class Comment {
  constructor(content, imageId) {
    this.imageId = imageId;
    this.content = content;
  }
}