import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleElement } from '../models/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article;
  articleLists: ArticleElement[];
  errorUrl;
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
    this.articles = this.route.snapshot.data['articleList']
    this.articleLists = this.articles.articles;
    this.errorUrl = `https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png`;
  }

  ngOnInit(): void {
  }
  onClick(item: ArticleElement) {
    console.log(item);
    try {
      this.articleService.setSelectedArticle(item)
      this.router.navigate(['/article-detail']);
    } catch (error) {
      this.router.navigate(['/home']);
      console.log(error)
    }
  }

}
