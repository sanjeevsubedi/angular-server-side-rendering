import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
        <h3>Posts</h3>
        <ng-container *ngIf="(posts$ | async)">
          <div *ngFor="let post of (posts$ | async)">
            <div>id: {{post.id}}</div>
            <div>title: {{post.title}}</div>
          </div>
        </ng-container>
  `
})
export class HomeComponent implements OnInit {
  posts$: Observable<any> = null;
  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.posts$ = this.appService.getPosts();
  }

}
