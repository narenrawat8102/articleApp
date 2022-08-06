import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Article } from '../modals/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService
      .getAllArticleList()
      .subscribe((articles) => (this.articles = articles));
  }

  goToArticleDetails(id: string): void {
    this.router.navigate(['articles/' + id]);
  }
}
