import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, ArticleElement } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private clickedArticle = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  setSelectedArticle(article: ArticleElement) {
    this.clickedArticle.next(article)
  }

  getSelectedArticle(): Observable<ArticleElement> {
    return this.clickedArticle.asObservable();
  }

  fetchArticles() {
    return this.http.get<Article>(`${environment.apiUrl}`)
  }
}
