import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/posts`);
  }

  sendPost(post: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/posts`, post);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/post/` + postId);
  }
}
