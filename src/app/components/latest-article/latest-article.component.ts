import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Article } from '../modals/article';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css'],
})
export class LatestArticleComponent implements OnInit {
  latestArticles$: Observable<Article[]> | any;

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // To get data with async pipe
    this.latestArticles$ = this.dataService.getLatestArticles();
  }

  goToSelectedArticle(id: string): void {
    this.router.navigate(['articles/' + id]);
  }
}
