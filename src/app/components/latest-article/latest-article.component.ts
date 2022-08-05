import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Article } from '../modals/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css'],
})
export class LatestArticleComponent implements OnInit {
  latestArticles$!: Observable<Article[]>;

  constructor(private dataService: DataServiceService) {}

  // Method to  get data with async pipe
  getLatestArticles() {
    this.latestArticles$ = this.dataService.getLatestArticles();
  }

  ngOnInit(): void {
    // To get data with async pipe
    this.getLatestArticles();
  }
}
