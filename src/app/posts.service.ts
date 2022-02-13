import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  sendPost(post: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/posts`, post);
  }
}
