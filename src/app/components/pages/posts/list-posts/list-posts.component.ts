import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PostI} from "../../../../shared/models/post.interface";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  public posts$: Observable<PostI[]>;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    // this.postService.getAllPosts().subscribe(res => console.log('POSTS', res));
    this.posts$ = this.postService.getAllPosts();
  }

}
