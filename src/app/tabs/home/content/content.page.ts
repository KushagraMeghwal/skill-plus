import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  imports:[IonicModule,CommonModule]
})
export class ContentPage implements OnInit {
 
  constructor(private post : PostsService) { }

  ngOnInit() {
  }
  posts=this.post.getPosts();

  loadMorePosts(event: any) {
    setTimeout(() => {
      // Simulate loading more posts
      this.posts.push({
        profilePhoto: 'https://www.w3schools.com/w3images/avatar3.png',
        username: 'alex_dev',
        timeAgo: '10m ago',
        imageUrl: 'https://www.w3schools.com/w3images/nature.jpg',
      });
      event.target.complete();
    }, 1000);
  }
}
