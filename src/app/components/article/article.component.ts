import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Article } from '../modals/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articles: Article[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService
      .getAllArticleList()
      .subscribe((articles) => (this.articles = articles));
  }
}
