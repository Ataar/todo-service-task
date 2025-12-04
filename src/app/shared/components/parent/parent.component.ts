import { Component, OnInit } from '@angular/core';
import { Post, PostService } from 'src/app/posts.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
      
    });
  }


}
