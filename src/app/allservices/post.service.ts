import { Ipost } from './../user/modelsUser/ipost';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private htp:HttpClient) { }
  getNewsFeed():Observable<Ipost[]>{
    return this.htp.get<Ipost[]>('https://jsonplaceholder.typicode.com/posts/')
  }
  getPost(postId:number):Observable<Ipost>{
    return this.htp.get<Ipost>('https://jsonplaceholder.typicode.com/posts/'+postId);
  }
  getPosts(userID:number):Observable<Ipost[]>{
    return this.htp.get<Ipost[]>('https://jsonplaceholder.typicode.com/user/'+userID+'/posts');
  }
  addPost(post:Ipost):Observable<Ipost>{
    return this.htp.post<Ipost>('https://jsonplaceholder.typicode.com/posts/',JSON.stringify( post));
  }
  editPost(Post:Ipost):Observable<Ipost>{
    return this.htp.put<Ipost>('https://jsonplaceholder.typicode.com/posts/'+Post.id,JSON.stringify(Post) );

  }
  DeletePost(postId:object):Observable<any>{
    return this.htp.delete<any>('https://jsonplaceholder.typicode.com/posts/'+postId);
  }

}
