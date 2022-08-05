import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../components/modals/article';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  getArticlesUrl = 'http://localhost:4000/api/getAllArticles';

  constructor(private http: HttpClient) {}

  getAllArticleList(): Observable<Article[]> {
    return this.http.get<Article[]>(this.getArticlesUrl);
  }
}
