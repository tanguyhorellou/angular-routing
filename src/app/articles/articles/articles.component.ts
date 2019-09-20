import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  article = {
  id: 100,
  title: 'How to make router & navigation in Angular 8',
  author: 'Didin J.',
  description: 'A complete tutorial about creating router and navigation in the Angular 8 Web Application'
};

id: any;
constructor(private activatedRoute: ActivatedRoute) {this.id = this.activatedRoute.snapshot.params.id;}


  ngOnInit() {
  }

}
