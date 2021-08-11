export interface Article {
  status: string;
  totalResults: number;
  articles: ArticleElement[];
}

export interface ArticleElement {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: null | string;
}

export interface Source {
  id: null | string;
  name: string;
}
