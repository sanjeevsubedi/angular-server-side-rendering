import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = '/api/posts'; // https://jsonplaceholder.typicode.com/posts
    return this.http.get(url);
  }
}
