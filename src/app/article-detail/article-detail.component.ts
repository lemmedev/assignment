import { Component, OnInit } from '@angular/core';
import { ArticleElement } from '../models/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: any;
  constructor(private articleService: ArticleService) {
    this.articleService.getSelectedArticle().subscribe((val: ArticleElement) => this.article = val)
  }

  ngOnInit(): void {
  }


}
