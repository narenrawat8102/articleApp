import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Article } from '../modals/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article | any;

  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.dataService
        .getSingleArticle(params['articleId'])
        .subscribe((article: Article) => (this.article = article));
    });
  }
}
