import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, Login, Signup } from '../components/modals/article';

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

  // to get the single article details
  getSingleArticle(articleId: string): Observable<Article> {
    return this.http.get<Article>(
      this.baseUrl + 'getArticleDetails/' + articleId
    );
  }

  // To Signup
  signup(userData: Signup): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'signup', userData);
  }

  isUSerLoggedIn(): boolean {
    const isLogin = sessionStorage.getItem('isLoggedIn');
    if (isLogin) {
      return true;
    }

    return false;
  }

  // To Login
  login(userDetails: Login): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', userDetails);
  }
}
