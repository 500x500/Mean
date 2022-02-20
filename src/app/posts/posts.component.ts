import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostsService} from '../posts.service';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(
    private postService: PostsService,
  ) { }

  postFormGroup: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  })

  posts$: any;

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts().pipe(
      map((postData) => {
        return postData.posts.map((post: any) => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
          }
        });
      }),
    )
  }

  sendPost(): void {
    const postValue = this.postFormGroup.getRawValue();
    this.postService.sendPost(postValue).subscribe();
  }

  deletePost(id: string): void {
    this.postService.deletePost(id).subscribe(res => {
      console.log(res);
    });
  }
}
