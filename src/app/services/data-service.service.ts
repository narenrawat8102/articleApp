import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../components/modals/article';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  baseUrl = 'http://localhost:4000/api/';

  constructor(private http: HttpClient) {}

  // to get the list of all articles
  getAllArticleList(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + 'getAllArticles');
  }

  // to get the latest articles
  getLatestArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + 'getLatestArticles');
  }
}
