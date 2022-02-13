import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostsService} from '../posts.service';

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

  ngOnInit(): void {
  }

  sendPost(): void {
    const postValue = this.postFormGroup.getRawValue();
    this.postService.sendPost(postValue).subscribe();
  }
}
