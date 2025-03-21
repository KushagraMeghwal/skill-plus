import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  posts=[{
    profilePhoto:'https://www.w3schools.com/w3images/avatar2.png',
    username:'John Doe',
    timeAgo:'2 hours ago',
    imageUrl:'https://www.w3schools.com/w3images/nature.jpg',
  },
  {
    profilePhoto:'https://www.w3schools.com/w3images/avatar6.png',
    username:'Jane Doe',
    timeAgo:'3 hours ago',
    imageUrl:'https://www.w3schools.com/w3images/mountains.jpg',
  },
  {
    profilePhoto:'https://www.w3schools.com/w3images/avatar5.png',
    username:'John Doe',
    timeAgo:'4 hours ago',
    imageUrl:'https://www.w3schools.com/w3images/lights.jpg',
  },
  {
    profilePhoto:'https://www.w3schools.com/w3images/avatar4.png',
    username:'Jane Doe',
    timeAgo:'5 hours ago',
    imageUrl:'https://www.w3schools.com/w3images/nature.jpg',
  },
  {
    profilePhoto:'https://www.w3schools.com/w3images/avatar3.png',
    username:'John Doe',
    timeAgo:'6 hours ago',
    imageUrl:'https://www.w3schools.com/w3images/mountains.jpg',
  },
  {
    profilePhoto:'https://www.w3schools.com/w3images/avatar2.png',
    username:'Jane Doe',
    timeAgo:'7 hours ago',
    imageUrl:'https://www.w3schools.com/w3images/lights.jpg',
  }]
  getPosts(){
    return this.posts;
  }
}
