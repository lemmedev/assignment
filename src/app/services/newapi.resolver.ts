import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class NewapiResolver implements Resolve<Article> {
  constructor(private articleService: ArticleService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> {
    return this.articleService.fetchArticles();
  }
}
